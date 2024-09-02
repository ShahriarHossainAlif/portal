import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MidleHome2 from '../components/MidleHome2'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
       <Navbar/>
       <MidleHome2 heading="CONTACT" text="Let's have a chat"/>
       <Form/>
       <Footer/>
    </div>
  )
}

export default Contact
