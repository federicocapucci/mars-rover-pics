import React from 'react'

const PhotoCard = (data) => {
  return (
    <div className="card my-3 p-3">
      <img
        className="card-img-top"
        src={data.data.img_src}
        alt={`Photo of Mars taken on ${data.data?.earth_date} by rover ${data.data?.rover?.name}`}
      />
      <div className="card-body">
        <h5 className="card-title">{`Photo ID ${data.data?.id} by ${data.data?.rover?.name}`}</h5>
        <h6 className="card-paragraph">
          {`Taken with ${data.data?.camera.full_name}`}{' '}
        </h6>
        <div className="d-grid gap-2">
          <a
            href={data.data?.img_src}
            target="_blank"
            className="btn btn-secondary"
            rel="noreferrer"
          >
            Open it fullscreen
          </a>
        </div>
      </div>
    </div>
  )
}

export default PhotoCard
