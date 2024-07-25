import { defineEventHandler, send, readBody } from 'h3'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const response = await $fetch(`${process.env.COOLIFY_BASE_API_URL}/api/v1/projects/${body.uuid}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${process.env.COOLIFY_API_TOKEN}`,
    },
    body: JSON.stringify(body),
  })

  return send(event, JSON.stringify(response))
})
