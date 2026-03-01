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
        <h1 className='px-4 text-3xl font-mono  '>Bestseller</h1>
        <div className='h-1 rounded-full bg-gray-600 w-32 mx-5'></div>

        <div className='grid grid-cols-2 md:grid-cols-4 max-w-6xl  gap-4 justify-center mt-5 px-2 mx-auto'>
            {
                bestsellers.map((item,index) => (
                    <div key={index} className='lg:w-64 lg:h-80 max-w-2xl rounded-lg overflow-hidden shadow-lg'>
                        <img src={item} alt={`Bestseller ${index + 1}`} className='w-full h-full object-cover' />
                    </div>
                ))      
            }
        </div>
        <button className='mx-auto block mt-5 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition duration-300'>See More</button>
    </div>
  )
}

export default Bestseller