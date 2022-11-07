import React from 'react'
import PropTypes from 'prop-types'

const CamCard = ({ cam, filterPics }) => {
  return (
    <div className="mt-1 mb-2 mx-1">
      <a
        className={
          cam === 'Clear Filter'
            ? 'btn btn-success solp textBorder'
            : 'btn btn-secondary solp textBorder'
        }
        style={{ fontSize: '0.5rem', color: 'rgba(255,255,255,0.9)' }}
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
