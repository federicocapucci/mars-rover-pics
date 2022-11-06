import React from 'react'
import PropTypes from 'prop-types'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

const PhotoCard = ({ data }) => {
  return (
    <div className="card my-3 p-3">
      <LazyLoadImage
        className="card-img-top"
        width={'100%'}
        height={'300px'}
        effect="blur"
        src={data?.img_src}
        alt={`Photo of Mars taken on ${data?.earth_date} by rover ${data?.rover?.name}`}
      />
      <div className="card-body">
        <h5 className="card-title">
          {`Photo ID ${data?.id} by ${data?.rover?.name}`}
        </h5>
        <h6 className="card-paragraph">
          {`Taken with ${data?.camera.full_name}`}
        </h6>
        <div className="d-grid gap-2">
          <a
            href={data?.img_src}
            target="_blank"
            className="btn btn-secondary"
            rel="noreferrer"
          >
            Full Screen
          </a>
        </div>
      </div>
    </div>
  )
}

PhotoCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    img_src: PropTypes.string,
    earth_date: PropTypes.string,
    rover: PropTypes.shape({ name: PropTypes.string }).isRequired,
    camera: PropTypes.shape({ full_name: PropTypes.string }).isRequired
  }).isRequired
}

export default PhotoCard
