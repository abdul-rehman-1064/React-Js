import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaFacebook, FaPinterest } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <footer className="bg-[#111111] text-white py-10 px-4">
        <div className="flex flex-col gap-y-10 md:flex-row md:flex-wrap md:justify-between max-w-7xl mx-auto">
          {/* Logo and Address */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
            <Link to="/" className="flex items-center font-bold text-3xl sm:text-4xl">
              <span className="text-[#FFCB74]">Nexora</span>Solutions
            </Link>
            <p className="text-sm font-semibold w-full sm:w-72">Powering Your World with the Best in Electronics</p>
            <p className="text-sm w-full sm:w-72">
              House No 1045, Street No 39, Mohallah Qasaban, Ghakkhar Mandi, Gujranwala, Punjab, Pakistan — 52200
            </p>
          </div>

          {/* Customer Service */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <h2 className="font-bold text-lg sm:text-xl">Customer Service</h2>
            <ul className="space-y-2">
              <li><NavLink to="/contact" className="hover:text-[#FFCB74] text-sm">Contact Us</NavLink></li>
              <li><NavLink to="/faq" className="hover:text-[#FFCB74] text-sm">FAQ</NavLink></li>
              <li><NavLink to="/returns" className="hover:text-[#FFCB74] text-sm">Terms & Conditions</NavLink></li>
              <li><NavLink to="/privacy-policy" className="hover:text-[#FFCB74] text-sm">Privacy Policy</NavLink></li>
              <li><NavLink to="/terms-conditions" className="hover:text-[#FFCB74] text-sm">Size Guide</NavLink></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
            <h2 className="font-bold text-lg sm:text-xl">Follow Us</h2>
            <div className="flex gap-4 text-xl">
              <Link to=""><FaFacebook /></Link>
              <Link to=""><RiInstagramFill /></Link>
              <Link to=""><FaSquareXTwitter /></Link>
              <Link to=""><FaPinterest /></Link>
            </div>
            <div>
              <span className="text-[#e8c17d]">Email:</span>
              <p className="text-sm">nexorasolution1@gamil.com</p>
            </div>
            <div>
              <span className="text-[#e8c17d]">Phone:</span>
              <p className="text-sm">+923225547677</p>
            </div>
          </div>

          {/* Subscribe */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
            <h2 className="font-bold text-lg sm:text-xl">Stay in the Loop</h2>
            <p className="text-sm w-full sm:w-64">Subscribe to get special offers, free giveaways, and more</p>
            <input
              type="text"
              placeholder="Enter Email"
              className="w-full sm:w-64 h-10 px-2 rounded-md bg-[#1a1a1a] text-white border border-[#FFCB74] placeholder:text-center focus:outline-none focus:border-[#FFCB74]"
            />
            <button className="w-full sm:w-64 h-12 bg-[#ffcb74] rounded-md text-black font-semibold">
              Subscribe
            </button>
          </div>
        </div>

        <hr className="border-t-2 border-[#FFCB74] w-1/2 mx-auto my-6" />

        <div className="text-center text-sm">
          &copy; 2025 <span className="font-semibold text-[#ffcb74]">nexorasolution</span>. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
