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
        <aside className="w-56 border-r border-border p-4">
          <div className="mb-6 text-lg font-semibold">ProgressPal</div>
          <nav className="space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `block rounded px-3 py-2 text-sm ${isActive ? 'bg-sidebar-accent' : 'hover:bg-sidebar-accent'}`
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
