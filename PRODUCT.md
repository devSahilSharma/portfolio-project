# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

A mix, with no single audience leading: recruiters and hiring managers deciding whether to interview the owner, people weighing the owner for project work, and engineering peers who found a repo, a profile, or (later) a Post. They usually arrive from a name search or a link on LinkedIn, GitHub, or X, and spend a minute or two deciding who this person is.

## Product Purpose

The owner's personal brand site. It shows who the owner is as a full-stack software engineer: what they've done (Experience), what they've built (Projects), their Résumé, how to reach them (Contact links), and later their writing (Posts). Success means a visitor leaves with a clear sense of the owner as a person, not only a CV, and knows how to reach out. Searching the owner's name should surface the site.

## Positioning

It is a personal brand, not a résumé template. The site should feel like the owner: one specific full-stack engineer with their own voice. A generic developer-portfolio layout that anyone could drop their name into is the failure case.

## Operating Context

- Content is Markdown/data files in the repo, edited in a normal editor, published by committing and pushing; hosted on Cloudflare Pages.
- Intro and Contact links come from one profile file (`src/content/profile.json`), the single source for the page, metadata, and structured data.
- Visitors arrive on phones (from social profiles) as often as on desktop (from job applications).

## Capabilities and Constraints

- Stack: Astro + TypeScript (strict), static output. See `docs/adr/0001-astro-for-site-framework.md`.
- One scrolling page at `/`: Intro → Experience → Projects, plus a Résumé PDF download. Writing (`/blog`, `/blog/<slug>`, RSS) is built but hidden until the first Post exists.
- A section and its nav link appear only when they have content. No "coming soon" placeholders.
- Out of scope: standalone skills list (Stack is shown only alongside an Experience or Project), contact form, CMS, detail pages, comments, newsletter.
- Vocabulary follows `GLOSSARY.md` (Experience, Stack, Project, Résumé, Post, Contact links).
- Undecided: custom domain.

## Brand Commitments

- Voice: plain and direct, no nonsense, with a Gen Z register: short sentences, casual and confident, no corporate filler. (Owner's words: "plain and direct, no nonsense, like a genz".)
- It should feel personal, like "me", rather than like a generic portfolio.

## Evidence on Hand

- All profile content is still placeholder (name, headline, bio, photo, social URLs in `src/content/profile.json`; one placeholder Experience entry). Real content comes from the owner before launch. Do not invent employers, metrics, or achievements.
- Project #1 is this site itself (public repo).
- Résumé: `public/resume.pdf` (owner-supplied).
- Photo: placeholder SVG at `src/assets/profile-photo-placeholder.svg` until the owner supplies one.

## Product Principles

1. Personal over generic: every choice should make the site more recognisably the owner's.
2. Show, don't list: Stack appears with the work it was used on, never as a skills cloud.
3. Nothing empty: a section exists only when it has real content.
4. Content stays in plain files the owner can edit without touching the design.

## Accessibility & Inclusion

Standard WCAG 2.2 AA. Respect `prefers-reduced-motion` and the visitor's colour-scheme preference.
