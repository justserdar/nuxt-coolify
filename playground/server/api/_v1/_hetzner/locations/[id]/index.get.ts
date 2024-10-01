export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  if (!id) return createError({ statusCode: 500, message: 'Missing Location ID' })

  // check auth permissions

  return useHetzner().getLocation(Number(id))
})
