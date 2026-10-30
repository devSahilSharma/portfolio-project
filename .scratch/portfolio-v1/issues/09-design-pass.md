# 09: Design pass (brand look)

Status: resolved
Blocked by: 02, 03, 04, 05, 06

Spec: [spec.md](../spec.md)

## What

Interactive session with the owner using the impeccable skill to decide and build the brand look. It covers the styling approach (Tailwind vs plain CSS), typography, colour, light/dark mode, the Intro's visual treatment (photo and bio), the Open Graph preview image, and motion.

Ready-for-human because the brand decisions are the owner's to make in conversation, not something an agent can do unattended.

## Acceptance

- The owner approves the look.
- The decided design system is recorded (e.g. `DESIGN.md`).
- The placeholder preview image is replaced.

## Comments

2026-10-30: Decided with the owner through the impeccable skill and approved in the browser. Direction "The Line": the career drawn as one metro line, with Experience as stations, Projects as a branch, and Stack as interchange bullets. Light only, signal-orange line, Archivo self-hosted, plain CSS (no Tailwind), lively motion. The "you are here" marker rides for everyone. Recorded in `DESIGN.md` (+ `.impeccable/design.json`), product context in `PRODUCT.md`. The preview image is `public/og.png`, rendered by `npm run og`; regenerate it once real content lands (added to issue 10).
