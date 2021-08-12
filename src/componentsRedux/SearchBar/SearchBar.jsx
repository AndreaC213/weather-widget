import React, { useState } from 'react'
import './SearchBar.css'
import { useDispatch, useSelector } from '../../store'
import { getWeatherByZipCode } from '../../slices/weather'

const SearchBar = () => {
  // Show 'error' if zipcode is invalid
  // If any change is detected from the keyboard, call setZipCode
  // submit the form call handleZipCodeChange
  const dispatch = useDispatch()
  const [zipCode, setZipCode] = useState('')
  const { error } = useSelector((store) => store.weather)

  return (
    <div className={'Search-bar-container'}>
      <form>
        <div className={'Search-bar-label-container'}>
          <label className={'Search-bar-label'}>Zip Code:</label>
        </div>

        <div className={'Search-bar-form-container'}>
          <div className={'Search-bar-input-container'}>
            <input
              className={
                error !== '' ? 'Search-bar-input-error' : 'Search-bar-input'
              }
              value={zipCode}
              type='text'
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>
          <div className={'Search-bar-button-container'}>
            <button
              className={'Search-bar-button'}
              type='buttom'
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                let zip_code = zipCode

                dispatch(getWeatherByZipCode(zip_code))
              }}
            >
              Update
            </button>
          </div>
        </div>
        <p className={'Search-bar-error'}>{error !== '' ? `${error}` : null}</p>
      </form>
    </div>
  )
}

export default SearchBar
