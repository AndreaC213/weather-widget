import './App.css'
import React, { useState } from 'react'
import { Card, SearchBar } from './components'

import { fetchToday } from './api'

function App() {
  const [data, setData] = useState(null)
  const [zipCode, setZipCode] = useState('')
  const [zipError, setZipError] = useState(false)
  const [errMsg, setErrMsg] = useState('')

  const [loading, setLoading] = useState(true)

  const handleZipCodeChange = async (e) => {
    try {
      if (e) {
        e.stopPropagation()
        e.preventDefault()
      }

      let zip_code = zipCode
      const data = await fetchToday(zip_code)
      const { name, main, weather } = data

      var today = {}

      today['cityName'] = name
      today['weatherDescription'] = weather[0].description
      today['temp'] = ((main.feels_like * 9) / 5 - 459.67).toFixed(0)
      today['tempMin'] = ((main.temp_min * 9) / 5 - 459.67).toFixed(0)
      today['tempMax'] = ((main.temp_max * 9) / 5 - 459.67).toFixed(0)
      today['icon'] = weather[0].icon

      setData(today)
      setErrMsg('')
      setZipCode('')
    } catch (err) {
      // if (error.response) {
      //   alert(error.response.message)
      //   // setErrMsg(err.response.message)
      // }
      // alert(err.response.data.message)
      setErrMsg(err.response.data.message)
      setData(null)
      // console.error(error)
      // setLoading(false)
    }
  }

  // console.log(data)

  return (
    <div className='App'>
      <header className='App-header'>
        <Card data={data} />
        <hr className={'App-divider'}></hr>
        <SearchBar
          handleZipCodeChange={handleZipCodeChange}
          setZipCode={setZipCode}
          zipCode={zipCode}
          errMsg={errMsg}
        />
      </header>
    </div>
  )
}

export default App
