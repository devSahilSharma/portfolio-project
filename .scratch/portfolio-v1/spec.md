# Spec: Personal Site v1

Vocabulary follows [GLOSSARY.md](../../GLOSSARY.md). Framework decision: [ADR 0001](../../docs/adr/0001-astro-for-site-framework.md).

## Goal

A personal brand site for the owner, a software engineer. Visitors should be able to:

1. see what the owner has done (Experience) and built (Projects),
2. download the Résumé,
3. reach out through Contact links,
4. later, read the owner's Posts.

Searching the owner's name should surface the site.

## Scope

### v1: one scrolling page at `/`

In order:

- **Intro**: name, one-line headline, 2–3 sentence bio, photo, Contact links (email + social profiles: LinkedIn, GitHub, X).
- **Experience**: the owner's work history, newest first. Each entry has company, title, dates (current role open-ended), what they did (short summary and/or bullets), and a Stack line. Mirrors the Résumé. No confidential detail.
- **Projects**: each is a short card (name, one-line description, Stack, demo link and/or source link). No case-study pages. The site itself is Project #1 (public repo).
- **Résumé**: a download link to a PDF the owner supplies.

### Writing (built in v1, hidden until it has content)

- Posts live at `/blog/<slug>`, with an index at `/blog`, on the same domain as the site.
- An RSS feed lists the Posts.

### Rule: a section appears only when it has content

Projects, Writing, Experience, and any nav link to them are not rendered when they have zero entries. There are no "coming soon" placeholders.

Experience was added to this rule while building issue 03. It will normally always have entries, but an empty Experience section would otherwise show a bare heading.

### Out of scope for v1

Standalone skills list, contact form, CMS, Project/Experience detail pages, custom domain (decided later), comments, newsletter.

## Content

- All content is Markdown/data files in the repo, edited in a normal editor and published by committing and pushing.
- Every content type has a typed schema validated at build. Invalid content (e.g. a Post without a date, a Project with neither a demo nor a source link) **fails the build**.
- Intro and Contact links come from one site profile data file. They are the single source for the page, metadata, and structured data.
- The Résumé PDF lives as a static file. The owner keeps it in step with Experience by hand.

## Tech

- Astro + TypeScript (strict).
- Styling is decided in the design pass. Until then, use minimal neutral styling so the structure is reviewable, and don't commit to a design system.
- Hosting: public GitHub repo → Cloudflare Pages, with automatic deploys on push and preview deploys on branches.
- Analytics: Cloudflare Web Analytics (cookieless, no banner).

## SEO and sharing

- Every page has a title, meta description, canonical URL, and Open Graph/Twitter card tags with a preview image. Use a placeholder image until the design pass.
- A sitemap.
- RSS feed for Posts.
- `Person` JSON-LD on the home page: name, job title, URL, and `sameAs` pointing at the social profiles from the site profile.
- Launch task (owner): add the site URL to LinkedIn, GitHub and X profiles.

## Quality

- `astro check` (types and content) and the production build must pass for every change.
- Automated tests only where there is real logic, chiefly the "section appears only when it has content" rule and Experience ordering. Don't write tests for static copy.
- Each issue is reviewed with `/code-review` before it's considered done.

## Deferred to the design pass (impeccable)

Brand look and feel, styling approach (Tailwind vs plain CSS), the Intro's visual treatment (photo and bio placement), Open Graph preview image design, light/dark mode, typography, motion.

## Open items for the owner

- Domain name (buy later; `yourname.com` or `.dev`).
- Real content: bio, headline, photo, Experience entries, Résumé PDF, social profile URLs.
