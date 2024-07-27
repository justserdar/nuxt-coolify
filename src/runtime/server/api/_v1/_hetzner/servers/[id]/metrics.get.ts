import { defineEventHandler, getRouterParam, send } from 'h3'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const type = getRouterParam(event, 'type')
  const start = getRouterParam(event, 'start')
  const end = getRouterParam(event, 'end')

  if (!type || !start || !end) return send(event, { error: 'Missing required parameters' })
  const response = await $fetch(`${useRuntimeConfig().coolify.providers['hetzner'].baseUrl}/servers/${id}/metrics`, {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${useRuntimeConfig().coolify.providers['hetzner'].apiToken}`, 'content-type': 'application/json' },
    query: {
      type,
      start,
      end,
    },
  })

  return send(event, JSON.stringify(response))
})
