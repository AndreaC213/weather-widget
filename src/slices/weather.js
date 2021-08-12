import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchToday } from '../api'

// fetch weather info by zipcode
// create the weather async thunk
export const getWeatherByZipCode = createAsyncThunk(
  'weather/getWeatherByZipCodeStatus',
  async (zip_code, { rejectWithValue }) => {
    try {
      const response = await fetchToday(zip_code)
      return response
    } catch (err) {
      console.log('err.response.message', err.response)
      if (!err.response) {
        throw err
      }
      return rejectWithValue(err.response.data.message)
    }
  }
)

// handle actions in reducers
const initialState = {
  data: null,
  status: '',
  error: '',
}

const slice = createSlice({
  name: 'weather',
  initialState,

  // handle actions payload, loading state and error
  extraReducers: {
    [getWeatherByZipCode.pending]: (oldState, action) => {
      oldState.status = 'loading'
    },
    [getWeatherByZipCode.fulfilled]: (oldState, action) => {
      const { name, main, weather } = action.payload
      var today = {}
      today['cityName'] = name
      today['weatherDescription'] = weather[0].description
      today['temp'] = ((main.feels_like * 9) / 5 - 459.67).toFixed(0)
      today['tempMin'] = ((main.temp_min * 9) / 5 - 459.67).toFixed(0)
      today['tempMax'] = ((main.temp_max * 9) / 5 - 459.67).toFixed(0)
      today['icon'] = weather[0].icon

      oldState.status = 'succeeded'
      oldState.data = today
      oldState.error = ''
    },
    [getWeatherByZipCode.rejected]: (oldState, action) => {
      oldState.status = 'failed'
      //   console.log('action.error', action.error)
      oldState.error = action.payload
    },
  },
})

export const reducer = slice.reducer

export default slice
