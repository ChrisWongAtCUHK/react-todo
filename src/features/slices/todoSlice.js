import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
import { TodoLocal } from '../../services/todo-local'
import { selectCompleted, selectNotCompleted } from '../../services/getters'

const areAllCompleted = (state) =>
  state.todos.length &&
  selectCompleted(state.todos).length === state.todos.length

const initialState = {
  todos: [],
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    loadTodo: (state) => {
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
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
      TodoLocal.storeTodos(state.todos)
      return state
    },
    completeAll: (state) => {
      const completed = !areAllCompleted(state)
      state.todos = state.todos.map((todo) => ({
        ...todo,
        completed,
      }))

      TodoLocal.storeTodos(state.todos)
      return state
    },
    clearCompleted: (state) => {
      state.todos = selectNotCompleted(state.todos)
      TodoLocal.storeTodos(state.todos)
      return state
    },
  },
})

export const selectTodo = (state) => state.todo
export const {
  loadTodo,
  createTodo,
  updateTodo,
  removeTodo,
  completeAll,
  clearCompleted,
} = todoSlice.actions
export default todoSlice.reducer
