import React from 'react'
import { assets } from '../assets/assets'
const Bestseller = () => {
    const bestsellers = [
        assets.NewAdd1,
        assets.NewAdd2,
        assets.NewAdd3,
        assets.NewAdd5
    ]
  return (
    <div className='my-5'>
        <h1 className='px-4 text-3xl font-mono '>Bestseller</h1>
        <div className='h-1 rounded-full bg-gray-600 w-32 mx-5'></div>

        <div className="flex md:gap-4 gap-1 h-96 max-w-6xl mx-auto mt-5">

  {bestsellers.map((img, index) => (
    <div
      key={index}
      className="
        group relative flex-1
        overflow-hidden
        md:rounded-2xl
        rounded
        transition-all duration-500
        hover:flex-4
      "
    >
      <img
        src={img}
        className="
          w-full h-full object-cover
          transition-all duration-500
        "
      />
    </div>
  ))}

</div>
        <button className='mx-auto block mt-5 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition duration-300'>See More</button>
    </div>
  )
}

export default Bestseller