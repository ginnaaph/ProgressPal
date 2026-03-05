/// <reference types="vitest/globals" />
import { usePetStore } from './petStore'

describe('petStore', () => {
  beforeEach(() => {
    usePetStore.setState({ coins: 0, recentTransactions: [] })
  })

  it('adds and spends coins', () => {
    const { addCoins, spendCoins } = usePetStore.getState()

    addCoins(5)
    expect(usePetStore.getState().coins).toBe(5)

    spendCoins(2)
    expect(usePetStore.getState().coins).toBe(3)
  })

  it('does not go below zero', () => {
    const { spendCoins } = usePetStore.getState()

    spendCoins(10)
    expect(usePetStore.getState().coins).toBe(0)
  })
})
