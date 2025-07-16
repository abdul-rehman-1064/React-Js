import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo1.png'
import { SiHomebridge } from "react-icons/si";
import { TbInvoice } from "react-icons/tb";
import { MdPayments } from "react-icons/md";
import { RiSettings6Fill } from "react-icons/ri";

function SideMenu({ isOpen, setIsOpen }) {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-[75%] z-50 bg-black text-white transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="lg:hidden w-full p-6 shadow-md">
        <div className="underline text-white">
            <img src={logo} className="w-24 p-2" alt="" />
        </div>
        <ul className="flex flex-col space-y-4 font-medium">
          {[
            { path: "/dashboard/home", label: "Home" ,icon: <SiHomebridge className="text-2xl" />, },
            { path: "/dashboard/invoices", label: "Invoices" , icon: <TbInvoice className="text-2xl" />, },
            { path: "/dashboard/new-invoice", label: "New Invoice" , icon: <MdPayments className="text-2xl" />, },
            { path: "/dashboard/settings", label: "About Us" , icon: <RiSettings6Fill className="text-2xl" />, },
          ].map(({ path, label ,icon }) => (
            <li key={path}>
              <NavLink
                to={path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `gap-2 py-2 px-4 rounded-md duration-200 flex ${
                    isActive
                      ? "text-[#00d8d8] font-semibold"
                      : "text-white"
                  } hover:bg-gray-900 hover:text-[#00d8d8]`
                }
              >
                {icon} {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideMenu;

