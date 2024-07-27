import { defineEventHandler, getRouterParam, send } from 'h3'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  const uuid = getRouterParam(event, 'uuid')

  const response = await $fetch(`${useRuntimeConfig().coolify.instances[`default`].baseUrl}/api/v1/servers/${uuid}`, {
    method: 'DELETE',
    headers: { 'Authorization': `Bearer ${useRuntimeConfig().coolify.instances[`default`].apiToken}`, 'content-type': 'application/json' },
  })

  return send(event, JSON.stringify(response))
})
