# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:5173
npm run build    # Production build → dist/
npm run preview  # Preview the production build locally
```

No test suite, no linter configured.

## Architecture

Single-page React app (Vite + React 18 + TailwindCSS v3 + Framer Motion). One scroll-based page — no routing.

**Component flow:** `App.jsx` → fixed `Navbar` + sequential sections: `Hero → About → Parcours → Stack → Projects → Contact` + `Footer`. Each section is a standalone component in `src/components/`.

**State:** entirely local. `Projects.jsx` manages per-card open/close state. `Contact.jsx` manages form state + Formspree submission status.

## Design tokens

All colors, fonts, and animations live in `tailwind.config.js`. Do not use arbitrary Tailwind values for these — use the tokens:

- **Backgrounds:** `bg-bg` `bg-surface` `bg-elevated`
- **Border:** `border-divider`
- **Accent (cyan):** `text-accent` `bg-accent` `border-accent` `bg-accent-dim` — domaine SOC/sécurité, utilisé partout
- **Accent secondaire (violet):** `accent-violet` (`DEFAULT`/`dim`/`muted`) — réservé à la section `Parcours` (représente le passé développeur)
- **Severity:** `text-critical` `text-high` `text-medium` `text-info` (and matching `border-l-*`) — couleurs de gravité MITRE fonctionnelles, distinctes du système accent/accent-violet
- **Fonts:** `font-display` et `font-sans` (Poppins — titres et corps), `font-mono` (JetBrains Mono — actual code/commands only, never prose)

Global CSS utilities (`hero-grid`, `divider-line`, `name-glow`) are defined in `src/index.css`.

## Typography rules

- `font-display font-bold uppercase` for section headings
- `text-xs font-medium uppercase tracking-[0.2em] text-accent` for section eyebrows
- `font-mono` is reserved strictly for command snippets inside expanded project cards — never for labels, descriptions, or navigation

## Contact form

Formspree endpoint is hardcoded at the top of `Contact.jsx`. Replace `YOUR_FORM_ID` with the real ID from formspree.io before deploying.

## Deployment

`vercel.json` rewrites all routes to `index.html` (SPA routing). Deploy by pushing to GitHub and importing the repo on vercel.com — Vite is auto-detected.
