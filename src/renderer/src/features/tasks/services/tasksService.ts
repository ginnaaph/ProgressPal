import type { Task } from '@renderer/shared/types'

// Service stub for task data (mocked).

const mockTasks: Task[] = [
  { id: 't1', title: 'Draft daily plan', completed: false, kind: 'todo' },
  { id: 't2', title: 'Hydration check', completed: true, kind: 'habit' }
]

export const tasksService = {
  list: async (): Promise<Task[]> => {
    return Promise.resolve(mockTasks)
  },
  add: async (_draft: Omit<Task, 'id'>): Promise<Task> => {
    return Promise.resolve({ id: 'new', title: 'New task', completed: false, kind: 'todo' })
  },
  toggle: async (_id: string): Promise<void> => {
    return Promise.resolve()
  }
}
