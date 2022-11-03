/* eslint-disable react/prop-types */
import React from 'react'

const RoverInfo = ({ data }) => {
  return (
    <div className="row mb-3">
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        <p className="me-2 solp">
          <b>Rover Name:</b> {data.name}
        </p>
        <p className="mx-2 solp">
          {' '}
          <b>Status :</b> {data.status}
        </p>
        <p className="mx-2 solp">
          {' '}
          <b>Launched on :</b> {data.launch_date}
        </p>
        <p className="ms-2 solp">
          {' '}
          <b>Landed on :</b> {data.landing_date}
        </p>
      </div>
    </div>
  )
}

export default RoverInfo
