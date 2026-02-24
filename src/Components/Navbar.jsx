import React from 'react'
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <div className='h-20 bg-[#ffffff] w-full flex items-center justify-between px-7 shadow-md'>
        <p className='md:text-2xl  font-semibold font-cusive underline'>Jewellery</p>

        <div className='sm:flex gap-5 text-xl hidden'>
          <p>Home</p>
          <p>About</p>
          <p>Categories</p>
          <p>Products</p>
        </div>

        <div className='flex sm:gap-5 gap-2 items-center'>
          <HeartIcon className="h-6 w-6 text-black" />
          <UserIcon className="h-6 w-6 text-black" />
          <ShoppingBagIcon className="h-6 w-6 text-black" />
        </div>

    </div>
  )
}
export default Navbar