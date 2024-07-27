import { defineEventHandler, send } from 'h3'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  // const name = getRouterParam(event, 'name')
  const response = await $fetch(`${useRuntimeConfig().coolify.instances[`default`].baseUrl}/api/v1/servers`, {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${useRuntimeConfig().coolify.instances[`default`].apiToken}`, 'content-type': 'application/json' },
  })

  return send(event, JSON.stringify(response))
})
