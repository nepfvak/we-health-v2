import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://wehealthinstitute.com',
  // Emit /treatments.html rather than /treatments/index.html so pages are served
  // at their slash-less URLs without a redirect hop.
  build: { format: 'file' },
  trailingSlash: 'never',
  integrations: [sitemap({ filter: (page) => !page.endsWith('/404/') })],
});
