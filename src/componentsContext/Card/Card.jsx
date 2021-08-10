import React, { useContext } from 'react'
import { WeatherInfoContext } from '../../App'
import './Card.css'

const Card = () => {
  const { data } = useContext(WeatherInfoContext)

  // Capitalize each wrod in description
  const CapitalizeEachWord = (data) => {
    if (data) {
      const arr = data.weatherDescription.split(' ')
      for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
      }
      const CapitalizeStr = arr.join(' ')

      return CapitalizeStr
    }
  }

  /* cityName: "New York"
    icon: "01n"
    temp: "78.6"
    tempMax: "72.7"
    tempMin: "81.6"
    weatherDescription: "clear sky" */
  return (
    <div className={'Card-container'}>
      <div className={'Card-city-container'}>
        <div className={'Card-city-name'}>
          {data && data.cityName}
          {data && (
            <img
              className={'Card-icon'}
              src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`}
              alt=''
            />
          )}
        </div>
      </div>

      <div className={'Card-weather-description'}>
        {data && CapitalizeEachWord(data)}
      </div>
      <div className={'Card-temp-container'}>
        <div className={'Card-temp'}>{data && `${data.temp}°`}</div>
      </div>

      <div className={'Card-temp-container'}>
        <div className={'Card-temp-min'}>{data && `${data.tempMin}°`}</div>
        <div className={'Card-temp-max'}>{data && `${data.tempMax}°`}</div>
      </div>
    </div>
  )
}
export default Card
