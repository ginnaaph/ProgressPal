/// <reference types="vitest/globals" />
import type { Task } from '@renderer/shared/types'

const selectMock = vi.fn()
const insertMock = vi.fn()
const singleMock = vi.fn()
const fromMock = vi.fn(() => ({
  select: selectMock,
  insert: insertMock
}))

vi.mock('@renderer/shared/lib/supabaseClient', () => ({
  supabase: {
    from: fromMock
  }
}))

describe('tasksApi', () => {
  beforeEach(() => {
    vi.resetModules()
    fromMock.mockClear()
    selectMock.mockReset()
    insertMock.mockReset()
    singleMock.mockReset()
  })

  it('maps task rows from Supabase into app tasks', async () => {
    const row = {
      id: 7,
      title: 'Evening stretch',
      status: 'completed',
      due_at: '2026-04-08T02:15:00.000Z',
      tasks_type: 'habit',
      priority: 'medium',
      completed_at: '2026-04-08T02:45:00.000Z'
    }

    selectMock.mockResolvedValue({ data: [row], error: null })

    const { getAllTasks } = await import('./tasksApi')
    const result = await getAllTasks()

    expect(fromMock).toHaveBeenCalledWith('tasks')
    expect(result.error).toBeNull()
    expect(result.data).toEqual([
      {
        id: 7,
        title: 'Evening stretch',
        status: 'completed',
        dueAt: new Date('2026-04-08T02:15:00.000Z'),
        taskType: 'habit',
        priority: 'medium',
        completedAt: new Date('2026-04-08T02:45:00.000Z')
      }
    ])
  })

  it('maps app tasks into Supabase create payloads', async () => {
    const createdRow = {
      id: 8,
      title: 'Focus block',
      status: 'not-started',
      due_at: '2026-04-08T17:00:00.000Z',
      tasks_type: 'todo',
      priority: null,
      completed_at: null
    }

    insertMock.mockReturnValue({
      select: vi.fn(() => ({
        single: singleMock
      }))
    })
    singleMock.mockResolvedValue({ data: createdRow, error: null })

    const { createTask } = await import('./tasksApi')
    const draft: Partial<Task> = {
      title: 'Focus block',
      status: 'not-started',
      dueAt: new Date('2026-04-08T17:00:00.000Z'),
      taskType: 'todo'
    }

    const result = await createTask(draft)

    expect(fromMock).toHaveBeenCalledWith('tasks')
    expect(insertMock).toHaveBeenCalledWith({
      title: 'Focus block',
      status: 'not-started',
      due_at: '2026-04-08T17:00:00.000Z',
      tasks_type: 'todo',
      priority: null,
      completed_at: null
    })
    expect(result.error).toBeNull()
    expect(result.data).toEqual({
      id: 8,
      title: 'Focus block',
      status: 'not-started',
      dueAt: new Date('2026-04-08T17:00:00.000Z'),
      taskType: 'todo',
      priority: undefined,
      completedAt: undefined
    })
  })
})
