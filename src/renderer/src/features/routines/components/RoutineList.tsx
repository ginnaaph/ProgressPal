import type { Routine } from '@renderer/shared/types'
import { RoutineCard } from './RoutineCard'

export type RoutineListProps = {
  routines: Routine[]
  activeRoutineId?: string
  onSelect: (id: string) => void
}

export const RoutineList = ({
  routines,
  activeRoutineId,
  onSelect
}: RoutineListProps): React.JSX.Element => {
  if (routines.length === 0) {
    return <div className="text-sm text-slate-500">No routines yet.</div>
  }

  return (
    <div className="space-y-2">
      {routines.map((routine) => (
        <RoutineCard
          key={routine.id}
          routine={routine}
          onSelect={onSelect}
          isActive={routine.id === activeRoutineId}
        />
      ))}
    </div>
  )
}
