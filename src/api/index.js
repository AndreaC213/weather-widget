import axios from 'axios' // used for api requests

const API_KEY = process.env.REACT_APP_API_KEY

const todayURL = `https://api.openweathermap.org/data/2.5/weather`

export const fetchToday = async (zip_code) => {
  // Fetch weather data for today

  const result = await axios.get(`${todayURL}?zip=${zip_code}&appid=${API_KEY}`)

  return result.data
}
