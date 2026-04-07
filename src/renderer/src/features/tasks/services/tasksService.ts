import type { Task } from '@renderer/shared/types'
import { createTask, getAllTasks } from './tasksApi'

const mockTasks: Task[] = [
  { id: 1, title: 'Draft daily plan', status: 'not-started', taskType: 'todo' },
  {
    id: 2,
    title: 'Hydration check',
    status: 'completed',
    taskType: 'habit',
    completedAt: new Date()
  }
]

let nextTaskId = 3

const normalizeTask = (task: Task): Task => ({
  ...task,
  dueAt: task.dueAt ? new Date(task.dueAt) : undefined,
  completedAt: task.completedAt ? new Date(task.completedAt) : undefined
})

export const tasksService = {
  list: async (): Promise<Task[]> => {
    const { data, error } = await getAllTasks()
    if (!error && data) {
      return data.map(normalizeTask)
    }

    return Promise.resolve(mockTasks)
  },
  add: async (draft: Omit<Task, 'id'>): Promise<Task> => {
    const { data, error } = await createTask(draft)
    if (!error && data) {
      return normalizeTask(data)
    }

    const task: Task = { ...draft, id: nextTaskId++ }
    mockTasks.push(task)
    return Promise.resolve(task)
  },
  toggle: async (id: number): Promise<void> => {
    const task = mockTasks.find((entry) => entry.id === id)
    if (task) {
      const isCompleted = task.status === 'completed'
      task.status = isCompleted ? 'not-started' : 'completed'
      task.completedAt = isCompleted ? undefined : new Date()
    }
    return Promise.resolve()
  }
}
