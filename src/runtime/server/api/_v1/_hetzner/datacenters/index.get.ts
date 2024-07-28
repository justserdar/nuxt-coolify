import { defineEventHandler, send } from 'h3'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  const response = await $fetch(`${useRuntimeConfig().coolify.providers['hetzner'].baseUrl}/datacenters`, {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${useRuntimeConfig().coolify.providers['hetzner'].apiToken}`, 'content-type': 'application/json' },
  })

  return send(event, JSON.stringify(response))
})
