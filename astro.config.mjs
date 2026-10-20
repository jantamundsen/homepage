// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://janamundsen.dev',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
});
