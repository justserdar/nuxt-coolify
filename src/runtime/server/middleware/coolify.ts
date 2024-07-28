import { defineEventHandler } from 'h3'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async () => {
  if (!useRuntimeConfig().coolify.instances[`default`].baseUrl) return 'Default Coolify Base URL is not defined in the runtime config'
  if (!useRuntimeConfig().coolify.instances[`default`].apiToken) return 'Default Coolify API Token is not defined in the runtime config'
})
