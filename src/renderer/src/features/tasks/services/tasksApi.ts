// import { supabase } from '@renderer/shared/lib/supabaseClient'
// import type { Task } from '@renderer/shared/types'

// export const getAllTasks = async (): Promise<{ data: Task[] | null; error: Error | null }> => {
//   const { data, error } = await supabase.from('tasks').select('*')
//   return { data, error }
// }

// export const createTask = async (
//   task: Partial<Task>
// ): Promise<{ data: Task | null; error: Error | null }> => {
//   const { data, error } = await supabase.from('tasks').insert(task).select().single()
//   return { data, error }
// }
