/// <reference types="vitest/globals" />
import { useTasksStore } from './tasksStore'

describe('tasksStore', () => {
  beforeEach(() => {
    useTasksStore.setState({ tasks: [] })
  })

  it('adds a task with generated id', () => {
    const { addTask } = useTasksStore.getState()

    addTask({ title: 'Focus sprint', status: 'not-started', taskType: 'todo' })

    const tasks = useTasksStore.getState().tasks
    expect(tasks).toHaveLength(1)
    expect(tasks[0]).toMatchObject({ id: 1, title: 'Focus sprint' })
  })

  it('toggles completion', () => {
    useTasksStore.setState({
      tasks: [{ id: 1, title: 'Task', status: 'not-started', taskType: 'todo' }]
    })

    const { toggleTask } = useTasksStore.getState()
    toggleTask(1)

    expect(useTasksStore.getState().tasks[0].status).toBe('completed')
  })
})
