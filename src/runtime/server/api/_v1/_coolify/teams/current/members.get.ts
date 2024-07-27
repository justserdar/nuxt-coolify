import { defineEventHandler, send } from 'h3'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  const response = await $fetch(`${useRuntimeConfig().coolify.instances[`default`].baseUrl}/api/v1/teams/current/members`, {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${useRuntimeConfig().coolify.instances[`default`].apiToken}`, 'content-type': 'application/json' },
  })

  return send(event, JSON.stringify(response))
})
