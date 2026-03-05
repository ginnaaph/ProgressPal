import { create } from 'zustand'
import type { Routine } from '@renderer/shared/types'

export type RoutinesState = {
  routines: Routine[]
  activeRoutineId?: string
  setRoutines: (routines: Routine[]) => void
  setActiveRoutine: (id: string) => void
}

export const useRoutinesStore = create<RoutinesState>((set) => ({
  routines: [],
  activeRoutineId: undefined,
  setRoutines: (routines) => set({ routines }),
  setActiveRoutine: (id) => {
    set({ activeRoutineId: id })
    // TODO: Link tasks to routines.
  }
}))
