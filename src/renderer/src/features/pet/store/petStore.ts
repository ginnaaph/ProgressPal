import { create } from 'zustand'
import type { PetState, RewardTransaction } from '@renderer/shared/types'

export type PetStore = PetState & {
  addCoins: (amount: number) => void
  spendCoins: (amount: number) => void
  addTransaction: (transaction: RewardTransaction) => void
}

export const usePetStore = create<PetStore>((set) => ({
  coins: 0,
  recentTransactions: [],
  addCoins: (amount) => set((state) => ({ coins: state.coins + amount })),
  spendCoins: (amount) => set((state) => ({ coins: Math.max(0, state.coins - amount) })),
  addTransaction: (transaction) =>
    set((state) => ({
      recentTransactions: [transaction, ...state.recentTransactions].slice(0, 5)
    }))
}))
