import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { assets } from '../assets/assets'

const Hero = () => {

  const slides = [
    {
      image: assets.banner1,
      alt: "Jewellery 1"
    },
    {
      image: assets.banner2,
      alt: "Jewellery 2"
    },
    {
      image: assets.banner3,
      alt: "Jewellery 3"
    },
    {
      image: assets.banner4,
      alt: "Jewellery 4"
    }        
  ]

  const slides2 = [
    {
      image: assets.banner5,
      alt: "Jewellery 5"
    },
    {
      image: assets.banner6,
      alt: "Jewellery 6"
    },
    {
      image: assets.banner7,
      alt: "Jewellery 7"
    },
    {
      image: assets.banner8,
      alt: "Jewellery 8"
    }        
  ]

  return (
      <>
      <div className='hidden md:flex bg-[#f5efe6] justify-center w-full mt-3'>
            <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1} 
      spaceBetween={30}
      loop={true}  
      speed={1200}
      autoplay={{
        delay: 4000, 
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      className="w-full lg:rounded-xl "
    >
      {slides.map((slides) =>(
        <SwiperSlide key={slides.alt}>
          <img
            src={slides.image}
            className="w-full lg:rounded-xl"
            alt={slides.alt}
          />
        </SwiperSlide>
      ))}
    </Swiper>
      </div> 

    <div className='md:hidden flex bg-[#f5efe6] justify-center items-center w-full mt-10'>
            <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1} 
      spaceBetween={30}
      loop={true}  
      speed={1200}
      autoplay={{
        delay: 4000, 
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      className="w-full h-full lg:rounded-xl "
    >
      {slides2.map((slides) =>(
        <SwiperSlide key={slides.alt}>
          <img
            src={slides.image}
            className="w-full lg:rounded-xl object-cover"
            alt={slides.alt}
          />
        </SwiperSlide>
      ))}
    </Swiper>
      </div> 
      </>
  )
}

export default Hero