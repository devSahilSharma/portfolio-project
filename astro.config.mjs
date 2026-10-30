// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  // The one place the site's URL is set: canonical URLs, Open Graph tags, structured data
  // and the sitemap all derive from it.
  site: 'https://sahilsharma.pages.dev',
  integrations: [sitemap()],
});
