import { configureStore } from '@reduxjs/toolkit'
import peopleReducer from './peopleSlice'
import starshipsReducer from './starshipsSlice'
import planetsReducer from './planetsSlice'

const store = configureStore({
  reducer: {
    people: peopleReducer,
    starships: starshipsReducer,
    planets: planetsReducer,
  },
})

export default store