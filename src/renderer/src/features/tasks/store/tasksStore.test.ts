/// <reference types="vitest/globals" />
import { useTasksStore } from './tasksStore'

const mockCrypto = {
  randomUUID: () => 'mock-id'
}

describe('tasksStore', () => {
  beforeEach(() => {
    useTasksStore.setState({ tasks: [] })
    Object.defineProperty(globalThis, 'crypto', {
      value: mockCrypto,
      configurable: true
    })
  })

  it('adds a task with generated id', () => {
    const { addTask } = useTasksStore.getState()

    addTask({ title: 'Focus sprint', completed: false, kind: 'todo' })

    const tasks = useTasksStore.getState().tasks
    expect(tasks).toHaveLength(1)
    expect(tasks[0]).toMatchObject({ id: 'mock-id', title: 'Focus sprint' })
  })

  it('toggles completion', () => {
    useTasksStore.setState({
      tasks: [{ id: 't1', title: 'Task', completed: false, kind: 'todo' }]
    })

    const { toggleTask } = useTasksStore.getState()
    toggleTask('t1')

    expect(useTasksStore.getState().tasks[0].completed).toBe(true)
  })
})
