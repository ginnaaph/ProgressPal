import { RoutineList } from '../components/RoutineList'
import { useRoutines } from '../hooks/useRoutines'

export const RoutinesPage = (): React.JSX.Element => {
  const { routines, activeRoutineId, selectRoutine } = useRoutines()

  return (
    <section className="space-y-4">
      <header>
        <h1 className="text-2xl font-semibold">Routines</h1>
        <p className="text-sm text-slate-500">Preset sequences to stay on track.</p>
      </header>
      <div className="rounded border border-border p-4">
        <RoutineList routines={routines} activeRoutineId={activeRoutineId} onSelect={selectRoutine} />
      </div>
      <div className="rounded border border-border p-4 text-sm text-slate-500">
        TODO: Routine builder
      </div>
    </section>
  )
}
