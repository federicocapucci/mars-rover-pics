import React, { useState } from 'react'
import RoverSelector from './RoverSelector'
import TimeSelector from './TimeSelector'
import APICall from '../services/APICall'
// eslint-disable-next-line no-unused-vars
import PhotoCard from './PhotoCard'
import CamCard from './CamCard'

const SearchForm = () => {
  const [dateType, setdateType] = useState('')
  const [pickedTime, setpickedTime] = useState('')
  const [rover, setRover] = useState('')
  const [photos, setPhotos] = useState(null)
  const [cameras, setCamera] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setPhotos(await APICall(rover, pickedTime))
    setCamera([...new Set(photos?.map((item) => item.camera.full_name))])
  }

  return (
    <div
      className="container container-xs"
      style={{ maxWidth: '1000px', minWidth: '280px' }}
    >
      <form className="" onSubmit={handleSubmit}>
        <RoverSelector setRover={setRover} />
        <TimeSelector setdateType={setdateType} setpickedTime={setpickedTime} />
        <div className="d-grid gap-2">
          <button
            type="submit"
            className="btn btn-outline-dark mb-5"
            disabled={!dateType || !rover}
          >
            Search
          </button>
        </div>
      </form>
      {cameras.map((cam, i) => (
        <CamCard key={i} cam={cam} />
      ))}

      {photos && photos.length !== 0
        ? (
            photos.map((data) => <PhotoCard data={data} key={data.id} />)
          )
        : photos && photos.length === 0
          ? (
        <p> No results found for current rover/date combination</p>
            )
          : null}
    </div>
  )
}

export default SearchForm
