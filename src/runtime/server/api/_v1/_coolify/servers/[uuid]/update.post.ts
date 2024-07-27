import { defineEventHandler, getRouterParam, readBody, send } from 'h3'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  const uuid = getRouterParam(event, 'uuid')
  const body = await readBody(event)

  const response = await $fetch(`${useRuntimeConfig().coolify.instances[`default`].baseUrl}/api/v1/servers/${uuid}`, {
    method: 'PATCH',
    headers: { 'Authorization': `Bearer ${useRuntimeConfig().coolify.instances[`default`].apiToken}`, 'content-type': 'application/json' },
    body: JSON.stringify(body),
  })

  return send(event, JSON.stringify(response))
})
