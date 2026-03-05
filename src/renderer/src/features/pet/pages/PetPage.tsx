import { PetCard } from '../components/PetCard'
import { usePet } from '../hooks/usePet'

export const PetPage = (): React.JSX.Element => {
  const { coins, recentTransactions } = usePet()

  return (
    <section className="space-y-4">
      <header>
        <h1 className="text-2xl font-semibold">Accountability Pet</h1>
        <p className="text-sm text-slate-500">Rewards and pet progression.</p>
      </header>
      <PetCard pet={{ coins, recentTransactions }} />
      <div className="rounded border border-border p-4 text-sm text-slate-500">
        TODO: Rewards shop + transactions
      </div>
    </section>
  )
}
