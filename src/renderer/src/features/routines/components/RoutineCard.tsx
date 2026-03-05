import type { Routine } from '@renderer/shared/types'

export type RoutineCardProps = {
  routine: Routine
  onSelect: (id: string) => void
  isActive: boolean
}

export const RoutineCard = ({ routine, onSelect, isActive }: RoutineCardProps): React.JSX.Element => {
  return (
    <button
      type="button"
      onClick={() => onSelect(routine.id)}
      className={`w-full rounded border border-border p-3 text-left ${
        isActive ? 'bg-sidebar-accent' : 'hover:bg-sidebar-accent'
      }`}
    >
      <div className="text-sm font-medium">{routine.name}</div>
      <div className="text-xs text-slate-500">{routine.taskIds.length} tasks</div>
    </button>
  )
}
