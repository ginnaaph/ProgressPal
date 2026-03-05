import { useEffect } from 'react'
import { routinesService } from '../services/routinesService'
import { useRoutinesStore } from '../store/routinesStore'

export const useRoutines = () => {
  const { routines, activeRoutineId, setRoutines, setActiveRoutine } = useRoutinesStore()

  useEffect(() => {
    void routinesService.list().then(setRoutines)
  }, [setRoutines])

  const handleSelect = async (id: string) => {
    setActiveRoutine(id)
    await routinesService.setActive(id)
  }

  return {
    routines,
    activeRoutineId,
    selectRoutine: handleSelect
  }
}
