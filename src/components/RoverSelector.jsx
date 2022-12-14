import React from 'react'
import PropTypes from 'prop-types'

const RoverSelector = ({ setRover }) => {
  const handleChange = (e) => {
    setRover(e.target.value)
  }

  return (
    <div
      className={
        window.innerWidth > 800
          ? 'd-flex flex-row justify-content-center align-items-center m-2'
          : 'd-flex flex-column justify-content-center align-items-center m-2'
      }
    >
      <select
        className="form-select text-center"
        style={{
          background: 'rgba(255,255,255,0.5)',
          fontSize: '14px'
        }}
        aria-label="Select Rover"
        onChange={handleChange}
      >
        <option value="" defaultValue disabled>
          Pick the rover
        </option>
        <option value="curiosity">Curiosity</option>
        <option value="opportunity">Opportunity</option>
        <option value="spirit">Spirit</option>
        <option value="perseverance">Perseverance</option>
      </select>
    </div>
  )
}
RoverSelector.propTypes = {
  setRover: PropTypes.func
}
export default RoverSelector
