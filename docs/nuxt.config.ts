import pkg from '../package.json'

export default defineNuxtConfig({
  modules: [
    '@nuxt/ui-pro',
    '@nuxt/content',
    '@nuxt/image',
    'nuxt-og-image',
  ],

  future: {
    compatibilityVersion: 4,
  },

  uiPro: { license: 'oss' },

  runtimeConfig: {
    public: {
      version: pkg.version,
    },
  },

  icon: {
    clientBundle: {
      scan: true,
    },
    provider: 'iconify',
  },

  content: {
    highlight: {
      langs: ['bash', 'ts', 'diff', 'vue', 'json', 'yml'],
    },
  },

  image: {
    provider: 'ipx',
  },

  // TODO: remove once propper landing page is available
  routeRules: {
    '/': { redirect: '/guide/installation', prerender: false },
  },

  compatibilityDate: '2024-07-09',
})
