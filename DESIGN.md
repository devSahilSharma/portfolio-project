---
name: The Line
description: A full-stack engineer's career drawn as one metro line on enamel off-white.
colors:
  ground: "#f4f4f0"
  ink: "#141414"
  line: "#ff4f1f"
  paper: "#f4f4f0"
  muted: "#5c5c57"
  muted-ring: "#9a9a93"
  rule: "#d6d6cf"
  panel: "#e8e8e1"
  track-blue: "#2f6bff"
  track-green: "#14a85a"
  track-yellow: "#ffc21a"
  track-purple: "#8b3dff"
typography:
  display:
    fontFamily: "Archivo Variable, Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.75rem, 11vw, 11rem)"
    fontWeight: 900
    lineHeight: 0.86
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 62"
  headline:
    fontFamily: "Archivo Variable, Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.75rem, 1.5rem + 5vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 62"
  title:
    fontFamily: "Archivo Variable, Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.125rem, 1.2rem + 3.4vw, 4rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 87.5"
  body:
    fontFamily: "Archivo Variable, Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1rem, 0.94rem + 0.25vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.55
    fontVariation: "'wdth' 100"
  label:
    fontFamily: "Archivo Variable, Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.06em"
    fontVariation: "'wdth' 75"
  mono:
    fontFamily: "ui-monospace, Cascadia Code, SF Mono, Consolas, monospace"
    fontSize: "0.88em"
    lineHeight: 1.6
rounded:
  pin: "4px"
  code: "5px"
  stop: "6px"
  tile: "10px"
  board: "clamp(12px, 1.25vw, 18px)"
  pill: "999px"
  dot: "50%"
spacing:
  gutter: "clamp(16px, 3.9vw, 56px)"
  page-max: "1520px"
  line-w: "clamp(12px, 3.2vw - 10px, 36px)"
  rail-x: "clamp(20px, 14vw - 60px, 142px)"
  content-x: "calc(var(--rail-x) + clamp(32px, 4.4vw, 62px))"
  station-gap: "clamp(64px, 8vw, 120px)"
components:
  nameboard:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.board}"
    typography: "{typography.display}"
    padding: "clamp(22px, 3.4vw, 48px) clamp(20px, 4.4vw, 64px)"
  sign:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.tile}"
    padding: "0.55em 1em 0.55em 0.6em"
    height: "44px"
  sign-resume:
    backgroundColor: "{colors.track-yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tile}"
  stack-bullet:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "4px 13px 4px 5px"
    height: "36px"
  stack-bullet-pressed:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  station-dot:
    backgroundColor: "{colors.ground}"
    rounded: "{rounded.dot}"
    size: "max(26px, calc(var(--line-w) * 1.56))"
  station-dot-current:
    backgroundColor: "{colors.line}"
  nav-strip:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    height: "60px"
  nav-resume:
    backgroundColor: "{colors.track-yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    typography: "{typography.label}"
  track-sign:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "8px 8px 8px 10px"
---

# Design System: The Line

## Overview

**Creative North Star: "The Line"**

The site is one metro line drawn down the page. Black nameboards carry the names, a single fat signal-orange line runs down the left gutter from the first nameboard to a terminus, and everything the visitor reads sits on that line as a station or a stop on its branch. The world is transit wayfinding: enamel off-white ground, near-black signage with off-white type, ringed station dots, coloured interchange bullets. It is light only (`color-scheme: light`); there is no dark theme.

Density is generous and vertical. Content hangs off one continuous rail, sections abut so the line never breaks, and big condensed lettering does the work that imagery and cards would do elsewhere. Motion is lively: a "you are here" pin rides the line with scroll, past stations fill as they are reached, signs lift on hover, and tapping a Stack bullet isolates every stop on that track. Every eased animation and transition is gated behind `prefers-reduced-motion: no-preference`, and content is fully visible without it. The pin is the one exception: it is sticky and moves 1:1 with the visitor's own scroll, like a sticky header, so it rides for everyone.

