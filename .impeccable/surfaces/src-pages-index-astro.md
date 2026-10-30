---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/blog/[...index].astro","src/pages/blog/[slug].astro"]
---

# Surface brief: home page `/` (and the blog pages that share its chrome)

Mode: Experience. The owner's work leads from the first viewport.

Audience: a mix (recruiters, prospective clients, engineering peers) arriving from a name search or a social profile. Job: understand who this full-stack engineer is in under a minute, then read Experience, open a Project, grab the Résumé, or reach out. Content is placeholder until launch; never invent employers or metrics.

Owner decisions (2026-10-30): direction "The Line" (assigned by the roll, chosen on the decision page); light only; line colour signal orange; Archivo (self-hosted, uses its width axis); lively motion; plain CSS (Astro scoped styles + one global token file), no Tailwind. Later the same day: the "you are here" marker rides the line for everyone, reduced motion included, because it is sticky and moves 1:1 with the visitor's scroll.

## Direction contract

THESIS: The owner's career is one metro line drawn down the page: Intro is the terminus nameboard, each Experience is a station, each Project a stop on the branch, Stack entries are interchange bullets. It refuses the dev-portfolio default (dark ground, mono "// engineer" kicker, split hero with photo, grid of equal cards).

OWN-WORLD: Off-white enamel ground (#f4f4f0), near-black nameboards (#141414) with off-white type, one fat signal-orange line (#ff4f1f) that is the only place orange lives: route, current station, "you are here". Interchange bullets are small solid circles in a fixed set of secondary line colours (blue, green, yellow, purple) holding short Stack labels. Archivo, heavy and condensed for nameboards, normal width for body. Station dots: off-white fill, thick black ring; the current role's dot is orange-filled.

STORY: The visitor reads the nameboard (name, "full-stack line"), the "you are here" headline and the bio, takes an exit (Contact links, Résumé), then rides the line down through stations newest to oldest, then the Projects branch, and ends at a terminus with the exits repeated.

FIRST VIEWPORT: A black line-diagram strip at top doubles as nav (Intro / Experience / Projects stops joined by orange segments). Below it, a full-width black rounded nameboard with the name set at about 11vw, extra-condensed 900 weight, and an orange "FULL-STACK LINE" pill. From the nameboard's lower-left, the orange line (36px) drops down the left gutter; the first station dot sits on it beside "YOU ARE HERE" (orange caps), the headline (about 64px, 900), and the bio. Photo sits in a station-dot ring beside the headline. To the right, the exits: black signage tiles for Email / LinkedIn / GitHub / X with coloured bullets, then a yellow Résumé tile. Primary action: the exits.

FORM: Metro line diagram and station wayfinding; candidate 5 of 7 on the ordered list (sticker laptop lid, group chat, wrapped recap, zine, transit line, photo dump, receipt). seed:3ff9a7ba7d9b63d0. Raises: isolate a track (detector): tapping a Stack bullet lights every station using it and dims the rest; reserved heat (raku): only the current station is full orange; route never edits terrain (orienteering): orange only on route and progress; one continuous section (daylight): one unbroken line top to bottom, dates as tabular timestamps; end-cap hero (toy shelf): the first Project is a terminus-sized stop.

Signature interaction and motion: a "you are here" marker rides the line as the visitor scrolls (a sticky pin on a JS-placed rail, for everyone), stations light as they're reached, and the Stack-bullet isolate (an interaction, available to everyone). Eased animation and transitions are off under prefers-reduced-motion, and content is visible by default.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

- Real photo, name, and copy from the owner (placeholders now).
- Open Graph image is built from the nameboard (rendered from HTML, 1200x630).
