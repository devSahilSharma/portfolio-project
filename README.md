# Personal Site

Built with Astro. Content lives in the repo; edit it and push to publish.

## Updating the Résumé

Replace [public/resume.pdf](public/resume.pdf) with the new PDF, keeping the filename `resume.pdf`. No code change is needed: the Résumé link on `/` always points at that file.

Keep it in step with the Experience entries in [src/content/experience/](src/content/experience/) by hand.

## Updating the preview image

The link-preview image ([public/og.png](public/og.png)) shows the name and job title from [src/content/profile.json](src/content/profile.json). It isn't rebuilt on deploy, so after changing either of those, run `npm run og` and commit the new image. It renders [scripts/og/og.html](scripts/og/og.html) with headless Chrome; set `CHROME_PATH` if Chrome isn't at the default Windows path.

## Design

The look is recorded in [DESIGN.md](DESIGN.md); product context is in [PRODUCT.md](PRODUCT.md).
