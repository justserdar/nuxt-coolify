export default defineEventHandler(async () => {
  // check auth permissions
  return useCoolifyProjects('default').list()
})
