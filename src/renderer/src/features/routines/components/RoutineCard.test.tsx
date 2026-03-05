/// <reference types="vitest/globals" />
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from '@renderer/shared/test/renderWithProviders'
import { RoutineCard } from './RoutineCard'

const routine = { id: 'r1', name: 'Morning reset', taskIds: ['t1'] } as const

describe('RoutineCard', () => {
  it('renders and selects', async () => {
    const user = userEvent.setup()
    const onSelect = vi.fn()

    renderWithProviders(<RoutineCard routine={routine} onSelect={onSelect} isActive={false} />)

    expect(screen.getByText('Morning reset')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /morning reset/i }))
    expect(onSelect).toHaveBeenCalledWith('r1')
  })
})
