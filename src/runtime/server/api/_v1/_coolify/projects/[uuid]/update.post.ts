import { defineEventHandler, send, readBody } from 'h3'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const response = await $fetch(`${useRuntimeConfig().coolify.instances[`default`].baseUrl}/api/v1/projects/${body.uuid}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${useRuntimeConfig().coolify.instances[`default`].apiToken}`,
    },
    body: JSON.stringify(body),
  })

  return send(event, JSON.stringify(response))
})
