import { Tasks } from './features/productvity/tasks/components/Tasks'

const App = (): React.JSX.Element => {
  return (
    <div className="app">
      <h1>Welcome to ProgressPal</h1>
      <Tasks />
    </div>
  )
}

export default App
