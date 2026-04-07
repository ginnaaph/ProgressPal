import { create } from 'zustand'
import type { Task } from '@renderer/shared/types'

export type TasksState = {
  tasks: Task[]
  setTasks: (tasks: Task[]) => void
  toggleTask: (id: number) => void
  addTask: (draft: Omit<Task, 'id'>) => void
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
  addTask: (draft) => {
    set((state) => ({
      tasks: [...state.tasks, { ...draft, id: state.tasks.length + 1 }]
    }))
  }
}))
