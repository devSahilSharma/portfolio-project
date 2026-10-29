# 05: Projects section, hidden when empty

Status: completed.
Blocked by: 01

Spec: [spec.md](../spec.md)

## What

Add a Projects content collection. Each entry has a name, a one-line description, a Stack list, an optional demo URL and an optional source URL. Render Projects on `/` as short cards. Add this site as Project #1 (demo = the site, source = the public repo, using a placeholder URL until issue 08 exists).

Introduce the shared "section appears only when it has content" rule here, written so Writing (issue 07) reuses it.

## Acceptance

- An entry with neither a demo nor a source link fails the build.
- With zero Projects, the section and any nav link to it are absent from the page. Covered by a test.
- No detail pages.
