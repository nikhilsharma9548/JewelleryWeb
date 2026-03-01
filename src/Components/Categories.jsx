import React from 'react'
import { assets } from '../assets/assets'

const Categories = () => {
  return (
    <div className='bg-[#f5efe6] py-10 flex flex-col items-center justify-center sm:mt-20 sm:px-20'>
        <p className='sm:text-3xl text-xl font-mono text-center text-gray-700 '>Modern Interpretations in Diamond</p>
        <p className='text-center sm:text-2xl text-md font-serif mt-1 text-gray-600'>Curated for the Festival of Diamonds</p>

        <div className='flex max-w-7xl justify-center items-center md:gap-5 gap-3 sm:mt-10 mt-5 max-sm:px-10 '>

            <div className='max-w-64 flex flex-col items-center justify-center gap-2 relative hover:scale-105 duration-300'>
                <img src={assets.earrings} className='w-64  rounded shadow-2xl shadow-olive-800'/>
            </div>

            <div className='max-w-64 flex flex-col items-center justify-center gap-2 relative hover:scale-105 duration-300 transform transition-all'>
                <img src={assets.festivewear} className='w-64 rounded shadow-2xl shadow-olive-800'/>
            </div>

            <div className='max-w-64 flex flex-col items-center justify-center gap-2 relative hover:scale-105 duration-300'>
                <img src={assets.necless} className='w-64 rounded shadow-2xl shadow-olive-800'/>
            </div>

            <div className='max-w-64 flex flex-col items-center justify-center gap-2 relative hover:scale-105 duration-300'>
                <img src={assets.party} className='w-64  rounded shadow-2xl shadow-olive-800'/>
            </div>

            <div className='max-w-64 flex flex-col items-center justify-center gap-2 relative hover:scale-105 duration-300'>
                <img src={assets.chains} className='w-64  rounded shadow-2xl shadow-olive-800'/>
            </div>
        </div>
    </div>
  )
}

export default Categories