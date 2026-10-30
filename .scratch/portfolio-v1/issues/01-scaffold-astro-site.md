# 01: Scaffold the Astro site

Status: resolved

Spec: [spec.md](../spec.md)

## What

Create the Astro + TypeScript (strict) project at the repo root, with a home page at `/` that renders a placeholder heading. Set up a test runner (Vitest) for the logic tests later issues need. Initialise git with a sensible `.gitignore`.

## Acceptance

- `npm run dev` serves the home page.
- `npm run build`, `npx astro check` and `npm test` all pass.
- Styling is minimal and neutral (see spec: styling waits for the design pass).
- Existing files (`CLAUDE.md`, `GLOSSARY.md`, `docs/`, `.scratch/`) are untouched.
