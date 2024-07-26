import { defineEventHandler, getRouterParam, readBody, send } from 'h3'

export default defineEventHandler(async (event) => {
  const uuid = getRouterParam(event, 'uuid')

  const response = await $fetch(`${process.env.COOLIFY_BASE_API_URL}/api/v1/services/${uuid}/stop`, {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${process.env.COOLIFY_API_TOKEN}`, 'content-type': 'application/json' },
  })

  return send(event, JSON.stringify(response))
})
