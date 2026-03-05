# SCORE!

A playful Swedish dance score tracker built with React. Designed for children and early teenagers to record dance moves and emotions across different skill levels and tempos.

## Features

- **3-column score table** — Nivå (level), Långsam (slow), and Snabb (fast) columns with 9 rows grouped by Låg/Mellan/Hög
- **Dual-input cells** — Each cell has two clickable halves: one for selecting a dance move (12 options) and one for an emotion smiley (6 options)
- **Hand-drawn aesthetic** — Off-white paper background, red grid lines, and marker-style fonts (Permanent Marker, Caveat)
- **Animated SVG dancers** — Custom stick-figure dancers (arabesque, pirouette, jeté, plié) with motion lines in the background
- **Följa John mechanic** — Background dancers follow your mouse cursor when it comes within proximity, using lerp-based animation
- **Decorative elements** — Flowing ribbons, music notes, and sparkles with CSS keyframe animations

## Tech Stack

- [React](https://react.dev/) 19 + TypeScript
- [Vite](https://vite.dev/) 7
- [Tailwind CSS](https://tailwindcss.com/) 4

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
npm run preview
```
