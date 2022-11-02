import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const TimeSelector = ({ setdateType, setpickedTime }) => {
  const [timeValue, setTimeValue] = useState('')
  const [solValue, setSolValue] = useState('')
  const [dateValue, setDateValue] = useState('')

  const handleTimeChange = (e) => {
    setTimeValue(e.target.value)
    setdateType(e.target.value)
  }
  const handleSolChange = (e) => {
    setSolValue(e.target.value)
  }

  const handleDateChange = (e) => {
    setDateValue(e.target.value)
  }

  useEffect(() => {
    if (timeValue === 'sol') {
      setpickedTime(solValue)
      setDateValue('')
    } else if (timeValue === 'date') {
      setpickedTime(dateValue)
      setSolValue('')
    } else {
      setpickedTime('')
    }
  }, [timeValue, solValue, dateValue])

  return (
    <div className="m-2">
      <select
        className="form-select"
        aria-label="Select Rover"
        value={timeValue}
        onChange={handleTimeChange}
      >
        <option value="" defaultValue disabled>
          Pick a date format
        </option>
        <option value="sol">Sol (Mars Date format)</option>
        <option value="date">Earth Date format</option>
      </select>
      {timeValue === 'sol'
        ? (
        <>
          <input
            type="range"
            className="form-range m-2"
            min="0"
            max="6500"
            id="solRange"
            onChange={handleSolChange}
          />
          <p>Sol day: {solValue}</p>
        </>
          )
        : null}
      {timeValue === 'date'
        ? (
        <input
          type="date"
          className="m-3"
          value={dateValue}
          id="earthDate"
          onChange={handleDateChange}
        />
          )
        : null}
    </div>
  )
}

TimeSelector.propTypes = {
  setdateType: PropTypes.func,
  setpickedTime: PropTypes.func
}
export default TimeSelector
