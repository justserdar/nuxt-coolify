import { defineEventHandler, send, readBody } from 'h3'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const response = await $fetch(`${useRuntimeConfig().coolify.baseUrl}/api/v1/version`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${useRuntimeConfig().coolify.apiToken}`,
    },
    body: JSON.stringify(body),
  })

  return send(event, JSON.stringify(response))
})
