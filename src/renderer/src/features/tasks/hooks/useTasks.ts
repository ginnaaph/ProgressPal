import { useEffect } from 'react'
import { tasksService } from '../services/tasksService'
import { useTasksStore } from '../store/tasksStore'

export const useTasks = () => {
  const { tasks, setTasks, toggleTask, addTask } = useTasksStore()

  useEffect(() => {
    void tasksService.list().then(setTasks)
  }, [setTasks])

  const handleToggle = async (id: string) => {
    toggleTask(id)
    await tasksService.toggle(id)
    // TODO: Earn coins when a task is completed.
  }

  const handleAdd = async (draft: { title: string; kind: 'todo' | 'habit' }) => {
    addTask({ ...draft, completed: false })
    await tasksService.add({ ...draft, completed: false })
  }

  return {
    tasks,
    toggleTask: handleToggle,
    addTask: handleAdd
  }
}
