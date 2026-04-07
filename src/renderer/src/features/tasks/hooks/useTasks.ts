import { useEffect } from 'react'
import { tasksService } from '../services/tasksService'
import { useTasksStore } from '../store/tasksStore'

export const useTasks = () => {
  const { tasks, setTasks, toggleTask, addTask } = useTasksStore()

  useEffect(() => {
    void tasksService.list().then(setTasks)
  }, [setTasks])

  const handleToggle = async (id: number) => {
    toggleTask(id)
    await tasksService.toggle(id)
    // TODO: Earn coins when a task is completed.
  }

  const handleAdd = async (draft: Omit<Parameters<typeof addTask>[0], 'completedAt'>) => {
    const newTask = { ...draft, completedAt: undefined }
    await addTask(newTask)
  }

  return {
    tasks,
    toggleTask: handleToggle,
    addTask: handleAdd
  }
}
