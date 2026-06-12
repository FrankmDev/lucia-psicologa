// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://lucia-psicologa.vercel.app',
  build: {
    inlineStylesheets: 'always',
  },
});
