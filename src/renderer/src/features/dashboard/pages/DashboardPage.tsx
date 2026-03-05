export const DashboardPage = (): React.JSX.Element => {
  return (
    <section className="space-y-4">
      <header>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-sm text-slate-500">Quick overview of your day.</p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded border border-border p-4">
          <h2 className="text-lg font-medium">Today</h2>
          <p className="text-sm text-slate-500">TODO: Summary stats</p>
        </div>
        <div className="rounded border border-border p-4">
          <h2 className="text-lg font-medium">Accountability Pet</h2>
          <p className="text-sm text-slate-500">TODO: Pet mood + streak</p>
        </div>
      </div>
    </section>
  )
}
