import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://shankarkalavakolanu.com',
  integrations: [tailwind({ applyBaseStyles: false })],
  build: {
    format: 'file',
  },
});
