import { TaskList } from '../components/TaskList'
import { useTasks } from '../hooks/useTasks'

export const TasksPage = (): React.JSX.Element => {
  const { tasks, toggleTask } = useTasks()

  return (
    <section className="space-y-4">
      <header>
        <h1 className="text-heading">Tasks</h1>
        <p className="text-subheading">Manage todos and habits.</p>
      </header>
      <div className="rounded border border-border p-4">
        <TaskList tasks={tasks} onToggle={toggleTask} />
      </div>
      <div className="rounded border border-border p-4 text-subheading">TODO: Add task form</div>
    </section>
  )
}
