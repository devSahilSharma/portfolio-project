# 06: SEO and sharing basics

Status: resolved
Blocked by: 02

Spec: [spec.md](../spec.md)

## What

Add a shared head and layout that gives every page a title, meta description, canonical URL, and Open Graph/Twitter card tags with a placeholder preview image. Generate a sitemap. On `/`, emit `Person` JSON-LD built from the site profile: name, job title, URL, and `sameAs` pointing at the social profiles.

## Acceptance

- The site URL is set in one place, so switching to the custom domain later is a one-line change.
- The JSON-LD validates (e.g. with Google's Rich Results Test or schema.org validator) and lists only the social profiles that are present.
- The sitemap is generated at build and includes every public page.
