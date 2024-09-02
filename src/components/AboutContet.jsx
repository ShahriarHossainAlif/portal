import { Link } from "react-router-dom"
import "./AboutContent.css"
import React from 'react'
import R1 from "../assets/react1.jpg"
import R2 from "../assets/react2.webp"
const AboutContet = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>I'm a react fronted developer. I create responsive secure websites for my clients.</p>
        <Link to='/contact'>    
            <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-con">
            <div className="img-stack top">
                <img src={R1} className="img" alt="image" />
            </div>

            <div className="img-stack bottom">
                <img src={R2} className="img" alt="image" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContet
