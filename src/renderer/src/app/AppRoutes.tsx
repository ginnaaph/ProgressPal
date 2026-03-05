import { Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from '../shared/components/AppLayout'
import { DashboardPage } from '../features/dashboard/pages/DashboardPage'
import { TasksPage } from '../features/tasks/pages/TasksPage'
import { RoutinesPage } from '../features/routines/pages/RoutinesPage'
import { PetPage } from '../features/pet/pages/PetPage'
import { SettingsPage } from '../features/settings/pages/SettingsPage'

// Route-only tree to allow MemoryRouter in tests.
export const AppRoutes = (): React.JSX.Element => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/routines" element={<RoutinesPage />} />
        <Route path="/pet" element={<PetPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  )
}
