// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  site: 'https://luciamillanpsicologia.es',
  trailingSlash: 'never',
  // Keep Astro 6's HTML-aware whitespace behavior after upgrading to Astro 7.
  compressHTML: true,
  build: {
    // Shared stylesheets are cacheable across the home, blog and legal routes.
    inlineStylesheets: 'never',
  },
  fonts: [
    {
      name: 'Cormorant Garamond',
      cssVariable: '--font-cormorant-garamond',
      provider: fontProviders.google(),
      weights: [300, 400, 500],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      fallbacks: ['Georgia', 'serif'],
      display: 'swap',
    },
    {
      name: 'DM Sans',
      cssVariable: '--font-dm-sans',
      provider: fontProviders.google(),
      weights: [300, 400, 500],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
      display: 'swap',
    },
  ],
});
