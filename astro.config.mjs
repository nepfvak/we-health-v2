import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://wehealthinstitute.com',
  integrations: [sitemap({ filter: (page) => !page.endsWith('/404/') })],
});