The build is plain CSS: one global token file (`src/styles/global.css`) for tokens, base and the shared line pieces, plus each Astro component's scoped `<style>`. No Tailwind, no utility framework.

**Key Characteristics:**
- One unbroken orange line, top to terminus, at a fluid 12-36px width.
- Black rounded nameboards with heavy, extra-condensed Archivo lettering.
- Station dots: off-white fill, thick black ring; only the current station is orange.
- Interchange bullets in a fixed four-colour set, assigned by hashing the item name.
- Archivo's width axis is the type system: 62% for nameboards, 75-87.5% for labels and subheads, 100% for reading.
- Light only; motion is lively, and all eased motion is off under reduced motion (the scroll-tied pin still rides).

## Colors

Enamel signage: an off-white ground, near-black boards, one signal-orange route, and four secondary line colours that appear only as small bullets.

### Primary
- **Signal Orange** (`line`): the route itself. The rail down the gutter, the branch curve, the nav strip's segments and stop rings, the current station's fill, and the line-name pill on the Intro nameboard. It is the line's colour, so it marks where the line is and where the visitor is, nothing else.

### Secondary
- **Interchange Blue / Green / Yellow / Purple** (`track-blue`, `track-green`, `track-yellow`, `track-purple`): Stack bullet dots and the coloured disc in each exit sign. A Stack item's colour is derived from its name (FNV-1a hash, `src/stack-tracks.ts`), so the same technology wears the same colour everywhere; never assign these by hand. When a track is isolated, its colour becomes an outline around matching station dots.
- **Résumé Yellow** (`track-yellow`) also fills the Résumé tile and the nav Résumé pill, and is the `::selection` colour.

### Neutral
- **Enamel Off-White** (`ground`, `paper`): page ground, and the type colour on black boards. Two names, one value: `ground` is the surface, `paper` is type and fill on ink.
- **Nameboard Black** (`ink`): nameboards, signs, the nav strip, station rings, body text, code blocks, focus rings.
- **Faded Timetable** (`muted`): past dates, the Stack row label, footer text. Holds about 6:1 on the ground.
- **Unreached Ring** (`muted-ring`): the ring of a past station before the visitor reaches it. Decorative, never text.
- **Rule Grey** (`rule`): hairline table rows in prose.
- **Platform Panel** (`panel`): inline code and blockquote fills.

### Named Rules
**The Route-Only Rule.** Orange lives on the route, the current station, progress and "you are here". It never fills a button, a tag, a heading or a decorative block.

**The One Current Station Rule.** Exactly one station dot is orange-filled: the current role. Past stations fill black as they are reached; they never turn orange.

**The Hashed Track Rule.** Interchange colours come from the item name via `trackColour()`. Four colours, fixed; adding one is a system change.

## Typography

**Display Font:** Archivo Variable, self-hosted via `@fontsource-variable/archivo` (wdth axis, latin preloaded), with Helvetica Neue / Arial fallback
**Body Font:** Archivo Variable at normal width
**Label/Mono Font:** system monospace stack (`ui-monospace`, Cascadia Code, SF Mono, Consolas) for code only

**Character:** One family, stretched across its width axis. Heavy and extra-condensed it reads as station lettering; at full width it is a calm grotesque for reading.

