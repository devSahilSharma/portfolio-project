# Astro for the site framework

The site is mostly content (Experience, Projects, Posts in Markdown) with little interactivity, so we chose Astro + TypeScript over Next.js. Astro ships zero JavaScript by default, validates Markdown content against typed schemas at build time, and is host-agnostic; Next.js's app-level power would be overhead here and nudges toward Vercel. Interactive islands (e.g. React components) remain available if a feature ever needs them.
