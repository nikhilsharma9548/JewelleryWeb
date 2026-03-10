import React from 'react'
import { assets } from '../assets/assets'
const Bestseller = () => {
    const bestsellers = [
        assets.NewAdd1,
        assets.NewAdd2,
        assets.NewAdd3,
        assets.NewAdd4
    ]
  return (
    <div className='my-5'>
        <h1 className='px-4 text-3xl text-gray-700 font-mono  '>Some Unique Collections</h1>
        <div className='h-1 rounded-full bg-gray-600 w-64 mx-5'></div>

        <div className='grid grid-cols-2 md:grid-cols-4 max-w-6xl  gap-4 justify-center mt-5 px-2 mx-auto'>
            {
                bestsellers.map((item,index) => (
                    <div key={index} className='lg:w-64 lg:h-80 max-w-2xl rounded-lg overflow-hidden shadow-lg'>
                        <img src={item} alt={`Bestseller ${index + 1}`} className='w-full h-full object-cover transition-transform duration-300 hover:scale-105' />
                    </div>
                ))      
            }
        </div>
        <button className='mx-auto block mt-5 text-white px-6 py-2 rounded-lg border-amber-500 border-2 bg-gray-800'>See More</button>
    </div>
  )
}

export default Bestseller