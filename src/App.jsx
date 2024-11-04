import React from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import About from './Component/About'
import Experience from './Component/Experience'
import Project from './Component/Project'
import Footer from './Component/Footer'

const App = () => {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Project />
      <Footer />
    </div>
  )
}

export default App

