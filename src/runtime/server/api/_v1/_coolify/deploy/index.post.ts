import { defineEventHandler, readBody, send } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const response = await $fetch(`${process.env.COOLIFY_BASE_API_URL}/api/v1/deploy`, {
    method: 'POST', // GET default, POST is also allowed
    headers: { 'Authorization': `Bearer ${process.env.COOLIFY_API_TOKEN}`, 'content-type': 'application/json' },
    body: JSON.stringify(body),
  })

  return send(event, JSON.stringify(response))
})
