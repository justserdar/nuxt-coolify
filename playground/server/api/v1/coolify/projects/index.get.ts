export default defineEventHandler(async (_event) => {
    // check auth permissions
    return useCoolifyProjects('default').list()
  })
  