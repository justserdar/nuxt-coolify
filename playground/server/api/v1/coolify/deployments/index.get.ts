export default defineEventHandler(async (_event) => {
  // check auth permissions
  return useCoolifyDeployments('default').list()
})
