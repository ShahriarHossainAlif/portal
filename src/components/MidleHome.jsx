import React from 'react'
import './MidleHome.css'
import IntroImg from "../assets/intro-bg.jpg"
import { Link } from 'react-router-dom'

const MidleHome = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="bg-img"/>
      </div>
      <div className='content'>
        <p>HELLO! I'M SHAHRIAR HOSSAIN ALIF</p>
        <h1>I'M A REACT DEVELOPER</h1>
        <div>
          <Link to='/project' className="btn">Project</Link>
          <Link to='/contact' className="btn-light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default MidleHome
