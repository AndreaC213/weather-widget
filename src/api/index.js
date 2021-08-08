import axios from 'axios' // used for api requests

// const API_KEY = process.env.REACT_APP_API_KEY
// const ZIP_KEY = process.env.REACT_APP_ZIP_KEY

const todayURL = `https://api.openweathermap.org/data/2.5/weather`
const zipURL = `https://api.zip-codes.com/ZipCodesAPI.svc/1.0/QuickGetZipCodeDetails/`

export const fetchZipCode = async (zip) => {
  // Fetch data from zip code API
  const result = await axios.get(`${zipURL}/${zip}?key=SKIBRNEFDC7QGBV7PTN1`)

  // if (!data.Error) {
  //   return data.City
  // }
  // return 'Error'
  return result
}

export const fetchToday = async (zip_code) => {
  // Fetch weather data for today
  // Get date, main forecast, description

  const result = await axios.get(
    `${todayURL}?zip=${zip_code}&appid=0578814adaa9e78432b3f4eed547a20b`
  )
  console.log(result)

  return result.data
}
