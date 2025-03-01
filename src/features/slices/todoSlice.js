import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
import { TodoLocal } from '../../services/todo-local'

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
    createTodo: (state, action) => {
      state.todos = [...state.todos, { id: uuidv4(), name: action.payload.name, completed: false }]
      TodoLocal.storeTodos(state.todos)
      return state
    },
  },
})

export const selectTodos = (state) => state.todos
export const { loadTodo, createTodo } = todoSlice.actions
export default todoSlice.reducer
