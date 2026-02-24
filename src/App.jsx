import { useState } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'

function App() {

  return (
    <>
    <div className='h-screen w-full bg-[#f5efe6] overflow-x-hidden'>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
    </>
  )
}

export default App
