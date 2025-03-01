import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
import { TodoLocal } from '../../services/todo-local'

function selectCompleted(todos) {
  return todos.filter((todo) => todo.completed)
}

function selectNotCompleted(todos) {
  return todos.filter((todo) => !todo.completed)
}

const areAllCompleted = (state) =>
  state.length && selectCompleted(state).length === state.length

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
    completeAll: (state, action) => {
      const completed = !areAllCompleted(state)
      state.todos = state.todos.map((todo) => ({
        ...todo,
        completed,
      }))
      
      TodoLocal.storeTodos(state.todos)
      return state
    },
  },
})

export const selectTodo = (state) => state.todo
export const { loadTodo, createTodo, updateTodo, removeTodo, completeAll } =
  todoSlice.actions
export default todoSlice.reducer
