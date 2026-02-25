import React from 'react'
import { useEffect, useState } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';  

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    
    <>
    <div className='h-16  bg-[#ffffff] w-full flex items-center justify-between sm:px-7 px-3'>
        <p className='md:text-2xl  font-semibold font-cusive underline'>Jewellery</p>

        <div className='hidden md:w-96 lg:w-1/3 justify-center items-center md:flex gap-3'>
          <span className='flex gap-2 w-full items-center border border-gray-400 rounded px-3 py-1.5 text-gray-500'>
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
            <input type="text" 
              placeholder="Find Your Jewellery" 
              className="outline-none focus:ring-2 focus:ring-yellow-500 w-full"/>
          </span>
          <button className='bg-yellow-400 hover:bg-yellow-500 border text-black px-4 py-1.5 rounded'>Search</button>
        </div>

        <div className='flex sm:gap-4 gap-2 items-center'>
          <MagnifyingGlassIcon className="h-6 w-6 md:hidden" />
          <HeartIcon className="h-6 w-6 text-black" />
          <ShoppingBagIcon className="h-6 w-6 text-black" />
          <UserIcon className="h-6 w-6 text-black" />
        </div>

    </div>
      <div
        className={`bg-[#d4af37] sticky top-0 w-full flex items-center justify-center 
        transition-all duration-300 z-50
        ${scrolled ? "h-20 shadow-lg" : "h-12"}`}
      >
         <div className='gap-5 sm:text-xl text-sm flex font-mono items-center justify-between'>
          <p>Home</p>
          <p>About</p>
          <p>Categories</p>
          <p>Products</p>
        </div>
      </div>
    </>
  )
}
export default Navbar