export default defineNuxtConfig({
  modules: ['../src/module'],
  runtimeConfig: {
    coolify: {
      baseUrl: process.env.COOLIFY_BASE_API_URL,
      apiToken: process.env.COOLIFY_API_TOKEN,
    },
  },
  coolify: {},
  devtools: { enabled: true },
  compatibilityDate: '2024-07-25',
})
