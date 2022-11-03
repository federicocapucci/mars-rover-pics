import React from 'react'

const Navbar = () => (
  <nav
    className="d-flex align-items-center"
    style={{
      width: '100vw',
      height: '160px',
      background: 'rgb(255,255,255)',
      // eslint-disable-next-line no-dupe-keys
      background:
        'linear-gradient(180deg, rgba(255,255,255,1) 55%, rgba(255,255,255,0) 100%)'
    }}
  >
    <div className="container-fluid d-flex justify-content-center">
      <span
        className="navbar-brand text-align me-2"
        style={{ fontSize: '25px', color: 'rgb(90,90,90)' }}
      >
        Mars Rover
      </span>
      <img src="favicon.ico" alt="icon" style={{ height: '30px' }} />
    </div>
  </nav>
)
export default Navbar
