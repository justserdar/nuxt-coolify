import { defineEventHandler } from 'h3'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async () => {
  if (!useRuntimeConfig().coolify.providers[`hetzner`].baseUrl) return 'Hetzner Base URL is not defined in your nuxt.config.ts runtimeConfig. Use default: https://api.hetzner.cloud/v1'
  if (!useRuntimeConfig().coolify.providers[`hetzner`].apiToken) return 'Hetzner API Token is not defined in your nuxt.config.ts runtimeConfig.'
})
