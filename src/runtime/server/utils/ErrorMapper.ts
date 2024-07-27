export function getMappedError(errorType: string, message: string) {
  const errors = new Map<string, { message: string }>()
  errors.set(errorType, { message: message })
  return JSON.stringify(Object.fromEntries(errors))
}
