# SocialEyes AI — website

A single-page marketing site built from the `SocialEyes_MANGO_Web_site_RC_21.pptx` deck.
No build step, no framework, no dependencies. Open `index.html` in a browser and it works.

## Design

Images and text are always in **separate, clearly bounded blocks** — no text is ever
printed on top of a photograph. Every photo sits in its own contained, rounded frame with
a shadow; every block of copy sits on a plain background with a thin coloured rule down
its left edge. Images take two thirds of the width and text one third. Sections alternate which side the image sits on, so the page has a steady
left–right rhythm as you scroll instead of a stack of look-alike banners.

The one deliberate exception is the "showcase" panel — a framed photo with a handful of
small animated markers layered on it, captioned outside the frame, never crossing
into a text block. It starts animating only once scrolled into view.

## Structure

```
socialeyes-website/
├── index.html              690 lines — all the copy, 7 sections
├── assets/
│   ├── css/styles.css      329 lines — organised by component
│   ├── js/main.js           82 lines — plain ES5, no libraries
│   └── img/*.png, *.jpeg    31 original images, byte-identical to the deck's media
└── README.md
```

## Running it locally

Double-clicking `index.html` works. If you prefer a local server:

```bash
cd socialeyes-website
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploying

Upload the whole folder to any static host — Netlify, Vercel, GitHub Pages, Cloudflare
Pages, S3, or plain shared hosting. There is nothing to compile.

The only external requests are two Google Fonts stylesheets (Archivo and Newsreader). To
host the fonts yourself, download them, drop the files in `assets/fonts/`, replace the
`<link>` tags in `index.html` with a local `@font-face` block, and nothing else changes.

## Editing

**Text.** All copy lives in `index.html`. Each section is marked with a comment banner
(`<!-- ============ CHALLENGES ============ -->`).

**Colours.** Driven by custom properties at the top of `styles.css`:

| Token | Value | Used for |
|---|---|---|
| `--mango` | `#F2A104` | wordmark dot, active nav link, buttons, back-to-top |
| `--terra` | `#C1512F` | urgent/high-risk accents and tags |
| `--moss` | `#4F7F45` | accent rule on some content blocks |
| `--teal` | `#2C7C97` | accent rule on some content blocks |
| `--slate` | `#5B6268` | neutral accent rule |
| `--paper` / `--paper-2` | `#0F1113` / `#161819` | page and alternating section backgrounds |
| `--card` | `#1B1D1F` | card and contained-image surrounds |
| `--ink` | `#0A0B0C` | nav, footer, the two showcase panels |

Change a token once and it updates everywhere.

**Adding a feature block.** This is the repeating unit — a contained image beside a block
of copy, never overlapping:

```html
<div class="feature">                     <!-- drop this wrapper to sit inside an
                                               existing section instead of starting one -->
  <div class="feature-grid rev">          <!-- add "rev" to put the image on the right -->
    <figure class="feature-media">
      <img src="assets/img/NAME.png" alt="Describe the photograph">
    </figure>
    <div class="feature-body" style="--accent:var(--teal)">   <!-- pick an accent token -->
      <h3>Headline</h3>
      <p>Body copy.</p>
      <p class="ask">An italic closing question, set off by a rule.</p>
      <p class="credit">A small source or caption note, if needed.</p>
    </div>
  </div>
</div>
```

`.feature:nth-child(even)` automatically gets the alternate background, so you don't need
to set that by hand — just alternate `rev` on consecutive blocks for the zig-zag layout.

**Adding a section intro.** Each of the seven sections opens with a numbered `.sec-head`
banner — text on one side, one contained image on the other:

```html
<header class="sec-head">
  <div class="sec-head-grid">
    <div>
      <p class="eyebrow" style="--accent:var(--mango)"><span class="no">08</span> New section</p>
      <h2>Headline</h2>
      <p class="q">One sentence of framing, in italic serif.</p>
    </div>
    <figure class="sec-head-media"><img src="assets/img/NAME.png" alt="..."></figure>
  </div>
</header>
```

**Adding a nav section.** Add the link in `.navlinks` (with a matching `data-label`
attribute — see below) and give the new `<section>` a matching `id`. The scroll-spy reads
the links at runtime, so it picks up new entries automatically.

## How the JavaScript works

`main.js` is about 80 lines of plain ES5, no libraries:

- **Mobile drawer** — toggles `.open` on `.navlinks`, closes on link click.

