export default defineEventHandler(async (_event) => {
  // check auth permissions

  return useHetzner().getServers()
})
