import { defineEventHandler, getRouterParam, send } from 'h3'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const action = getRouterParam(event, 'action')

  const response = await $fetch(`${useRuntimeConfig().coolify.providers['hetzner'].baseUrl}/servers/${id}/actions/${action}`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${useRuntimeConfig().coolify.providers['hetzner'].apiToken}`, 'content-type': 'application/json' },
  })

  return send(event, JSON.stringify(response))
})
