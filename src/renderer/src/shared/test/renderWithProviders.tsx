import { render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MemoryRouter } from 'react-router-dom'
import type { ReactElement, ReactNode } from 'react'

const createTestClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: { retry: false }
    }
  })

export const renderWithProviders = (ui: ReactElement, options?: { route?: string }) => {
  const client = createTestClient()
  const route = options?.route ?? '/'

  const Wrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={client}>
      <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
    </QueryClientProvider>
  )

  return render(ui, { wrapper: Wrapper })
}