### Hierarchy
- **Display** (900, wdth 62%, `clamp(2.75rem, 11vw, 11rem)`, line-height 0.86): the owner's name on the Intro nameboard; also the blog index board title.
- **Headline** (900, wdth 62%, `clamp(2.75rem, 1.5rem + 5vw, 6rem)`, line-height 0.9, uppercase): section names on the line (Experience, Projects) with a black boundary tick across the rail; the terminus board uses the same voice.
- **Station board** (900, wdth 62%, `clamp(1.75rem, 1.1rem + 2.6vw, 3.25rem)`): company and project names set in small black boards; the end-cap project scales to `clamp(2.25rem, 1rem + 5vw, 5.5rem)`.
- **Title** (900, wdth 87.5%, `clamp(2.125rem, 1.2rem + 3.4vw, 4rem)`, line-height 1): the Intro headline beside the first station. Roles use 800 at wdth 87.5%, `clamp(1.25rem, 1rem + 1vw, 1.75rem)`.
- **Body** (400, wdth 100%, `clamp(1rem, 0.94rem + 0.25vw, 1.125rem)`, line-height 1.55): prose capped at 65ch; lead copy (bio, terminus, project descriptions) steps up to `clamp(1.0625rem, 0.95rem + 0.5vw, 1.375rem)` at line-height 1.45, capped 40-52ch.
- **Label** (800, wdth 75%, 0.8125-0.875rem, letter-spacing 0.06-0.1em, uppercase): nav stop names, dates, the Stack row label, the vertical "you are here" flag.
- **Sign** (800, wdth 87.5%, line-height 1.1): exit sign and track sign text.

### Named Rules
**The Width-Axis Rule.** Hierarchy is carried by `font-stretch` as much as size: 62% for anything on a board, 75% for labels, 87.5% for signs and subheads, 100% for reading. Never fake condensing with a second family.

**The Timetable Rule.** Dates and numbers are tabular (`font-variant-numeric: tabular-nums`) everywhere: `time`, ordered lists, tables, the footer.

**The Open Gaps Rule.** Condensed 900 lettering closes its word gaps; board lettering reopens them (`word-spacing: 0.16em`, headline 0.12em).

## Layout

A single page column (`page-max` 1520px, fluid `gutter`) with a rail on its left. The line's centre sits `rail-x` in from the content edge and its width is `line-w`; anything riding it starts at `content-x`. Every block on the line is an `.on-line` run whose orange rule overshoots by 1px top and bottom, so adjoining runs read as one unbroken line. The line starts under the Intro nameboard's lower-left and stops in the terminus dot.

Projects leave the main line on a branch: a curved corner (`border-top-right-radius: line-w + 24px`) turns the route right, and a second rail runs down at `content-x`; the last stop's rail ends at its dot. The first project is an end-cap stop with larger board type.

Stations are spaced wide (`station-gap`, first one `clamp(40px, 5vw, 72px)`); section runs pad `clamp(56px, 7vw, 112px)` and more. The Intro start area is a two-column grid at 1024px and up (copy plus a 300-360px exits column); the exits go two-up between 560px and 1023px and one-up below. Under 560px the photo ring drops beside the bio so the headline starts level with the station, and the nav Résumé pill collapses to its bullet. The sticky nav strip is 60px; `scroll-padding-top` is 88px.

## Elevation & Depth

Flat by default: boards, dots and the line sit on the ground with no shadow. Depth appears only on things that float over the line or respond to the pointer.

### Shadow Vocabulary
- **Lift** (`box-shadow: 0 6px 18px rgb(20 20 20 / 0.18)`): a sign on hover, paired with a 2px rise; removed on `:active`.
- **Pin** (`box-shadow: 0 4px 12px rgb(20 20 20 / 0.3)`, flag at 0.25): the "you are here" pin, which floats above the rail.
- **Floating sign** (`box-shadow: 0 10px 28px rgb(20 20 20 / 0.28)`): the fixed track sign shown while a track is isolated.

### Named Rules
**The Flat Signage Rule.** Signage is flat at rest. Shadows are soft, ink-tinted and blurred, and only for hover lift or for markers that float above the line.

## Shapes

Transit enamel: rounded rectangles for signage, perfect circles for anything on the line. Nameboards use a fluid `board` radius (12-18px), station-name boards three quarters of it; signs, blockquotes, code blocks and images use `tile` (10px). Bullets, pills, the nav Résumé and the track sign are full pills. Station dots, bullet discs, the photo ring and prose list markers ("little stations", 0.6em rings) are circles. The "you are here" flag is a vertical tab, square-ish at the top and fully round at the bottom (`4px 4px 999px 999px`). Rings are thick and black: station rings scale with the line (`max(6px, line-w / 3)`), bullet and list rings are 2px.

