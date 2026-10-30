# 04: Résumé download

Status: resolved
Blocked by: 02

Spec: [spec.md](../spec.md)

## What

Serve the Résumé PDF as a static file and add a "Download résumé" link on `/`, near the Intro or Experience. Commit a placeholder PDF until the owner supplies the real one, and document where to drop the replacement.

## Acceptance

- The link downloads or opens the PDF from the built site.
- Replacing the Résumé means swapping one file, with no code change.

## Comments

Changed from the original ask, decided by the owner during implementation:

- The link opens the PDF in a new tab instead of downloading it. The browser's PDF viewer still lets visitors save it.
- The link reads "Résumé (PDF)" rather than "Download résumé", since it no longer downloads.

How to replace the Résumé is documented in the README ("Updating the Résumé"): swap `public/resume.pdf`, keeping the filename.
