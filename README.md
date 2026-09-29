# SocialEyes AI — website

Vite + React single-page site with a camera-shutter section transition (framer-motion).

## Requirements

- [Node.js](https://nodejs.org/) **18 or newer** (LTS recommended)
- npm (comes with Node.js)

Check your versions:

```bash
node -v
npm -v
```

## Setup (Windows and Mac)

1. Open a terminal in this project folder (the one that contains `package.json`).

   **Windows (PowerShell or Command Prompt)**

   ```bat
   cd path\to\socialeyes-website\socialeyes-website
   ```

   **Mac (Terminal)**

   ```bash
   cd path/to/socialeyes-website/socialeyes-website
   ```

2. Install dependencies (once, or after `package.json` changes):

   ```bash
   npm install
   ```

## Run locally (development)

```bash
npm run dev
```

Then open the URL Vite prints, usually:

**http://localhost:5173**

Stop the server with `Ctrl+C` (Windows and Mac).

If port 5173 is already in use:

```bash
npm run dev -- --port 5174
```

## Build for production

```bash
npm run build
```

Output goes to the `dist/` folder.

Preview the production build:

```bash
npm run preview
```

## Project layout

```
socialeyes-website/
├── index.html              Vite entry (mounts React)
├── package.json            Scripts and dependencies
├── vite.config.js
├── public/assets/img/      Images served as static files
├── src/
│   ├── main.jsx            React entry
│   ├── App.jsx             Shutter navigation + themes
│   ├── styles.css
│   ├── sections.js
│   └── components/
│       ├── Nav.jsx
│       ├── Page.jsx
│       └── Shutter.jsx     Camera shutter (framer-motion)
└── README.md
```

## Notes

- Do **not** open `index.html` by double-clicking — use `npm run dev` so Vite can load modules and assets.
- Images live under `public/assets/img/` and are referenced as `/assets/img/...`.
- Aptos is used in CSS with system fallbacks (`Calibri`, `Segoe UI`). Pixel-perfect Aptos needs licensed `.woff2` files self-hosted; they are not included.
