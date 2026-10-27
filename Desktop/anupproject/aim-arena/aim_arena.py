"""Aim Arena — 2D shooting game. Run: python aim_arena.py"""

import json
import math
import random
from pathlib import Path

import pygame

WIDTH, HEIGHT = 960, 640
FPS = 60
GUN = (WIDTH // 2, HEIGHT - 40)
SCORE_FILE = Path(__file__).with_name("highscores.json")
LIVES = 5

BG = (16, 20, 28)
PANEL = (28, 34, 46)
INK = (236, 232, 220)
MUTED = (160, 168, 180)
SHOT = (255, 214, 90)
HIT = (120, 220, 140)


def circles_overlap(a, b):
    dx, dy = a.x - b.x, a.y - b.y
    reach = a.r + b.r
    return dx * dx + dy * dy <= reach * reach


def level_settings(level):
    """Harder each level: faster, smaller, more frequent, less time."""
    level = max(1, int(level))
    return {
        "speed": 90 + level * 32,
        "radius": max(14, 38 - level * 3),
        "spawn": max(0.4, 1.55 - level * 0.16),
        "seconds": max(18, 48 - (level - 1) * 5),
    }


def load_scores():
    if not SCORE_FILE.exists():
        return []
    try:
        rows = json.loads(SCORE_FILE.read_text())
    except (json.JSONDecodeError, OSError):
        return []
    return sorted(rows, key=lambda row: row["score"], reverse=True)[:5]


def save_score(name, score):
    rows = load_scores()
    rows.append({"name": (name.strip() or "Player")[:12], "score": int(score)})
    rows = sorted(rows, key=lambda row: row["score"], reverse=True)[:5]
    SCORE_FILE.write_text(json.dumps(rows))
    return rows


class Bullet:
    def __init__(self, x, y, tx, ty):
        angle = math.atan2(ty - y, tx - x)
        self.x, self.y, self.r = float(x), float(y), 5
        self.vx = math.cos(angle) * 640
        self.vy = math.sin(angle) * 640

    def update(self, dt):
        self.x += self.vx * dt
        self.y += self.vy * dt

    def gone(self):
        return self.x < -20 or self.x > WIDTH + 20 or self.y < -20 or self.y > HEIGHT + 20


class Target:
    COLOURS = {"drift": (255, 92, 70), "bounce": (90, 170, 255), "wave": (190, 120, 255)}

    def __init__(self, level):
        cfg = level_settings(level)
        self.r = cfg["radius"]
        self.pattern = random.choice(("drift", "bounce", "wave"))
        self.x = random.uniform(self.r + 20, WIDTH - self.r - 20)
        self.y = -self.r
        speed = cfg["speed"] * random.uniform(0.75, 1.15)
        self.vx = random.uniform(-speed * 0.45, speed * 0.45)
        self.vy = speed * random.uniform(0.55, 1.0)
        self.phase = random.random() * math.tau
        self.alive = True

    def update(self, dt):
        self.x += self.vx * dt
        if self.pattern == "bounce":
            self.y += self.vy * dt
            if self.x < self.r or self.x > WIDTH - self.r:
                self.vx *= -1
                self.x = min(max(self.x, self.r), WIDTH - self.r)
        elif self.pattern == "wave":
            self.phase += dt * 4
            self.y += self.vy * dt
            self.x += math.sin(self.phase) * 90 * dt
        else:
            self.y += self.vy * dt

    def escaped(self):
        return self.y - self.r > HEIGHT


class Game:
    def __init__(self):
        self.state = "menu"
        self.level = 1
        self.score = 0
        self.lives = LIVES
        self.time_left = 0
        self.spawn_in = 0
        self.cooldown = 0
        self.bullets = []
        self.targets = []
        self.name = ""
        self.saved = False
        self.flash = 0
        self._arm_level()

    def _arm_level(self):
        cfg = level_settings(self.level)
        self.time_left = cfg["seconds"]
        self.spawn_in = 0.4
        self.bullets.clear()
        self.targets.clear()

    def start(self):
        self.state = "play"
        self.level = 1
        self.score = 0
        self.lives = LIVES
        self.name = ""
        self.saved = False
        self._arm_level()

    def shoot(self, pos):
        if self.cooldown > 0 or self.state != "play":
            return
        self.bullets.append(Bullet(*GUN, *pos))
        self.cooldown = 0.16

    def update(self, dt):
        self.flash = max(0, self.flash - dt)
        if self.state != "play":
            return
        self.cooldown = max(0, self.cooldown - dt)
        self.time_left -= dt
        self.spawn_in -= dt
        if self.spawn_in <= 0:
            self.targets.append(Target(self.level))
            self.spawn_in = level_settings(self.level)["spawn"]
        for bullet in self.bullets:
            bullet.update(dt)
        for target in self.targets:
            target.update(dt)
        self._hits()
        missed = [t for t in self.targets if t.escaped()]
        if missed:
            self.lives -= len(missed)
            self.targets = [t for t in self.targets if not t.escaped()]
        self.bullets = [b for b in self.bullets if not b.gone()]
        if self.lives <= 0:
            self.lives = 0
            self.state = "results"
        elif self.time_left <= 0:
            self.score += 50 * self.level
            self.level += 1
            self.flash = 0.8
            self._arm_level()

    def _hits(self):
        for bullet in self.bullets:
            for target in self.targets:
                if target.alive and circles_overlap(bullet, target):
                    target.alive = False
                    bullet.x = -999
                    self.score += 10 + self.level * 2
                    break
        self.targets = [t for t in self.targets if t.alive]

    def draw(self, screen, font, big):
        screen.fill(BG)
        if self.state == "menu":
            self._menu(screen, font, big)
        elif self.state == "play":
            self._play(screen, font, big)
        else:
            self._results(screen, font, big)

    def _menu(self, screen, font, big):
        title = big.render("AIM ARENA", True, INK)
        screen.blit(title, title.get_rect(center=(WIDTH // 2, 160)))
        sub = font.render("Click to shoot. Clear the clock. Don't let targets escape.", True, MUTED)
        screen.blit(sub, sub.get_rect(center=(WIDTH // 2, 220)))
        self._button(screen, font, "START", pygame.Rect(WIDTH // 2 - 90, 280, 180, 48))
        self._button(screen, font, "QUIT", pygame.Rect(WIDTH // 2 - 90, 348, 180, 48))
        best = load_scores()
        label = f"Best: {best[0]['name']} {best[0]['score']}" if best else "No scores yet"
        line = font.render(label, True, MUTED)
        screen.blit(line, line.get_rect(center=(WIDTH // 2, 450)))

    def _play(self, screen, font, big):
        pygame.draw.circle(screen, (70, 78, 96), GUN, 16)
        pygame.draw.line(screen, SHOT, GUN, pygame.mouse.get_pos(), 2)
        for bullet in self.bullets:
            pygame.draw.circle(screen, SHOT, (int(bullet.x), int(bullet.y)), bullet.r)
        for target in self.targets:
            colour = Target.COLOURS[target.pattern]
            pygame.draw.circle(screen, colour, (int(target.x), int(target.y)), int(target.r))
            pygame.draw.circle(screen, INK, (int(target.x), int(target.y)), max(4, int(target.r) // 4))
        mx, my = pygame.mouse.get_pos()
        pygame.draw.circle(screen, INK, (mx, my), 10, 1)
        hud = font.render(
            f"Score {self.score}    Lives {self.lives}    Level {self.level}    {max(0, math.ceil(self.time_left))}s",
            True,
            INK,
        )
        screen.blit(hud, (20, 16))
        if self.flash > 0:
            note = big.render(f"LEVEL {self.level}", True, HIT)
            screen.blit(note, note.get_rect(center=(WIDTH // 2, HEIGHT // 2)))

    def _results(self, screen, font, big):
        head = big.render("RESULTS", True, INK)
        screen.blit(head, head.get_rect(center=(WIDTH // 2, 120)))
        line = font.render(f"Score {self.score}    Reached level {self.level}", True, MUTED)
        screen.blit(line, line.get_rect(center=(WIDTH // 2, 190)))
        prompt = "Saved" if self.saved else f"Name: {self.name}_   Enter to save"
        screen.blit(font.render(prompt, True, INK), (WIDTH // 2 - 160, 250))
        screen.blit(font.render("R play again    Esc menu", True, MUTED), (WIDTH // 2 - 130, 310))
        y = 370
        for row in load_scores():
            screen.blit(font.render(f"{row['name']}  {row['score']}", True, MUTED), (WIDTH // 2 - 80, y))
            y += 28

    def _button(self, screen, font, label, rect):
        hot = rect.collidepoint(pygame.mouse.get_pos())
        pygame.draw.rect(screen, (70, 86, 110) if hot else PANEL, rect, border_radius=6)
        text = font.render(label, True, INK)
        screen.blit(text, text.get_rect(center=rect.center))

    def click(self, pos):
        if self.state == "menu":
            if pygame.Rect(WIDTH // 2 - 90, 280, 180, 48).collidepoint(pos):
                self.start()
            elif pygame.Rect(WIDTH // 2 - 90, 348, 180, 48).collidepoint(pos):
                return False
        elif self.state == "play":
            self.shoot(pos)
        return True

    def key(self, event):
        if self.state != "results" or self.saved:
            if event.key == pygame.K_ESCAPE and self.state == "results":
                self.state = "menu"
            elif event.key == pygame.K_r and self.state == "results":
                self.start()
            return
        if event.key == pygame.K_RETURN:
            save_score(self.name, self.score)
            self.saved = True
        elif event.key == pygame.K_BACKSPACE:
            self.name = self.name[:-1]
        elif event.key == pygame.K_ESCAPE:
            self.state = "menu"
        elif event.key == pygame.K_r:
            self.start()
        elif event.unicode.isalpha() and len(self.name) < 12:
            self.name += event.unicode


def main():
    pygame.init()
    screen = pygame.display.set_mode((WIDTH, HEIGHT))
    pygame.display.set_caption("Aim Arena")
    font = pygame.font.SysFont("menlo", 22)
    big = pygame.font.SysFont("menlo", 54)
    clock = pygame.time.Clock()
    game = Game()
    running = True
    while running:
        dt = clock.tick(FPS) / 1000
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
            elif event.type == pygame.MOUSEBUTTONDOWN and event.button == 1:
                running = game.click(event.pos)
            elif event.type == pygame.KEYDOWN:
                game.key(event)
        game.update(min(dt, 0.05))
        game.draw(screen, font, big)
        pygame.display.flip()
    pygame.quit()


if __name__ == "__main__":
    main()
