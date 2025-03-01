import { FILTERS } from '../constants/filter'

export function selectCompleted(todos) {
  return todos.filter((todo) => todo.completed)
}

export function selectNotCompleted(todos) {
  return todos.filter((todo) => !todo.completed)
}

export function selectVisible(todos, filter) {
  switch (filter) {
    case FILTERS.all:
      return [...todos]
    case FILTERS.completed:
      return selectCompleted(todos)
    case FILTERS.active:
      return selectNotCompleted(todos)
    default:
      return [...todos]
  }
}

export const getters = {
  visibleTodos: (todos, filter) => selectVisible(todos, filter),
  areAllCompleted: (todos) =>
    todos.length && todos.every((todo) => todo.completed),
  itemsLeft: (todos) => selectNotCompleted(todos).length,
  completedCount: (todos) => selectCompleted(todos).length,
}
