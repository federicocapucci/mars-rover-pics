import React, { useState } from 'react'
import PropTypes from 'prop-types'

const RoverSelector = ({ setRover }) => {
  const getInitialState = () => {
    const value = ''
    return value
  }

  const [value, setValue] = useState(getInitialState)

  const handleChange = (e) => {
    setValue(e.target.value)
    setRover(e.target.value)
  }

  return (
    <div className="m-2">
      <select
        className="form-select"
        style={{ background: 'rgba(255,255,255,0.5)' }}
        aria-label="Select Rover"
        value={value}
        onChange={handleChange}
      >
        <option value="" defaultValue disabled>
          Pick a rover
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
