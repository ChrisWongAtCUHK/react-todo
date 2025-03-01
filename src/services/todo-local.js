const LOCAL_STORAGE_KEY = 'todoapp_todos';

export const TodoLocal = {
  loadTodos: () => {
    return JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
  },
  storeTodos: (todos) => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }
}
