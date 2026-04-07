import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/tasks', label: 'Tasks' },
  { to: '/routines', label: 'Routines' },
  { to: '/pet', label: 'Pet' },
  { to: '/settings', label: 'Settings' }
]

export const AppLayout = (): React.JSX.Element => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex">
        <aside className="w-56 border-r bg-white h-screen border-white p-4">
          <div className="mb-6 text-lg font-semibold mt-6">ProgressPal</div>
          <nav className="space-y-2 mt-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2 text-sm ${isActive ? 'bg-warm-neutral' : 'hover:bg-primary-alt/50'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
