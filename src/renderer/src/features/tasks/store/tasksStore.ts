import { create } from 'zustand'
import type { Task } from '@renderer/shared/types'
import { tasksService } from '../services/tasksService'

export type TasksState = {
  tasks: Task[]
  setTasks: (tasks: Task[]) => void
  toggleTask: (id: number) => void
  addTask: (draft: Omit<Task, 'id'>) => Promise<Task>
}

export const useTasksStore = create<TasksState>((set) => ({
  tasks: [],
  setTasks: (tasks) => set({ tasks }),
  toggleTask: (id) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === 'completed' ? 'not-started' : 'completed',
              completedAt: task.status === 'completed' ? undefined : new Date()
            }
          : task
      )
    }))

    // TODO: Earn coins when a task is completed.
  },
  addTask: async (draft) => {
    const task = await tasksService.add(draft)
    set((state) => ({
      tasks: [...state.tasks, task]
    }))
    return task
  }
}))