- **Scroll-spy** — on each animation frame, finds the last section whose top has passed
  the nav line and marks its link `.on`, which turns it mango and bold (no underline).
  Smooth scrolling itself is CSS (`html { scroll-behavior: smooth }`).

  Because bold text is wider than regular, switching weight would normally shove the
  neighbouring links sideways as you scroll. The `.navlinks a::after` rule pre-renders
  each label at weight 700 inside a zero-height hidden box, so every link already occupies
  its bold width and nothing moves. That is why each nav link carries a `data-label`
  attribute repeating its own text — **keep the two in sync if you rename a section**, or
  that link will jitter.

- **Back to top** — a round mango button pinned to the bottom-right corner, hidden until
  you are more than 0.6 viewport-heights down the page. Honours `prefers-reduced-motion`
  by jumping rather than gliding.

- **Showcase reveal** — an `IntersectionObserver` adds `.go` to any `.showcase` element
  once it scrolls into view, which starts its animation. The animated one on the page is the
  AI-detection demo (reticles popping onto the outreach-camp photo). Falls back to showing it immediately
  if the browser has no observer.

- **Contact form** — composes a `mailto:` and hands off to the visitor's mail client.

All motion is wrapped by a `prefers-reduced-motion` rule in the CSS.

## The animated showcase

`#detect` (in Solutions) lives in a `.showcase` section: a `.frame` holding the photo,
small absolutely-positioned markers layered on the photo only (never text blocks), and a
caption or readout printed *below* the frame, outside it. Six `.retic` corner-brackets pop
onto faces in the crowd photo in sequence, each labelled with a finding, and a `.readout`
strip of tags below summarises the triage result. It is captioned as illustrative, not
real-time data.

The former reach-map panel (satellite photo with pulsing place-name pins) has been removed;
only its heading text ("Built to scale") remains in `#reach`.

## Things to change before this goes public

1. **Contact address.** `main.js` sends to `info@socialeyes.ai` — a placeholder. Either
   correct it, or swap the `mailto:` handoff for a real form endpoint (Formspree,
   Netlify Forms, or your own POST target).
2. **Footer notice.** The trade-secret and confidentiality paragraph came from the last
   slide of the deck. It was written for a private document; on a public website it
   probably wants removing or rewriting.
3. **Image alt text.** Every image has alt text, but the descriptions of specific people
   and places are my best guess from the deck. Someone who knows where each photograph
   was taken should correct them.
4. **Statistics.** The figures (1 billion diabetics by 2040, ~70 classifiers, 23,000+
   person registry, 800+ administrative units, one-tenth the cost, 2+ million Tharu
   people) are taken from the deck and are not cited on the page. Add sources if this is
   public-facing. The two map captions in Challenges do credit NNJS and IAPB, 2024.
5. **Social preview.** No Open Graph or Twitter card tags yet. Add `og:title`,
   `og:description` and `og:image` to `<head>` so shared links render a preview.

## Images

Every file in `assets/img/` is the **original, untouched image from the deck** —
copied straight out of `SocialEyes_MANGO_Web_site_RC_21.pptx` (`ppt/media/`) with no
resizing, cropping, re-encoding or compression, so each is byte-for-byte identical to
the file in the presentation. Because they are full resolution the folder is large
(about 158 MB); every image except the hero is lazy-loaded so visitors only download
what they scroll to. Keep the original format (PNG, or JPEG for `consult` and
`interior`) when you swap a file, and update the extension in `index.html`.

Filenames describe the subject: `hero`, `girls`, `sunrise`, `river`, `ruralmap`,
`ktmmap`, `market`, `crowd`, `crowd2`, `bagmati`, `phone`, `frontline`, `primary`,
`tertiary`, `nepaltopo`, `eye`, `retina`, `heatmap`, `satellite2`, `staff`,
`tharu`, `climate`, `clinic`, `plan`, `interior`, `education`, `consult`, `meeting`,
`academy`, `team`, `summit`.

That is every distinct photograph, map, retinal scan and architectural render in the deck.
To swap a photograph, replace the file and keep the name — or point `src` somewhere new.
No image is ever cropped: every `<img>` is displayed at its own natural aspect ratio
(`height:auto`, no `object-fit`). In side-by-side blocks (hero, section heads, feature
blocks and the contact block) the image takes **two thirds** of the width and the text
**one third**; they stack full-width below 980px.
