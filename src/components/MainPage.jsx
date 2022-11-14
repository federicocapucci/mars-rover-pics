import React, { useState } from 'react'
import RoverSelector from './RoverSelector'
import TimeSelector from './TimeSelector'
import APICall from '../services/APICall'
import PhotoCard from './PhotoCard'
import CamCard from './CamCard'
import RoverInfo from './RoverInfo'
import ScrollToTop from './ScrollToTop'
import Footer from './Footer'

const MainPage = () => {
  const [dateType, setdateType] = useState('')
  const [pickedTime, setpickedTime] = useState('')
  const [rover, setRover] = useState('')
  const [photos, setPhotos] = useState(null)
  const [cameras, setCamera] = useState([])
  const [roverInfo, setRoverInfo] = useState(false)
  const [page, setPage] = useState(1)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setPage(1)
    const search = await APICall(rover, pickedTime)
    setPhotos([...search])
    createCameraButtons(search)
    getRoverInfo(search)
    setPage(JSON.parse(localStorage.getItem('searchParams')).page)
  }

  const createCameraButtons = (search) => {
    const savedCams = [...new Set(search.map((item) => item.camera.full_name))]
    savedCams.push('Clear Filter')
    setCamera(savedCams)
  }

  const getRoverInfo = (search) => {
    const currentRoverInfo = search[0]?.rover
    setRoverInfo({ ...currentRoverInfo })
  }

  const getStoredPics = () => {
    const savedSearch = JSON.parse(localStorage.getItem('searchData'))
    return savedSearch
  }

  const changePage = async (num) => {
    setPage((prevState) => prevState + num)
    const newSearch = await APICall(rover, pickedTime, page + num)
    setPhotos([...newSearch])
    createCameraButtons(newSearch)
  }

  const filterPics = async (camName) => {
    const newPhotos = getStoredPics()

    if (camName !== 'Clear Filter') {
      const filteredPhotos = newPhotos.filter(
        (photo) => photo.camera.full_name === camName
      )
      setPhotos([...filteredPhotos])
    } else {
      setPhotos([...newPhotos])
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
              ? 'd-flex flex-row justify-content-center align-items-center mb-2'
              : 'd-flex flex-column justify-content-center align-items-center mb-2'
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
      {roverInfo && photos && photos.length !== 0
        ? (
        <>
          <RoverInfo data={roverInfo} />
          <hr />
        </>
          )
        : null}
      {photos && photos.length !== 0
        ? (
        <>
          <p
            className="mx-3 solp textBorder text-center"
            style={{ color: 'rgba(255,255,255,0.9)' }}
          >
            <i className="fa-solid fa-filter"></i> by{' '}
            <i className="fa-solid fa-camera"></i>
          </p>
          <div className="d-flex justify-content-center flex-wrap">
            {cameras && cameras?.length > 1
              ? cameras.map((cam, i) => (
                  <CamCard key={i} cam={cam} filterPics={filterPics} />
              ))
              : ''}
          </div>
          <p
            className="mx-3 solp textBorder text-center"
            style={{ color: 'rgba(255,255,255,0.9)' }}
          >
            <b> {photos.length} pictures available </b>
          </p>
          <hr />
          <div className="d-flex justify-content-center gap-3  flex-wrap">
            <button
              className="btn btn-success"
              disabled={page === 1}
              onClick={() => changePage(-1)}
            >
              <i className="fa-solid fa-backward"></i> Prev
            </button>
            <button className="btn btn-secondary">Page {page}</button>
            <button
              className="btn btn-success"
              disabled={
                JSON.parse(localStorage.getItem('searchData')).length < 25
              }
              onClick={() => changePage(1)}
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
          <p className="card p-2 mt-5 text-center">
            No results found for current rover/date combination. Try a different
            one please
          </p>
              )
            : null}
      </div>
      {photos && photos.length !== 0 ? <ScrollToTop /> : null}
      <Footer />
    </div>
  )
}

export default MainPage
