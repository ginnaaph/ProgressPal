import type { Task } from '@renderer/shared/types'
import { TaskItem } from './TaskItem'

export type TaskListProps = {
  tasks: Task[]
  onToggle: (id: number) => void
}

export const TaskList = ({ tasks, onToggle }: TaskListProps): React.JSX.Element => {
  if (tasks.length === 0) {
    return <div className="text-sm text-slate-500">No tasks yet.</div>
  }

  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} />
      ))}
    </div>
  )
}
