import React from 'react'
import PropTypes from 'prop-types'

const CamCard = ({ cam }) => {
  return (
    <div className="m-1">
      <a className="btn btn-secondary" rel="noreferrer">
        {cam}
      </a>
    </div>
  )
}
CamCard.propTypes = {
  cam: PropTypes.string
}

export default CamCard
