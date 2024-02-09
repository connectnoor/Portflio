import React from 'react'
import './Card.css'
import Backend from './assets/backend.png'
const Card = (props) => {
  return (
    <div className='card-div'>
      <img src={props.image} alt="BackEnd Pic" />
      <h1 className='title' >{props.title}</h1>
      <p className='desc-card' >{props.description}</p>

    </div>
  )
}

export default Card
