import { defineEventHandler, send } from 'h3'

export default defineEventHandler(async (event) => {
  const response = await $fetch(`${process.env.COOLIFY_BASE_URL}/api/v1/applications/public`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${process.env.COOLIFY_API_TOKEN}`, 'content-type': 'application/json' },
    body: {}, // publicGithubApplicationTemplate(),
  })

  return send(event, JSON.stringify(response))
})
