export default defineEventHandler(async (_event) => {
  // check auth permissions

  return useCoolify().instances()
})
