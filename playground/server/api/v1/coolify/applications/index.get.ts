export default defineEventHandler(async () => {
  // check auth permissions
  return useCoolifyApplications('default').list()
})
