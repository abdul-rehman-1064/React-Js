import React from "react";
import logo from "../../assets/logo1.png";
import { NavLink } from "react-router-dom";
import { SiHomebridge } from "react-icons/si";
import { TbInvoice } from "react-icons/tb";
import { MdPayments } from "react-icons/md";
import { RiSettings6Fill } from "react-icons/ri";
import logo2 from '../../assets/logo2.png'
import { useSelector } from "react-redux";
import { useState } from "react";

function SideBar() {
  const authStatus = useSelector(state => state.auth.userData)
     const [show, setShow] = useState(false);
  //  <img src={authStatus.photoURL} alt="" />
  //   <h2>{authStatus.displayName}</h2>

  const navItems = [
    {
      name: "Home",
      slug: "/dashboard",
      icon: <SiHomebridge className="text-2xl" />,
    },
    {
      name: "Invoices",
      slug: "/dashboard/invoices",
      icon: <TbInvoice className="text-2xl" />,
    },
    {
      name: "New Invoice",
      slug: "/dashboard/new-invoice",
      icon: <MdPayments className="text-2xl" />,
    },
    {
      name: "About Us",
      slug: "/dashboard/settings",
      icon: <RiSettings6Fill className="text-2xl" />,
    },
  ];

  return (
    <div className="h-screen bg-black hidden lg:flex text-white p-4 flex-col justify-between border-r-2 border-dashed border-gray-800">
      <div className="top">
        <div className="ml-1 mt-3 flex">
          <img
            className="w-12 cursor-pointer"
            onClick={() => setShow((prev) => !prev)}
            src={logo}
            alt=""
          />
          {show ? (
            <p className="mt-2 font-semibold text-xl border-b-4 border-[#00d8d8]">
              {" "}
              Invoice App
            </p>
          ) : null}
        </div>
        <div className="chat flex justify-center items-center mt-12 gap-2 p-3 rounded-full  text-[#1d1f22] cursor-pointer  ">
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-3xl ">
              {navItems.map((item) => (
                <li key={item.slug} className="font-semibold text-xl mb-2 ">
                  <NavLink
                    to={item.slug}
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-[#00d8d8]" : "text-gray-200"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:[#00d8d8] lg:p-0 flex items-center gap-2 mb-4`
                    }
                  >
                    {show ? (
                      <>
                        {item.icon}
                        <span>{item.name}</span>
                      </>
                    ) : (
                      item.icon
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
       
      </div>

      
      <div className="bottom mb-7">
        <div className="flex items-center justify-center p-[12px] text-white cursor-pointer  rounded-full">
          <img className={`w-6 border-gray-900 border-2 rounded-full ${show ? "w-16   rounded-full" : "rounded-xl"}`} src={logo2} alt="" />
          
        </div>
        {show ? <p className="font-sans ml-2 font-semibold">User : <span className="text-[#00d8d8]">{authStatus.displayName.toUpperCase()}</span></p> : null}
      </div>
    </div>
  );
}

export default SideBar;
