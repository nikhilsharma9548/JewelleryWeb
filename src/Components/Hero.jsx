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

  return (
      <div className='sm:flex hidden bg-[#f5efe6] justify-center w-full py-10'>
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
      className="max-w-7xl lg:rounded-xl w-full"
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
  )
}

export default Hero