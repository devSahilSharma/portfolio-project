# 03: Experience section

Status: ready-for-agent
Blocked by: 01

Spec: [spec.md](../spec.md)

## What

Add an Experience content collection. Each entry has company, title, start date, an optional end date (absent means current role), what the owner did, and a Stack list. Render the Experience section on `/`, newest first. Seed it with one placeholder entry.

## Acceptance

- Schema enforces the required fields. An invalid entry fails the build.
- Ordering is newest first, with a current role (no end date) at the top. Covered by a test.
- Each entry shows its Stack line. There is no standalone skills list anywhere.
