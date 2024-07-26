import { defineEventHandler, getRouterParam, readBody, send } from 'h3'

export default defineEventHandler(async (event) => {
  const uuid = getRouterParam(event, 'uuid')
  const body = await readBody(event)

  const response = await $fetch(`${process.env.COOLIFY_BASE_API_URL}/api/v1/servers/${uuid}`, {
    method: 'PATCH',
    headers: { 'Authorization': `Bearer ${process.env.COOLIFY_API_TOKEN}`, 'content-type': 'application/json' },
    body: JSON.stringify(body),
  })

  return send(event, JSON.stringify(response))
})
