/// <reference types="vitest/globals" />
import { screen } from '@testing-library/react'
import { AppRoutes } from './AppRoutes'
import { renderWithProviders } from '@renderer/shared/test/renderWithProviders'

describe('AppRoutes', () => {
  it('renders tasks route', async () => {
    renderWithProviders(<AppRoutes />, { route: '/tasks' })

    expect(screen.getByRole('heading', { name: /tasks/i })).toBeInTheDocument()
    expect(await screen.findByText('Draft daily plan')).toBeInTheDocument()
  })

  it('renders settings route', () => {
    renderWithProviders(<AppRoutes />, { route: '/settings' })

    expect(screen.getByRole('heading', { name: /settings/i })).toBeInTheDocument()
  })
})
