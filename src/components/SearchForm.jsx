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
  const [page, setPage] = useState(1)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const search = await APICall(rover, pickedTime)
    setPhotos([...search])
    createCameraButtons(search)
    setPage(JSON.parse(localStorage.getItem('lastSearch')).page)
  }
  const createCameraButtons = (search) => {
    const savedCams = [...new Set(search.map((item) => item.camera.full_name))]
    savedCams.push('Clear Filter')
    setCamera(savedCams)
  }

  const getStoredPics = () => {
    const savedSearch = JSON.parse(localStorage.getItem('lastRoverSearch'))
    return savedSearch
  }

  const filterPics = async (camName) => {
    const newPhotos = getStoredPics()
    setPhotos([...newPhotos])
    if (camName !== 'Clear Filter') {
      const filteredPhotos = photos.filter(
        (photo) => photo.camera.full_name === camName
      )
      setPhotos([...filteredPhotos])
    } else {
      console.log('clearing filter')
    }
  }

  return (
    <div
      className="container container-xs"
      style={{ maxWidth: '1800px', minWidth: '280px' }}
    >
      <form onSubmit={handleSubmit}>
        <div
          className={
            window.innerWidth > 800
              ? 'd-flex flex-row justify-content-center align-items-center mb-5'
              : 'd-flex flex-column justify-content-center align-items-center mb-5'
          }
        >
          <RoverSelector setRover={setRover} />
          <TimeSelector
            setdateType={setdateType}
            setpickedTime={setpickedTime}
          />
          <div className="d-grid gap-2">
            <button
              type="submit"
              className="btn btn-secondary solp"
              disabled={!dateType || !rover}
            >
              {rover && dateType ? 'Search' : 'Pick Options'}
            </button>
          </div>
        </div>
      </form>
      {photos && photos.length !== 0
        ? (
        <>
          <p className="text-center">
            <b> Filter by Camera </b>
          </p>
          <div className="p-2 d-flex justify-content-center flex-wrap">
            {cameras && cameras?.length > 1
              ? cameras.map((cam, i) => (
                  <CamCard key={i} cam={cam} filterPics={filterPics} />
              ))
              : ''}
          </div>
          <p className="text-center">
            <b> {photos.length} pictures available </b>
          </p>
          <div className="d-flex justify-content-center gap-5  flex-wrap">
            <button
              className="btn btn-success"
              disabled={page === 1}
              onClick={async () => {
                setPage((prevState) => prevState - 1)
                const newSearch = await APICall(rover, pickedTime, page)
                setPhotos([...newSearch])
                createCameraButtons()
              }}
            >
              <i className="fa-solid fa-backward"></i> Previous
            </button>
            <button className="btn btn-secondary">Page {page}</button>
            <button
              className="btn btn-success"
              disabled={photos.length < 25}
              onClick={async () => {
                setPage((prevState) => prevState + 1)
                const newSearch = await APICall(rover, pickedTime, page)
                setPhotos([...newSearch])
                createCameraButtons()
              }}
            >
              Next <i className="fa-solid fa-forward"></i>
            </button>
          </div>
        </>
          )
        : (
            ''
          )}
      <div className="d-flex justify-content-center gap-5  flex-wrap">
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
    </div>
  )
}

export default SearchForm
