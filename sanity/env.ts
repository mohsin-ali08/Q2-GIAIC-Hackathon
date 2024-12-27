export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-12-27'

export const dataset = assertValue(
  'production',
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  'r01wxdv6',
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
