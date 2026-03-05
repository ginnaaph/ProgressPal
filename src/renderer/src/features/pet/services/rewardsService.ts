import type { RewardTransaction } from '@renderer/shared/types'

// Service stub for pet rewards (mocked).

export const rewardsService = {
  listTransactions: async (): Promise<RewardTransaction[]> => {
    return Promise.resolve([])
  },
  addTransaction: async (_transaction: RewardTransaction): Promise<void> => {
    return Promise.resolve()
  }
}
