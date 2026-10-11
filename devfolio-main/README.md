# Shubham Dalvi — Portfolio · *The Art of the Build*

An interactive digital exhibition: warm editorial paper, ink typography and a
vermilion accent, choreographed with GSAP + ScrollTrigger and Framer Motion.

**Good ideas deserve better execution.**

## Chapters

| №  | Section      | Idea                                              |
| -- | ------------ | ------------------------------------------------- |
| 00 | Hero         | Editorial statement + self-drawing "Assembly" blueprint |
| 01 | About        | Portrait plate + narrative reveals                |
| 02 | Skills       | Interactive IDEA → DELIVERY pipeline (no % bars)  |
| 03 | Projects     | Featured build + varied editorial exhibition      |
| 04 | Work         | Internship chronology drawn down a single rail    |
| 05 | Competitions | Hackathon mission log (Hackverse, Build-it On, IIT Patna) |
| 06 | Achievements | Runner-Up · Frontend Odyssey (IIT Patna) + Java certificate |
| 07 | Collaboration| Marquee invitation                                |
| 08 | Contact      | EmailJS form with validation & live status        |

## Stack

Next.js 14 (pages router) · React 18 · GSAP + ScrollTrigger · Framer Motion ·
Tailwind + SCSS · Typed.js · Vanilla Tilt · EmailJS · Calibre (local) +
JetBrains Mono (self-hosted via @fontsource).

## Run

```bash
npm install
npm run dev      # development
npm run build    # production build
npm run start    # serve production build
npm run lint
```

## Notes

- Respects `prefers-reduced-motion` everywhere; content is readable with JS
  effects disabled.
- Custom cursor is an additive accent only — the native cursor is never hidden.
- Soundtrack is optional, never autoplays.
- First-load JS ≈ 167 kB (sound streams on demand, menu lazy-loads).

Based on the open-source [devfolio](https://github.com/shubh73/devfolio)
structure, fully re-art-directed and rebuilt.
