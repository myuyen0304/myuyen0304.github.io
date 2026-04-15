# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start local dev server at http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the dist/ build locally
```

No test runner or linter is configured.

## Architecture

Single-page portfolio built with **Vite + React** (no React Router). Navigation uses anchor links + `scrollIntoView`. All content lives in `src/App.jsx` which composes six section components in order:

```
Navbar → Hero → About → Skills → Projects → Contact → Footer
```

**Styling** is plain CSS in `src/index.css` using CSS custom properties for the design system (colors, spacing, radii). No CSS modules, no Tailwind. All tokens are defined on `:root` at the top of `index.css` — edit there to change the palette or accent color.

**Content** is hardcoded as JS arrays/objects inside each component file (e.g. `projects` array in `Projects.jsx`, `skillGroups` in `Skills.jsx`). To update copy or data, edit the relevant component directly.

## Deployment

Push to `main` triggers `.github/workflows/deploy.yml`, which runs `npm ci && npm run build` and deploys `dist/` via `actions/deploy-pages`. The GitHub Pages source must be set to **"GitHub Actions"** in repo Settings → Pages (one-time manual step). The site is a user page (`myuyen0304.github.io`), so `vite.config.js` uses `base: '/'`.
