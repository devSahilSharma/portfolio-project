# 07: Writing (Posts) and RSS, hidden until the first Post

Status: ready-for-agent
Blocked by: 05, 06

Spec: [spec.md](../spec.md)

## What

Add a Posts content collection (title, description, publish date, optional updated date, draft flag, Markdown body). Build `/blog` (index, newest first) and `/blog/<slug>` (Post page using the shared SEO head from issue 06). Generate an RSS feed of published Posts. Use the hide-when-empty rule from issue 05.

## Acceptance

- With zero published Posts, `/blog` pages and the RSS feed are not built, and no Writing link appears anywhere. Covered by a test.
- Draft Posts never appear in the index, the RSS feed or the sitemap.
- A Post missing a title or date fails the build.
- Adding one Markdown file and building makes the Writing link, index, Post page and RSS entry appear.
