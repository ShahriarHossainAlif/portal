import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MidleHome2 from '../components/MidleHome2'
import AboutContet from '../components/AboutContet'

const About = () => {
  return (
    <div>
      <Navbar/>
      <MidleHome2 heading="ABOUT" text="I'm a Front-End Developer. I design and create unique web pages."/>
      <AboutContet/>
      <Footer/>
    </div>
  )
}

export default About
