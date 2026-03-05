export type Task = {
  id: string
  title: string
  completed: boolean
  kind: 'todo' | 'habit'
}

export type Routine = {
  id: string
  name: string
  taskIds: string[]
}

export type RewardTransaction = {
  id: string
  amount: number
  reason: string
  createdAt: string
}

export type PetState = {
  coins: number
  recentTransactions: RewardTransaction[]
}
