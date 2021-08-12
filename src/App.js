/* import './App.css'
import React, { useState } from 'react'
import { Card, SearchBar } from './components'

import { fetchToday } from './api'

function App() {
  const [data, setData] = useState(null)
  const [zipCode, setZipCode] = useState('')
  const [errMsg, setErrMsg] = useState('')

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
    } catch (err) {
      if (err.response) {
        setErrMsg(err.response.data.message)
      }

      setData(null)
      // console.error(error)
    }
  }

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

export default App */

/* Context */
/* import './App.css'
import React, {
  useState,
  createContext,
  useMemo,
  useCallback,
  useEffect,
} from 'react'
import { Card, SearchBar } from './componentsContext'
import useIsMountedRef from './hooks/useIsMountedref'

import { fetchToday } from './api'

export const WeatherInfoContext = createContext()
const { Provider } = WeatherInfoContext

function App() {
  const [data, setData] = useState(null)
  const [zipCode, setZipCode] = useState('10036')
  const [errMsg, setErrMsg] = useState('')
  const isMountedRef = useIsMountedRef()

  // trigger a callback after a state change
  const handleZipCodeChange = useCallback(
    async (e) => {
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

        if (isMountedRef.current) {
          setData(today)
          setErrMsg('')
        }
      } catch (err) {
        if (err.response) {
          setErrMsg(err.response.data.message)
        }

        setData(null)
        // console.error(error)
      }
    },
    [zipCode, isMountedRef]
  )

  // Preventing Unnecessary Renders
  const value = useMemo(
    () => ({
      data,
      zipCode,
      setValue: (zipCode) => setZipCode(zipCode),
      handleZipCodeChange,
      errMsg,
    }),
    [data, zipCode, handleZipCodeChange, errMsg]
  )

  useEffect(() => {
    handleZipCodeChange()
  }, [])

  return (
    <Provider value={value}>
      <div className='App'>
        <header className='App-header'>
          <Card />
          <hr className={'App-divider'}></hr>
          <SearchBar />
        </header>
      </div>
    </Provider>
  )
}

export default App */

/* Redux */
import './App.css'
import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { Card, SearchBar } from './componentsRedux'

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <header className='App-header'>
          <Card />
          <hr className={'App-divider'}></hr>
          <SearchBar />
        </header>
      </div>
    </Provider>
  )
}

export default App
