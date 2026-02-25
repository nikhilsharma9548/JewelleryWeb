import React from 'react'
// import { FiLinkedin } from "react-icons/fi"
// import { BsTwitterX } from "react-icons/bs";
// import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
        <footer className="px-3  w-full bg-[#d4af37]">
            <div className="flex flex-col md:flex-row items-start justify-center gap-10 py-10 border-b-2 border-black">
                
                <div className="max-w-96">
                   <div className='flex items-center gap-2 md:text-2xl font-bold                                                                         '>
                    <span className='font-semibold font-cusive underline'>Jewellery</span>
                   </div>   
                    <p className="mt-3 text-sm  pb-4">
                       Discover premium Jewellery at JewelleryStore. Stylish designs,
                        secure shopping, and fast delivery – all in one place.
                    </p>
                    <div className="flex items-center gap-3 mt-3">
                        <a href="#">
                           {/* <p className='hover:-translate-y-1 duration-150'><BsTwitterX/></p> */}
                        </a>
                        <a href="https://github.com/nikhilsharma9548  ">
                            {/* <p className='text-xl hover:-translate-y-1 duration-150'><FaGithub/></p> */}
                        </a>
                        <a href="https://www.linkedin.com/in/nikhil-sharma-43a013341">
                            {/* <p className='text-xl hover:-translate-y-1 duration-150'><FiLinkedin/></p> */}
                        </a>
                    </div>
                </div>
        
                <div className="md:w-1/2 w-full flex flex-wrap md:flex-nowrap gap-20 md:justify-between">
                    <div>
                        <h2 className="font-semibold mb-5">RESOURCES</h2>
                        <ul className="text-sm space-y-2 list-none">
                            <li><a href="#">Documentation</a></li>
                            <li><a href="#">Tutorials</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Community</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5">ABOUT</h2>
                        <div className="text-sm space-y-2 list-none">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Terms</a></li>
                        </div>
                    </div>
                </div>
        
            </div>
            <p className="py-4 text-center text-xs md:text-sm ">
                Copyright 2026 © Nikhil Shamra. All Right Reserved.
            </p>
        </footer>
    );
}

export default Footer