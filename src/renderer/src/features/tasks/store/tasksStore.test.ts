/// <reference types="vitest/globals" />
import { useTasksStore } from './tasksStore'

describe('tasksStore', () => {
  beforeEach(() => {
    useTasksStore.setState({ tasks: [] })
  })

  it('adds a task with generated id', async () => {
    const { addTask } = useTasksStore.getState()

    const createdTask = await addTask({
      title: 'Focus sprint',
      status: 'not-started',
      taskType: 'todo'
    })

    const tasks = useTasksStore.getState().tasks
    expect(tasks).toHaveLength(1)
    expect(createdTask).toMatchObject({ title: 'Focus sprint', taskType: 'todo' })
    expect(tasks[0]).toMatchObject({ title: 'Focus sprint', taskType: 'todo' })
    expect(tasks[0].id).toEqual(expect.any(Number))
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
