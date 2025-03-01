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
      const todos = TodoLocal.loadTodos()
      state.todos = [...todos]
      return state
    },
    createTodo: (state, action) => {
      state.todos = [
        ...state.todos,
        { id: uuidv4(), name: action.payload.name, completed: false },
      ]
      TodoLocal.storeTodos(state.todos)
      return state
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.todo.id
          ? { ...todo, ...action.payload.todo }
          : todo
      )
      TodoLocal.storeTodos(state.todos)
      return state
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
      TodoLocal.storeTodos(state.todos)
      return state
    },
  },
})

export const selectTodo = (state) => state.todo
export const { loadTodo, createTodo, updateTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer
