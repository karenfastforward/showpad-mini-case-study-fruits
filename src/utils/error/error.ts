export const errorHandler = (err: unknown): void => {
  const error = err instanceof Error ? err : new Error('Something went wrong')
  console.error(error.message)
}
