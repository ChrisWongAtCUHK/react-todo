import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './slices/todoSlice'
import filterSlice from './slices/filterSlice'

const store = configureStore({
  reducer: {
    todo: todoSlice,
    filter: filterSlice,
  },
})

export default store
