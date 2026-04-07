import { supabase } from '@renderer/shared/lib/supabaseClient'
import type { Task } from '@renderer/shared/types'

type TaskRow = {
  id: number
  title: string
  status: Task['status']
  due_at: string | null
  tasks_type: Task['taskType']
  priority?: Task['priority'] | null
  completed_at?: string | null
}

const mapRowToTask = (row: TaskRow): Task => ({
  id: row.id,
  title: row.title,
  status: row.status,
  dueAt: row.due_at ? new Date(row.due_at) : undefined,
  taskType: row.tasks_type,
  priority: row.priority ?? undefined,
  completedAt: row.completed_at ? new Date(row.completed_at) : undefined
})

const mapTaskToRow = (task: Partial<Task>) => ({
  title: task.title,
  status: task.status,
  due_at: task.dueAt ? task.dueAt.toISOString() : null,
  tasks_type: task.taskType,
  priority: task.priority ?? null,
  completed_at: task.completedAt ? task.completedAt.toISOString() : null
})

export const getAllTasks = async (): Promise<{ data: Task[] | null; error: Error | null }> => {
  if (!supabase) {
    return { data: null, error: new Error('Supabase is not configured.') }
  }

  const { data, error } = await supabase.from('tasks').select('*')
  return {
    data: data ? (data as TaskRow[]).map(mapRowToTask) : null,
    error: error ? new Error(error.message) : null
  }
}

export const createTask = async (
  task: Partial<Task>
): Promise<{ data: Task | null; error: Error | null }> => {
  if (!supabase) {
    return { data: null, error: new Error('Supabase is not configured.') }
  }

  const { data, error } = await supabase
    .from('tasks')
    .insert(mapTaskToRow(task))
    .select('*')
    .single()

  return {
    data: data ? mapRowToTask(data as TaskRow) : null,
    error: error ? new Error(error.message) : null
  }
}
