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

  const handleAdd = async (draft: { title: string; taskType: 'todo' | 'habit' }) => {
    const newTask = { ...draft, status: 'not-started' as const }
    addTask(newTask)
    await tasksService.add(newTask)
  }

  return {
    tasks,
    toggleTask: handleToggle,
    addTask: handleAdd
  }
}
