import { defineConfig } from 'vitepress'


const umamiScript: HeadConfig = ["script", {
  defer: "true",
  src: process.env.UMAMI_URL,
  "data-website-id": process.env.UMAMI_ID
}]

const baseHeaders: HeadConfig[] = []

const headers = process.env.NODE_ENV === "production" ?
  [...baseHeaders, umamiScript] :
  baseHeaders

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Nuxt Coolify',
  description: 'Integrate Nuxt With Coolify to simplify your deployments.',
  head: headers,
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
          { text: 'Coolify', link: '/guide/api/utils/coolify.md' },
          { text: 'Providers', link: '/guide/api/utils/providers.md',
            items: [
              { text: 'Hetzner', link: '/guide/api/utils/providers/hetzner.md' },
              { text: 'Vultr', link: '/guide/api/utils/providers/vultr.md' },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/justserdar/nuxt-coolify' },
    ],
  },
})
