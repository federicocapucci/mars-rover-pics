import React from 'react'
import PropTypes from 'prop-types'

const RoverInfo = ({ data }) => {
  return (
    <div className="row mb-3">
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        <p
          className="ms-3 solp textBorder"
          style={{ color: 'rgba(255,255,255,0.9)' }}
        >
          <i className="fa-solid fa-shuttle-space"></i> : {data.name}
        </p>
        <p
          className="mx-3 solp textBorder"
          style={{ color: 'rgba(255,255,255,0.9)' }}
        >
          <i className="fa-solid fa-wrench"></i> : {data.status}
        </p>
        <p
          className="mx-3 solp textBorder"
          style={{ color: 'rgba(255,255,255,0.9)' }}
        >
          <i className="fa-brands fa-space-awesome"></i> : {data.launch_date}
        </p>
        <p
          className="me-3 solp textBorder"
          style={{ color: 'rgba(255,255,255,0.9)' }}
        >
          <i className="fa-solid fa-parachute-box"></i> : {data.landing_date}
        </p>
      </div>
    </div>
  )
}
RoverInfo.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    status: PropTypes.string,
    launch_date: PropTypes.string,
    landing_date: PropTypes.string
  }).isRequired
}

export default RoverInfo
