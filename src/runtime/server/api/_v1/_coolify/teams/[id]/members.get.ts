import { defineEventHandler, getRouterParam, send } from 'h3'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const response = await $fetch(`${useRuntimeConfig().coolify.instances[`default`].baseUrl}/api/v1/teams/${id}/members`, {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${useRuntimeConfig().coolify.instances[`default`].apiToken}`, 'content-type': 'application/json' },
  })

  return send(event, JSON.stringify(response))
})
