# 02: Intro and Contact links

Status: resolved
Blocked by: 01

Spec: [spec.md](../spec.md)

## What

Add the site profile data file (name, headline, bio, photo, email, social profiles), validated by a schema. Render the Intro at the top of `/` with the Contact links underneath. Use clearly marked placeholder content until the owner supplies real values.

## Acceptance

- The profile file is the single source for the Intro and Contact links. Later issues reuse it for metadata and structured data.
- A missing required field (e.g. name, email) fails the build.
- Email renders as a `mailto:` link. Social links open the profile URLs.
- A social profile left out of the data is simply not rendered.
