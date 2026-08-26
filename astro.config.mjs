import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vizioconsulting.hu',
  output: 'static',
  integrations: [sitemap()],
});
