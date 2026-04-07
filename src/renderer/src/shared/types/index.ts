export type Task = {
  id: number
  title: string
  status: 'not-started' | 'in-progress' | 'completed'
  dueAt?: Date
  taskType: 'todo' | 'habit'
  priority?: 'low' | 'medium' | 'high'
  completedAt?: Date
}

export type Routine = {
  id: string
  name: string
  taskIds: number[]
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
