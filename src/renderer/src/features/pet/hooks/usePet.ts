import { useEffect } from 'react'
import { rewardsService } from '../services/rewardsService'
import { usePetStore } from '../store/petStore'

export const usePet = () => {
  const { coins, recentTransactions, addCoins, spendCoins, addTransaction } = usePetStore()

  useEffect(() => {
    void rewardsService.listTransactions().then((items) => {
      items.forEach(addTransaction)
    })
  }, [addTransaction])

  return {
    coins,
    recentTransactions,
    addCoins,
    spendCoins
  }
}
