import React, { useState } from "react";
import { Link, NavLink ,useNavigate} from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { FaOpencart } from "react-icons/fa";
import { useCart } from "../context/CartContext";


function SideMenu({ isOpen, toggleMenu }) {
  const { cart } = useCart();

  return (
    <div className={`fixed top-0 left-0 w-[75%] h-full z-50 bg-gray-100 dark:bg-black text-black dark:text-white transition-transform transform duration-300 ease-in-out overflow-hidden ${isOpen ? 'left-0' : 'left-[-100%]'}`}>
      <div className="lg:hidden w-full bg-white dark:bg-black p-6 rounded-md shadow-md">
        <ul className="flex flex-col space-y-4 font-medium text-black dark:text-white">
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About Us" },
            { path: "/products", label: "Products" },
            { path: "/contact", label: "Contact Us" },
          ].map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                onClick={() => toggleMenu(false)}
                className={({ isActive }) =>
                  `block py-2 px-4 rounded-md duration-200 ${
                    isActive ? "text-[#e6b054]" : "text-black dark:text-white"
                  } hover:bg-gray-100 dark:hover:bg-[#1a1a1a] hover:text-[#FFCB74]`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}

          <li>
            <NavLink
              to="/cart"
              onClick={() => toggleMenu(false)}
              className={({ isActive }) =>
                `block py-2 px-4 rounded-md duration-200 ${
                  isActive ? "text-[#e6b054]" : "text-black dark:text-white"
                } hover:bg-gray-100 dark:hover:bg-[#1a1a1a] hover:text-[#FFCB74]`
              }
            >
              <div className="flex items-center gap-2">
                <FaOpencart />
                <span className="cart text-xs bg-[#e7ae4b] text-white px-2 py-0.5 rounded-full">
                  {cart.length}
                </span>
              </div>
            </NavLink>
          </li>

          <li>
            <SignedOut>
              <SignInButton className="w-full bg-[#FFCB74] text-black font-semibold rounded-md px-4 py-2 text-center" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </li>
        </ul>
      </div>
    </div>
  );
}


export default SideMenu;
