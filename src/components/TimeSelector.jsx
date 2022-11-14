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
    <div
      className={
        window.innerWidth > 800
          ? 'd-flex flex-row justify-content-center align-items-center m-2'
          : 'd-flex flex-column justify-content-center align-items-center m-2'
      }
    >
      <select
        className="form-select text-center"
        aria-label="Select Rover"
        value={timeValue}
        style={{
          background: 'rgba(255,255,255,0.5)',
          fontSize: '14px'
        }}
        onChange={handleTimeChange}
      >
        <option value="" defaultValue disabled>
          Pick date type
        </option>
        <option value="sol">Sol (Mars)</option>
        <option value="date">Date (Earth)</option>
      </select>
      {timeValue === 'sol' && (
        <>
          <input
            style={{ width: '150px' }}
            type="range"
            className="form-range m-2"
            min="0"
            max="6500"
            id="solRange"
            onChange={handleSolChange}
          />
          <p
            className="m-2 d-flex justify-content-center align-items-center solp textBorder"
            style={{ width: '260px', color: 'rgba(255,255,255,0.9)' }}
          >
            <b>Sol day: {solValue || '?'}</b>
          </p>
        </>
      )}
      {timeValue === 'date' && (
        <input
          type="date"
          className="m-2 text-center"
          style={{
            background: 'rgba(255,255,255,0.5)',
            borderRadius: '5px',
            borderColor: 'gray',
            width: '280px',
            height: '35px'
          }}
          value={dateValue}
          id="earthDate"
          onChange={handleDateChange}
        />
      )}
    </div>
  )
}

TimeSelector.propTypes = {
  setdateType: PropTypes.func,
  setpickedTime: PropTypes.func
}
export default TimeSelector
