/// <reference types="vitest/globals" />
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from '@renderer/shared/test/renderWithProviders'
import { useTasksStore } from '../store/tasksStore'
import { tasksService } from '../services/tasksService'
import { TasksPage } from './TasksPage'

vi.mock('../services/tasksService', () => ({
  tasksService: {
    list: vi.fn(),
    add: vi.fn(),
    toggle: vi.fn()
  }
}))

describe('TasksPage', () => {
  beforeEach(() => {
    useTasksStore.setState({ tasks: [] })
    vi.mocked(tasksService.list).mockReset()
    vi.mocked(tasksService.add).mockReset()
    vi.mocked(tasksService.toggle).mockReset()
    vi.mocked(tasksService.list).mockResolvedValue([
      { id: 1, title: 'Draft daily plan', status: 'not-started', taskType: 'todo' },
      {
        id: 2,
        title: 'Hydration check',
        status: 'completed',
        taskType: 'habit',
        completedAt: new Date('2026-04-07T16:00:00.000Z')
      }
    ])
    vi.mocked(tasksService.add).mockImplementation(async (draft) => ({
      ...draft,
      id: 99
    }))
    vi.mocked(tasksService.toggle).mockResolvedValue()
  })

  it('submits a new task from the form', async () => {
    const user = userEvent.setup()

    renderWithProviders(<TasksPage />)

    await user.type(screen.getByLabelText(/title/i), 'Morning walk')
    await user.selectOptions(screen.getByLabelText(/status/i), 'in-progress')
    await user.type(screen.getByLabelText(/due at/i), '2026-04-08T09:30')
    await user.selectOptions(screen.getByLabelText(/task type/i), 'habit')
    await user.click(screen.getByRole('button', { name: /add task/i }))

    await waitFor(() => {
      expect(vi.mocked(tasksService.add)).toHaveBeenCalledWith({
        title: 'Morning walk',
        status: 'in-progress',
        dueAt: new Date('2026-04-08T09:30'),
        taskType: 'habit',
        completedAt: undefined
      })
    })

    await waitFor(() => {
      const createdTask = useTasksStore.getState().tasks.find((task) => task.title === 'Morning walk')
      expect(createdTask).toMatchObject({
        id: 99,
        title: 'Morning walk',
        status: 'in-progress',
        taskType: 'habit'
      })
      expect(createdTask?.dueAt).toBeInstanceOf(Date)
      expect(createdTask?.dueAt?.getTime()).toBe(new Date('2026-04-08T09:30').getTime())
    })
  })

  it('does not submit an empty title', async () => {
    const user = userEvent.setup()

    renderWithProviders(<TasksPage />)

    await screen.findByText('Draft daily plan')
    const initialTaskCount = useTasksStore.getState().tasks.length

    await user.click(screen.getByRole('button', { name: /add task/i }))

    expect(vi.mocked(tasksService.add)).not.toHaveBeenCalled()
    expect(useTasksStore.getState().tasks).toHaveLength(initialTaskCount)
  })
})
