import React from 'react'

const ScrollToTop = () => {
  const scroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <div className="row">
      <button
        onClick={() => {
          scroll()
        }}
        className="btn btn-secondary btn-smooth solp"
        style={{
          position: 'fixed',
          bottom: '-4px',
          left: '50%',
          transform: 'translate(-50%,0)',
          width: '160px',
          color: 'white'
        }}
      >
        <i className="fa-solid fa-chevron-up"></i>
      </button>
    </div>
  )
}

export default ScrollToTop