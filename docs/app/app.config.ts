export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'slate',
    },
  },
  uiPro: {
    footer: {
      slots: {
        root: 'border-t border-(--ui-border)',
        left: 'text-sm text-(--ui-text-muted)',
      },
    },
  },
  seo: {
    siteName: 'Nuxt Coolify Module - Docs',
  },
  header: {
    title: 'Nuxt Coolify Module',
    to: '/',
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/justserdar/nuxt-coolify',
      'target': '_blank',
      'aria-label': 'GitHub',
    }],
  },
  footer: {
    credits: `Copyright © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [
      {
        'icon': 'i-simple-icons-github',
        'to': 'https://github.com/justserdar/nuxt-coolify',
        'target': '_blank',
        'aria-label': 'Nuxt Coolify',
      }, {
        'icon': 'i-simple-icons-x',
        'to': 'https://x.com/darwebdb',
        'target': '_blank',
        'aria-label': 'JustSerdar on X',
      }, {
        'icon': 'i-simple-icons-bluesky',
        'to': 'https://bsky.app/profile/darweb.nl',
        'target': '_blank',
        'aria-label': 'JustSerdar on BlueSky',
      },
    ],
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/justserdar/nuxt-coolify/edit/main/docs/content',
      links: [
        {
          icon: 'i-lucide-star',
          label: 'Star on GitHub',
          to: 'https://github.com/justserdar/nuxt-coolify',
          target: '_blank',
        },
      ],
    },
  },
})
