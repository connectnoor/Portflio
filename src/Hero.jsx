import React from 'react'
import "./hero.css"
import hero from './assets/hero.png'

import image from './assets/hero.png'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="left">
        <h1 id='hi' >hi !</h1>
        <h3><h1 className='hero-heading'>I'm Noor Amin </h1>
        <h1 className='hero-heading' >a Front-End Developer</h1></h3>
        <p>Frontend developer based in Karachi, Pakistan. Love to build Web applications using HTML, CSS, JAVASCRIPT & REACT JS</p>

      </div>
      <div className="right">
        <div className="image">
          <img src={hero} alt="hello world"  ></img>
        </div>
      </div>
    </div>
  )
}

export default Hero
