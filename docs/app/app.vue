<script setup lang="ts">
const appConfig = useAppConfig()

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation(), { default: () => [] })

const links = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Get started',
    to: '/guide/installation',
  },
  {
    label: 'Blog',
    to: '/blog/announcement',
  },
]

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  htmlAttrs: {
    lang: 'en',
  },
})

useServerSeoMeta({
  ogSiteName: 'Nuxt Coolify',
  twitterCard: 'summary_large_image',
})

provide('navigation', navigation)
</script>

<template>
  <UApp :toaster="appConfig.toaster">
    <NuxtLoadingIndicator color="#FFF" />

    <AppHeader :links="links" />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <AppFooter :links="links" />
  </UApp>
</template>

<style>
@import "tailwindcss";
@import "@nuxt/ui-pro";

@source "../content/**/*.md";

@theme {
  --font-family-sans: 'Public Sans', sans-serif;
}

:root {
  --ui-container-width: 90rem;
}
</style>
