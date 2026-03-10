import React from 'react'
import { assets } from '../assets/assets'

const AboutUs = () => {
  return (
    <div className=' px-10 py-10'>
      <h1 className='text-3xl font-mono mb-2 text-gray-700'>About Our Shops</h1>
      {/* <p className='mt-2 text-gray-600'>Visit our stores across the country</p> */}
      <div className='flex flex-col md:flex-row gap-3'>
        <p> </p>
        <img src={assets.Hero} className="md:max-w-2xl 2xl:max-w-3xl rounded" />
      </div>
    </div>
  )
}

export default AboutUs