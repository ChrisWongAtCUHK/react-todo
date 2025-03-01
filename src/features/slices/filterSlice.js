import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filter: 'all',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload.filter
      return state
    },
  },
})

export const selectFilter = (state) => state.filter
export const { setFilter } = filterSlice.actions
export default filterSlice.reducer
