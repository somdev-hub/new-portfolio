import React from 'react'
import './Card.css'

const Card = ({emoji,heading,detail}) => {
  return (
      <div className="card">
          <img src={emoji} alt="" />
          <span>{heading}</span>
          <span>{detail}</span>
          <b className="c-button">Learn More</b>
      </div>
  )
}

export default Card