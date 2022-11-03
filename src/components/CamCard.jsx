import React from 'react'
import PropTypes from 'prop-types'

const CamCard = ({ cam, filterPics }) => {
  return (
    <div className="m-1">
      <a
        className={
          cam === 'Clear Filter' ? 'btn btn-success' : 'btn btn-secondary'
        }
        rel="noreferrer"
        onClick={() => filterPics(cam)}
      >
        {cam}
      </a>
    </div>
  )
}
CamCard.propTypes = {
  cam: PropTypes.string,
  filterPics: PropTypes.func
}

export default CamCard
