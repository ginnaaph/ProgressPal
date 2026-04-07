/// <reference types="vitest/globals" />
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from '@renderer/shared/test/renderWithProviders'
import { TaskItem } from './TaskItem'

const task = { id: 1, title: 'Focus sprint', status: 'not-started', taskType: 'todo' } as const

describe('TaskItem', () => {
  it('renders and toggles', async () => {
    const user = userEvent.setup()
    const onToggle = vi.fn()

    renderWithProviders(<TaskItem task={task} onToggle={onToggle} />)

    expect(screen.getByText('Focus sprint')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /complete\/toggle/i }))
    expect(onToggle).toHaveBeenCalledWith(1)
  })
})
