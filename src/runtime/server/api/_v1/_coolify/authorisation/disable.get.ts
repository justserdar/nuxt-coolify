import { defineEventHandler, send } from 'h3'

export default defineEventHandler(async (event) => {
  const response = await $fetch(`${process.env.COOLIFY_BASE_API_URL}/api/v1/disable`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${process.env.COOLIFY_API_TOKEN}`,
    },
  })

  return send(event, JSON.stringify(response))
})
