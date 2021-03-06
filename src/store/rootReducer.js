import { combineReducers } from '@reduxjs/toolkit'
import { reducer as weatherReducer } from '../slices/weather'

const rootReducer = combineReducers({
  weather: weatherReducer,
})

export default rootReducer
