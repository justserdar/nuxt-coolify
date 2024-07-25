import { defineEventHandler, getRouterParam, send } from 'h3'

export default defineEventHandler(async (event) => {
  const uuid = getRouterParam(event, 'uuid')

  const response = await $fetch(`${process.env.COOLIFY_BASE_API_URL}/api/v1/servers/${uuid}`, {
    method: 'get',
    headers: { 'Authorization': `Bearer ${process.env.COOLIFY_API_TOKEN}`, 'content-type': 'application/json' },
  })
  // console.log(response)
  return send(event, JSON.stringify(response))
})
