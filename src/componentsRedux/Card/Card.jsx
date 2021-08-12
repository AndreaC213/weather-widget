import React from 'react'
import './Card.css'
import { useSelector } from '../../store'

const Card = () => {
  const { data, status } = useSelector((store) => store.weather)

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
    <>
      {status === 'succeeded' && (
        <div className={'Card-container'}>
          <div className={'Card-city-container'}>
            <div className={'Card-city-name'}>
              {data.cityName}
              {
                <img
                  className={'Card-icon'}
                  src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`}
                  alt=''
                />
              }
            </div>
          </div>

          <div className={'Card-weather-description'}>
            {CapitalizeEachWord(data)}
          </div>
          <div className={'Card-temp-container'}>
            <div className={'Card-temp'}>{`${data.temp}°`}</div>
          </div>

          <div className={'Card-temp-container'}>
            <div className={'Card-temp-min'}>{`${data.tempMin}°`}</div>
            <div className={'Card-temp-max'}>{`${data.tempMax}°`}</div>
          </div>
        </div>
      )}
    </>
  )
}
export default Card
