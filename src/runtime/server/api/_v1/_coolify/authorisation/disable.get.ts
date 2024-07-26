import { defineEventHandler, send } from 'h3'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  const response = await $fetch(`${useRuntimeConfig().coolify.baseUrl}/api/v1/disable`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${useRuntimeConfig().coolify.apiToken}`,
    },
  })

  return send(event, JSON.stringify(response))
})
