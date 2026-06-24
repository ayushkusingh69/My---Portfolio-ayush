import { useState } from 'react'
import Navbar from './components/Header/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Project from './components/Project/Project'
import Skill from './components/Skill/Skill'
import Contact from './components/Contact/Contact'
import { Routes , Route } from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    <>
    <Navbar />
    
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/skills" element={<Skill />}/>
      <Route path="/projects" element={<Project />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
    </>
  )
}

export default App
