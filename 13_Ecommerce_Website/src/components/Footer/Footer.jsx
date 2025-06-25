import React from 'react'
import { Link , Links, NavLink } from 'react-router-dom'
import { FaFacebook,FaPinterest  } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <footer className='bg-[#111111] text-white py-8 sm:flex sm:flex-col sm:items-center sm:justify-center'>
        <div className='lg:flex flex-wrap gap-10'>
        <div className='sm:flex sm:flex-col sm:items-center sm:justify-center'>
        <div className="mx-8 text-2xl ml-12 sm:text-center">
          <Link to="/" className="flex items-center font-bold text-4xl">
            <span className="text-[#FFCB74]">Nexora</span>Solutions
          </Link>
        </div>
        <p className='text-white text-sm w-72 text-center mt-3 ml-12 font-semibold'>Powering Your World with the Best in Electronics</p>
        <p className='text-white text-sm w-64 text-center mt-3 ml-12 '>House No 1045 , Street No 39 , Mohallah Qasaban , Ghakkhar Mandi , Gujranwala , Punjab , Pakistan ... 52200</p>
        </div>
        <div className='flex flex-col items-center justify-center ml-12'>
            <h2 className='font-bold text-xl'>Customer Service</h2>
            <ul className='mt-4 space-y-2'>
                <li>
                    <NavLink to="/contact" className='text-white text-sm hover:text-[#FFCB74]'>Contact Us</NavLink>
                </li>
                <li>
                    <NavLink to="/faq" className='text-white text-sm hover:text-[#FFCB74]'>FAQ</NavLink>
                </li>
                <li>
                    <NavLink to="/returns" className='text-white text-sm hover:text-[#FFCB74]'>Terms & Conditions</NavLink>
                </li>
                <li>
                    <NavLink to="/privacy-policy" className='text-white text-sm hover:text-[#FFCB74]'>Privacy Policy</NavLink>
                </li>
                <li>
                    <NavLink to="/terms-conditions" className='text-white text-sm hover:text-[#FFCB74]'>Size Guide</NavLink>
                </li>
            </ul>
        </div>
       <div className='flex flex-col items-center justify-center ml-12'>
            <h2 className='font-bold text-xl'>Follow Us</h2>
            <div className='flex justify-center items-center gap-1 mt-4 '>
              <Link to=''><FaFacebook/></Link>
              <Link to=''><RiInstagramFill/></Link>
              <Link to=''><FaSquareXTwitter/></Link>
              <Link to=''><FaPinterest/></Link>
            </div>
           <span className='text-[#e8c17d] mt-5'>Email:</span> <p className='text-white mt-2'>nexorasolution1@gamil.com</p>
           <span className='text-[#e8c17d]'>Phone:</span> <p className='text-white'>+923225547677</p>
        </div>
        <div className='flex flex-col items-center justify-center ml-2'>
            <h2 className='font-bold text-xl'>Stay in the Loop</h2>
            <p>Subscribe to get special offers, free giveaways, and more</p>
            <input type="text" name="Email" placeholder='Enter Email' 
            id="" 
            className='w-64 h-10 mt-3 px-2 rounded-md bg-[#1a1a1a] text-white border border-[#FFCB74] focus:outline-none focus:border-[#FFCB74] placeholder:text-center' />
            <button className='w-64 h-12 mt-1 bg-[#ffcb74] rounded-md text-black font-semibold '>Subscribe</button>
        </div>
        </div>
        <hr className="border-t-2 border-[#FFCB74] w-1/2 mx-auto my-6" />

        <div className=" text-center">&copy; 2025 <span className='font-semibold text-[#ffcb74]'>nexorasolution</span>.All right reserved</div>
      </footer>
    </>
  )
}

export default Footer