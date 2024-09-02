import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MidleHome2 from '../components/MidleHome2'
import Pricing from '../components/Pricing'
import Work from '../components/Work'


const Project = () => {
  return (
    <div>
    <Navbar/>
    <MidleHome2 heading="PROJECTS" text="Some of my recent works"/>
    <Work/>
    <Pricing/>
    <Footer/>
    </div>
  )
}

export default Project
