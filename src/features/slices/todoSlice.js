import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [],
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    loadTodo: (state, action) => {
      state.todos = [...action.payload.todos]
      return state
    },
  },
})

export const selectTodos = (state) => state.todos
export const { loadTodo } = todoSlice.actions
export default todoSlice.reducer 