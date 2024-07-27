import { defineEventHandler, send } from 'h3'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  const response = await $fetch(`${useRuntimeConfig().coolify.instances[`default`].baseUrl}/api/v1/version`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${useRuntimeConfig().coolify.instances[`default`].apiToken}`,
    },
  })

  return send(event, JSON.stringify(response))
})
