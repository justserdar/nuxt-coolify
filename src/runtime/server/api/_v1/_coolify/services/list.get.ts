import { defineEventHandler, send } from 'h3'

export default defineEventHandler(async (event) => {
  const response = await $fetch(`${process.env.COOLIFY_BASE_API_URL}/api/v1/servers`, {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${process.env.COOLIFY_API_TOKEN}`, 'content-type': 'application/json' },
  })

  return send(event, JSON.stringify(response))
})
