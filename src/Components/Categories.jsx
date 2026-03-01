import React from 'react'
import { assets } from '../assets/assets'

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

const Categories = () => {

  const images = [
    assets.earrings,
    assets.festivewear,
    assets.necless,
    assets.party,
    assets.chains
  ]

  return (
    <div className='bg-[#f5efe6] py-10 flex flex-col items-center mt-5 sm:px-20'>

      <p className='sm:text-3xl text-xl font-mono text-center text-gray-700'>
        Modern Interpretations in Diamond
      </p>

      <p className='text-center sm:text-2xl text-md font-serif mt-1 text-gray-600'>
        Curated for the Festival of Diamonds
      </p>

      {/* ================= DESKTOP VIEW ================= */}
      <div className='hidden sm:flex max-w-7xl justify-center items-center md:gap-5 gap-3 sm:mt-10 mt-5'>
        {images.map((img, index) => (
          <div
            key={index}
            className='max-w-64 hover:scale-105 duration-300'
          >
            <img
              src={img}
              className='w-64 rounded shadow-2xl'
            />
          </div>
        ))}
      </div>

      {/* ================= MOBILE SWIPER ================= */}
      {/* ================= MOBILE SWIPER ================= */}
<div className="sm:hidden w-full mt-10">

  <Swiper
  modules={[EffectCoverflow, FreeMode]}
  effect="coverflow"
  centeredSlides={true}
  slidesPerView={1.6}
  freeMode={true}
  grabCursor={true}
  loop={true}
  spaceBetween={20}
  className="w-full px-6"
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 120,
    modifier: 2,
    slideShadows: false,
  }}
>
  {images.map((img, index) => (
    <SwiperSlide key={index} className="flex justify-center">
      <img
        src={img}
        alt=""
        className="w-96 h-80 object-cover rounded-xl shadow-xl"
      />
      <p className='text-base px-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis commodi omnis laboriosam ut modi laudantium qui suscipit incidunt.</p>
    </SwiperSlide>
  ))}
</Swiper>
</div>

    </div>
  )
}

export default Categories