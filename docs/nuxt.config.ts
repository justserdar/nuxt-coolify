import pkg from '../package.json'

export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
    '@nuxt/ui-pro',
    '@nuxt/content',
    'nuxt-og-image',
    'nuxt-umami',
    // '@nuxtjs/plausible',
    // 'nuxt-llms' // TODO: study module
  ],

  $development: {
    site: {
      url: 'http://localhost:3000',
    },
  },
  $production: {
    site: {
      url: 'https://nuxt-coolify.justserdar.dev',
    },
  },

  devtools: {
    enabled: true,
  },

  app: {
    head: {
      link: [
        {
          rel: 'icon',
          href: '/favicon.svg',
          type: 'image/svg+xml',
        },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  content: {
    build: {
      markdown: {
        toc: {
          searchDepth: 1,
        },
      },
    },
  },

  runtimeConfig: {
    public: {
      version: pkg.version,
    },
  },

  umami: {
    enabled: process.env.NODE_ENV === 'production',
    autoTrack: process.env.NODE_ENV === 'production',
    id: process.env.NUXT_UMAMI_ID,
    host: process.env.NUXT_UMAMI_HOST,
    logErrors: true
    // proxy: 'cloak',
    // useDirective: true,
    // ignoreLocalhost: true,
    // excludeQueryParams: false,
    // domains: ['cool-site.app', 'my-space.site'],
    // customEndpoint: '/my-custom-endpoint',
  },

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    buildCache: true,
  },

  compatibilityDate: '2024-07-11',

  nitro: {
    prerender: {
      routes: [
        '/',
      ],
      crawlLinks: true,
    },
  },

  icon: {
    clientBundle: {
      scan: true,
    },
    provider: 'iconify',
  },

  // plausible: {
  //   apiHost: 'https://plausible.digitoolmedia.com',
  // },

})
