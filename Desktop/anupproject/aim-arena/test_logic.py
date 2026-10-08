"""Logic checks that do not need a visible window."""

import aim_arena as g


class P:
    def __init__(self, x, y, r):
        self.x, self.y, self.r = x, y, r


def test_overlap():
    assert g.circles_overlap(P(0, 0, 10), P(15, 0, 10))
    assert not g.circles_overlap(P(0, 0, 10), P(30, 0, 5))


def test_levels_get_harder():
    a, b = g.level_settings(1), g.level_settings(3)
    assert b["speed"] > a["speed"]
    assert b["radius"] < a["radius"]
    assert b["spawn"] < a["spawn"]
    assert b["seconds"] < a["seconds"]


def test_hit_and_escape():
    game = g.Game()
    game.start()
    target = g.Target(1)
    target.x, target.y = 100, 100
    bullet = g.Bullet(100, 100, 100, 90)
    bullet.x, bullet.y = 100, 100
    game.targets = [target]
    game.bullets = [bullet]
    before = game.score
    game._hits()
    assert game.score > before
    assert game.targets == []

    game.lives = 2
    missed = g.Target(1)
    missed.y = g.HEIGHT + missed.r + 1
    game.targets = [missed]
    game.time_left = 10
    game.update(0.01)
    assert game.lives == 1


if __name__ == "__main__":
    test_overlap()
    test_levels_get_harder()
    test_hit_and_escape()
    print("ok")
