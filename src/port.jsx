import './port.css'

import React from 'react'

const Port = (props) => {
  return (
    <div className='portfolio'>
      <h3 className="port-title">{ props.name }</h3>
      <img src={props.image} alt="hello world" className="port-image" />

    </div>
  )
}

export default Port
