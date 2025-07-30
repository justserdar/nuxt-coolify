export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // check auth permissions

  return useHetzner().createServer(body)
})
