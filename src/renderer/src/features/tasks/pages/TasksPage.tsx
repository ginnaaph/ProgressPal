import { useState } from 'react'
import { TaskList } from '../components/TaskList'
import { useTasks } from '../hooks/useTasks'
import { Button } from '@renderer/components/ui/button'
import type { Task } from '@renderer/shared/types'

export const TasksPage = (): React.JSX.Element => {
  const { tasks, toggleTask, addTask } = useTasks()
  const [title, setTitle] = useState('')
  const [status, setStatus] = useState<Task['status']>('not-started')
  const [dueAt, setDueAt] = useState('')
  const [taskType, setTaskType] = useState<Task['taskType']>('todo')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const trimmedTitle = title.trim()
    if (!trimmedTitle) {
      return
    }

    await addTask({
      title: trimmedTitle,
      status,
      dueAt: dueAt ? new Date(dueAt) : undefined,
      taskType
    })

    setTitle('')
    setStatus('not-started')
    setDueAt('')
    setTaskType('todo')
  }

  return (
    <section className="space-y-4">
      <header>
        <h1 className="text-heading">Tasks</h1>
        <p className="text-subheading">Manage todos and habits.</p>
      </header>
      <div className="rounded border border-border p-4">
        <TaskList tasks={tasks} onToggle={toggleTask} />
      </div>
      <div className="rounded border border-border bg-white p-4">
        <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
          <label className="flex flex-col gap-1 text-sm text-primary md:col-span-2">
            <span className="font-medium">Title</span>
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className="rounded-lg border border-border bg-background px-3 py-2"
              placeholder="Morning walk"
              required
            />
          </label>
          <label className="flex flex-col gap-1 text-sm text-primary">
            <span className="font-medium">Status</span>
            <select
              value={status}
              onChange={(event) => setStatus(event.target.value as Task['status'])}
              className="rounded-lg border border-border bg-background px-3 py-2"
            >
              <option value="not-started">Not started</option>
              <option value="in-progress">In progress</option>
              <option value="completed">Completed</option>
            </select>
          </label>
          <label className="flex flex-col gap-1 text-sm text-primary">
            <span className="font-medium">Due At</span>
            <input
              type="datetime-local"
              value={dueAt}
              onChange={(event) => setDueAt(event.target.value)}
              className="rounded-lg border border-border bg-background px-3 py-2"
            />
          </label>
          <label className="flex flex-col gap-1 text-sm text-primary">
            <span className="font-medium">Task Type</span>
            <select
              value={taskType}
              onChange={(event) => setTaskType(event.target.value as Task['taskType'])}
              className="rounded-lg border border-border bg-background px-3 py-2"
            >
              <option value="todo">Task</option>
              <option value="habit">Habit</option>
            </select>
          </label>
          <div className="flex items-end">
            <Button variant="default" type="submit">
              Add Task
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
