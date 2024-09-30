export default eventHandler(async (event) => {
  const serverId = getRouterParam(event, 'id')
  const actionId = getRouterParam(event, 'actionId')

  if (!serverId) return createError({ statusCode: 500, message: 'Missing Server ID.' })
  if (!actionId) return createError({ statusCode: 500, message: 'Missing Action ID.' })

  // check auth permissions

  return useHetzner().getActionServer(serverId, actionId)
})
