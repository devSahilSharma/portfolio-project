# 08: Deploy to Cloudflare Pages with analytics

Status: ready-for-human
Blocked by: 01

Spec: [spec.md](../spec.md)

## What

Needs the owner's accounts, so a human does it (an agent can guide step by step):

1. Create a **public** GitHub repo and push.
2. Connect it to Cloudflare Pages (Astro preset), with deploys on push to `main` and preview deploys on branches.
3. Enable Cloudflare Web Analytics for the site.
4. Put the resulting `*.pages.dev` URL into the site URL config and Project #1's links.

## Acceptance

- Pushing to `main` updates the live site. A branch push produces a preview URL.
- Analytics shows visits.
