import type { Task } from '@renderer/shared/types'

export type TaskItemProps = {
  task: Task
  onToggle: (id: number) => void
}

export const TaskItem = ({ task, onToggle }: TaskItemProps): React.JSX.Element => {
  return (
    <div className="flex items-center justify-between rounded border border-border p-3">
      <div>
        <div className="text-sm font-bold text-primary">{task.title}</div>
        <div className="text-xs text-main text-primary">{task.taskType}</div>
      </div>
      <button
        type="button"
        className="rounded border border-border px-3 py-1 text-xs"
        onClick={() => onToggle(task.id)}
      >
        {task.status === 'completed' ? 'Undo' : 'Complete/Toggle'}
      </button>
    </div>
  )
}
