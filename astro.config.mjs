// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://janamundsen.dev',
  trailingSlash: 'never',
  build: { format: 'file' },
});
