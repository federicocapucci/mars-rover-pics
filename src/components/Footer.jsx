import React from 'react'

const Footer = () => (
  <div
    className="textBorder solp"
    style={{
      fontSize: '0.7rem',
      textDecoration: 'none',
      position: 'fixed',
      bottom: '5px',
      right: '5px',
      color: 'white',
      opacity: '0.4'
    }}
  >
    {new Date().getFullYear()}° By{' '}
    <a
      className="textBorder"
      style={{
        fontSize: '0.7rem',
        textDecoration: 'none',
        color: 'orange',
        fontWeight: 'bold',
        opacity: '0.8'
      }}
      href="https://github.com/federicocapucci/mars-rover-pics"
      target={'_blank'}
      rel="noreferrer"
    >
      FC
    </a>
  </div>
)

export default Footer
