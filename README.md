# Khalil Ben Maatoug — PFE Portfolio

Personal portfolio website for **Khalil Ben Maatoug**, 3rd-year Computer Science student at Université Centrale Tunisia, seeking a PFE internship (January 2027).

## Live

Once deployed: [https://khalil-dev916.github.io/portfolio-pfe](https://khalil-dev916.github.io/portfolio-pfe)

## Features

### Theme & Design
- **Vercel-inspired dark / light mode** — pure black↔white palette, persisted in localStorage
- **Animated background** — slow-drifting gradient orbs (blue / purple / cyan) behind a subtle grid that fades at the edges
- **EN / FR language toggle** — full bilingual content
- **CV download** — `public/CV-Khalil-Ben-Maatoug.pdf`
- **Responsive** — mobile burger menu, desktop nav
- Custom **K** monogram + favicon

### Animations
- **Letter-by-letter hero name reveal** — staggered blur → sharp entrance on load
- **Typewriter line** — rotating roles ("Full-Stack Developer", "Software Engineering Student", …)
- **Scroll reveals** — every section fades up as it enters the viewport (eased with `cubic-bezier(0.16, 1, 0.3, 1)`)
- **Section underline draw** — header rules animate in on reveal
- **Buttons** — lift + arrow slide (primary), left→right fill sweep (secondary), press scale
- **Project cards** — 6px lift, soft shadow, cursor-following spotlight glow
- **Nav links** — underline draws from left on hover
- **Skill tags** — pop-scale on hover
- **Social icons** — lift + invert on hover
- **Status pill** — pulsing green ring
- All motion respects `prefers-reduced-motion`

### Sections
Hero · About · Projects · Skills · Achievements · Education · Contact

## Tech Stack

- [React 19](https://react.dev) + [Vite 8](https://vitejs.dev)
- [Tailwind CSS 3](https://tailwindcss.com) (CSS-variable theming)
- [oxlint](https://oxlint.rs) for linting
- [gh-pages](https://www.npmjs.com/package/gh-pages) for GitHub Pages deploy

## Getting Started

```bash
npm install
npm run dev        # http://localhost:5173/portfolio-pfe/
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build to `dist/` |
| `npm run lint` | Run oxlint |
| `npm run preview` | Preview production build |
| `npm run deploy` | Build + publish to `gh-pages` branch |

## Deploy to GitHub Pages

```bash
git init
git remote add origin https://github.com/khalil-dev916/portfolio-pfe.git
npm run deploy
```

Then enable **Pages → Deploy from a branch → `gh-pages`** in repo settings.

## Project Structure

```
portfolio-pfe/
├── public/
│   ├── CV-Khalil-Ben-Maatoug.pdf
│   └── kb-logo.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Fixed nav + theme/lang toggles
│   │   ├── Hero.jsx            # LetterReveal name + Typewriter + CTAs
│   │   ├── LetterReveal.jsx    # Staggered letter blur-in
│   │   ├── Typewriter.jsx      # Rotating phrases
│   │   ├── ScrollReveal.jsx    # IntersectionObserver fade-up
│   │   ├── SpotlightCard.jsx   # Cursor-following glow
│   │   ├── BgEffects.jsx       # Gradient orbs + grid
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Achievements.jsx
│   │   ├── Education.jsx
│   │   └── Contact.jsx
│   ├── context/                # AppContext (lang + theme)
│   ├── translations.js         # EN / FR content
│   ├── App.jsx
│   └── index.css               # Theme vars, animations, buttons
├── index.html
├── tailwind.config.js
└── vite.config.js
```
