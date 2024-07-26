import { defineEventHandler, send, getRouterParams } from 'h3'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  const params = await getRouterParams(event)
  const response = await $fetch(`${useRuntimeConfig().coolify.baseUrl}/api/v1/projects/${params.uuid}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${useRuntimeConfig().coolify.apiToken}`,
    },
  })

  return send(event, JSON.stringify(response))
})
