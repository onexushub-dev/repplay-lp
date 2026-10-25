// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://repplay.app',
  // The store listings point to repplay.app/privacy and repplay.app/terms, so canonical URLs have no trailing slash.
  trailingSlash: 'never',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR', 'en'],
    routing: { prefixDefaultLocale: false },
  },

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Barlow Condensed',
      cssVariable: '--font-barlow',
      weights: [700, 800],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Manrope',
      cssVariable: '--font-manrope',
      weights: [400, 600, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'pt-BR',
        locales: { 'pt-BR': 'pt-BR', en: 'en' },
      },
    }),
  ],
});
