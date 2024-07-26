import { defineEventHandler, send } from 'h3'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  const response = await $fetch(`${useRuntimeConfig().coolify.baseUrl}/api/v1/applications/public`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${useRuntimeConfig().coolify.apiToken}`, 'content-type': 'application/json' },
    body: {}, // publicGithubApplicationTemplate(),
  })

  return send(event, JSON.stringify(response))
})
