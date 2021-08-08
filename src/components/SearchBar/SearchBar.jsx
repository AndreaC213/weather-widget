import React from 'react'
import './SearchBar.css'

const SearchBar = ({ handleZipCodeChange, setZipCode, zipCode, errMsg }) => {
  // Receives handleZipCodeChange function and error field as props
  // Show 'errMsg' if zipcode is invalid
  // If any change is detected from the keyboard, call setZipCode
  // submit the form call handleZipCodeChange

  return (
    <div className={'Search-bar-container'}>
      <form onSubmit={handleZipCodeChange}>
        <div className={'Search-bar-label-container'}>
          <label className={'Search-bar-label'}>Zip Code:</label>
        </div>

        <div className={'Search-bar-form-container'}>
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
            <button type='submit' className={'Search-bar-button'}>
              Update
            </button>
          </div>
        </div>
        <p className={'Search-bar-error'}>
          {errMsg !== '' ? `${errMsg}` : null}
        </p>
      </form>
    </div>
  )
}

export default SearchBar
