import { getGreeting } from '../../../utils/getGreeting'

export const DashboardPage = (): React.JSX.Element => {
  const greeting = getGreeting()
  return (
    <section className="space-y-4 bg-white">
      <header className="p-3">
        <h1 className="text-heading">{greeting}, Gina!</h1>
        <p className="text-subheading">Quick overview of your day.</p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded border border-border p-4">
          <h2 className="text-lg font-medium">Today</h2>
          <p className="text-subheading">TODO: Summary stats</p>
        </div>
        <div className="rounded border border-border p-4">
          <h2 className="text-lg font-medium">Accountability Pet</h2>
          <p className="text-subheading">TODO: Pet mood + streak</p>
        </div>
      </div>
    </section>
  )
}