## Components

### Nameboard
Black board, off-white Display lettering, `board` radius. The Intro board carries the name and an orange line-name pill (900, wdth 87.5%, uppercase, radius 0.85em) top right; below 720px the pill drops under the name. The terminus and blog index use the same board with Headline lettering.

### Signs (exits)
- **Shape:** rounded tile (`tile`, 10px), minimum 44px tall.
- **Default:** ink fill, paper type at 800 / wdth 87.5%, with a 1.75em circular bullet holding a 58% inline-SVG icon; the bullet colour is a track colour per destination.
- **Résumé:** track-yellow fill, ink type, ink bullet with yellow icon.
- **Hover / Active:** rises 2px with Lift over 0.3s `ease-out`; drops flat on press. No transform under reduced motion.

### Stack bullets (chips)
- **Style:** pill with a 2px ink border on the ground, 750 / wdth 87.5% at 0.9375rem, a 22px track-coloured disc with a 2px inset ink ring. Preceded by an uppercase muted "Stack" row label.
- **State:** each is a toggle button. Hover whitens the fill and scales the disc 1.12; pressed (`aria-pressed`) inverts to ink with paper type and a paper inset ring. Pressing isolates the track: stops off the track drop to 0.3 opacity, matching station dots gain an outline in the track colour, and the floating track sign appears.

### Station dots
Off-white circle with a thick ink ring sized from `line-w`; the big variant marks the start, the terminus and the photo ring. A past station's ring is `muted-ring` until reached, then the ring blackens and an ink core scales in (scroll-driven `view-timeline`, range cover 38%-50%, with an IntersectionObserver fallback in `src/scripts/line.ts`). The current station is orange-filled and never gets the core.

### "You are here" pin
Ink circle with a paper ring (never a station's look) above a vertical uppercase flag reading down the line. A static pin sits on the first station for visitors without JS; with JS, a second one rides the rail as the visitor scrolls (for everyone, reduced motion included, since it is sticky and moves 1:1 with scroll) and the static one hides.

### Navigation
Sticky ink strip, 60px, drawn as a line diagram: Intro / Experience / Projects stops (20px paper dots with 5px orange rings) joined by 7px orange segments. Stop names are Labels in paper; hover underlines them. The stop the visitor is at fills orange with an inset ink ring. A yellow Résumé pill sits at the right. Focus rings switch to paper on the strip.

### Track sign
Fixed, centred pill at the bottom of the viewport while a track is isolated: track-coloured disc, track name, and a paper Clear button that turns yellow on hover. Enters with `@starting-style` fade and 16px rise.

### Prose
Words of a Post or an Experience: 65ch measure, 1em rhythm, subheads at wdth 75%, links 600 with a 2px underline that thickens to 3px on hover, unordered list items marked by small ringed stations, code blocks on ink, a 4em ink bar for `hr`.

## Do's and Don'ts

### Do:
- **Do** keep the line continuous: every block on the route is an `.on-line` run, and the line ends only in the terminus dot or a branch's last stop.
- **Do** set every board name in Archivo 900 at wdth 62% on an ink board, and reopen word gaps.
- **Do** gate every animation and transition behind `prefers-reduced-motion: no-preference` (or remove it under `reduce`), with content visible by default.
- **Do** take Stack colours from `trackColour()` only.
- **Do** keep focus visible: 3px solid ink outline, 3px offset; paper on ink surfaces.
- **Do** write styles as plain CSS: tokens in `global.css`, layout in each component's scoped style.

### Don't:
- **Don't** use orange for anything that is not the route, the current station, progress or "you are here".
- **Don't** add a dark theme; the system is light only.
- **Don't** add a second typeface for display or condensing; use Archivo's width axis.
- **Don't** add Tailwind or a utility framework.
- **Don't** give station dots shadows or orange fills beyond the current station.
- **Don't** use icon fonts or glyphs for icons; signs carry inline SVG.
