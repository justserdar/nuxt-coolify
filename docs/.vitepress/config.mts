import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Nuxt Coolify',
  description: 'Integrate Nuxt With Coolify to simplify your deployments.',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get started', link: '/guide/installation' },
      { text: 'Blog', link: '/blog/announcement' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/guide/' },
          { text: 'Installation', link: '/guide/installation' },
        ],
      },
      {
        text: 'Usage',
        items: [
          { text: 'Component Example', link: '/guide/usage/component' },
        ],
      },
      {
        text: 'API',
        items: [
          { text: 'useCoolify()', link: '/guide/api/composables/useCoolify.md' },
          { text: 'useHetzner()', link: '/guide/api/composables/useHetzner.md' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/justserdar/nuxt-coolify' },
    ],
  },
})
