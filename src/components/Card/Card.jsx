import React from 'react'
import './Card.css'

const Card = ({ data }) => {
  // If weather data is not valid
  console.log('data', data)
  // Return grid with card components

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
      <box className={'Card-city-container'}>
        <div className={'Card-city-name'}>
          {data && data.cityName}
          {data && (
            <img
              className={'Card-icon'}
              src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`}
            />
          )}
        </div>
      </box>

      <div className={'Card-weather-description'}>
        {data && CapitalizeEachWord(data)}
      </div>
      <box className={'Card-temp-container'}>
        <div className={'Card-temp'}>{data && `${data.temp}°`}</div>
      </box>

      <box className={'Card-temp-container'}>
        <div className={'Card-temp-min'}>{data && `${data.tempMin}°`}</div>
        <div className={'Card-temp-max'}>{data && `${data.tempMax}°`}</div>
      </box>
    </div>
  )
}
export default Card
