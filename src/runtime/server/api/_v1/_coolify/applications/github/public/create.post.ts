import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  const response = await $fetch(`${process.env.coolify.BASE_URL}/api/v1/applications/public`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.coolify.API_TOKEN}`, 'content-type': 'application/json' },
    body: publicGithubApplicationTemplate(),
  })
  // console.log(response)
  return send(event, JSON.stringify(response))
})
