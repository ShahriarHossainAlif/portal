import React from "react";
import './App.css'
import Home from './routes/Home'
import About from './routes/About'
import Contact from './routes/Contact'
import Project from './routes/Project'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/project" element={<Project />}/>
      </Routes>
    </>
  )
   
}

export default App
