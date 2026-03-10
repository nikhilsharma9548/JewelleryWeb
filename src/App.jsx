import { useState } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import AboutUs from './Pages/AboutUs'

function App() {

  return (
    <>
    <div className='h-screen w-full bg-[#f5efe6] overflow-x-hidden'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collections' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contact' element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
    </>
  )
}

export default App
