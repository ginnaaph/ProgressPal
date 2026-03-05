import { QueryClient } from '@tanstack/react-query'

// Shared QueryClient for renderer.
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    }
  }
})
