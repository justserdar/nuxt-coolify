export default eventHandler(async (_event) => {
  // check auth permissions

  return useHetzner().getServers()
})
