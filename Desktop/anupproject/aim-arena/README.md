# Aim Arena

A small 2D shooting game about accuracy and reaction time. Targets move across the arena, and each cleared level gets harder.

Group 3: Anoop & Diya. Built for BCI516 with Python and Pygame.

## Play

Requires Python 3.9+.

```bash
python3 -m pip install -r requirements.txt
python3 aim_arena.py
```

## Controls

| Action | Input |
| --- | --- |
| Start or quit | Click the menu buttons |
| Aim | Move the mouse |
| Shoot | Click |
| Save score | Type a name, then Enter |
| Play again | R |
| Back to menu | Esc |

You start with 5 lives. A hit scores points. A target that leaves the bottom of the screen costs a life. When the timer runs out, the next level starts: targets are faster and smaller, they spawn more often, and you have less time. Reaching zero lives opens the results screen. Scores are stored in `highscores.json` next to the game.

Targets use three movement patterns: straight drift (red), wall bounce (blue), and a wave (purple).

## Layout

```
aim-arena/
├── aim_arena.py      # game
├── test_logic.py     # collision, difficulty, hit, and escape checks
├── requirements.txt
└── README.md
```

```bash
python3 test_logic.py
```

## Stack

- Python
- [Pygame](https://www.pygame.org/) for the window, input, and drawing
