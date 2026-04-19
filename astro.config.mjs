// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://solana-toolbox.com',
  integrations: [sitemap({
    serialize(item) {
      return { ...item, lastmod: new Date().toISOString().split('T')[0] };
    },
  })],
  vite: {
    plugins: [tailwindcss()]
  }
});