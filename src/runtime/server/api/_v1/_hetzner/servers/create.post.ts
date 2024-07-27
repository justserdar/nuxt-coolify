import { defineEventHandler, readBody, send } from 'h3'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const response = await $fetch(`${useRuntimeConfig().coolify.providers['hetzner'].baseUrl}/servers`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${useRuntimeConfig().coolify.providers['hetzner'].apiToken}`, 'content-type': 'application/json' },
    body: JSON.stringify(body),
  })

  return send(event, JSON.stringify(response))
})
