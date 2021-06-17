import { createSlice } from '@reduxjs/toolkit'

const starshipsSlice = createSlice({
    name: 'starships',
    initialState: [],
    reducers: {
      setStarships(state, action) {
          return state = action.payload
      }
    },
})
  
export const { setStarships } = starshipsSlice.actions
export default starshipsSlice.reducer