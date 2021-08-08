import React from 'react'
import './SearchBar.css'

const SearchBar = ({ handleZipCodeChange, setZipCode, zipCode, errMsg }) => {
  // Receives zipCodeChange function and error field as props

  // Show 'search for a zipcode' if textfield is empty or contains a valid zipcode
  // Show 'error' if zipcode is invalid
  // If any change is detected from the keyboard, call zipCodeChange

  return (
    <box className={'Search-bar-container'}>
      <form onSubmit={handleZipCodeChange}>
        <div className={'Search-bar-label-container'}>
          <label className={'Search-bar-label'}>Zip Code:</label>
        </div>

        <box className={'Search-bar-form-container'}>
          <div className={'Search-bar-input-container'}>
            <input
              className={
                errMsg !== '' ? 'Search-bar-input-error' : 'Search-bar-input'
              }
              value={zipCode}
              type='text'
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>
          <div className={'Search-bar-button-container'}>
            <button
              type='submit'
              className={'Search-bar-button'}
              //   onClick={handleZipCodeChange(zipCode)}
            >
              Update
            </button>
          </div>
        </box>
        <p className={'Search-bar-error'}>{errMsg ? `${errMsg}` : null}</p>
      </form>
    </box>
  )
}

export default SearchBar
