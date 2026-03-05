import type { Routine } from '@renderer/shared/types'

// Service stub for routine data (mocked).

const mockRoutines: Routine[] = [
  { id: 'r1', name: 'Morning reset', taskIds: ['t1'] },
  { id: 'r2', name: 'Evening wind-down', taskIds: [] }
]

export const routinesService = {
  list: async (): Promise<Routine[]> => {
    // TODO: Seed preset routines.
    return Promise.resolve(mockRoutines)
  },
  setActive: async (_id: string): Promise<void> => {
    return Promise.resolve()
  }
}
