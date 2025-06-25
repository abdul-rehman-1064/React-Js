import React, { useState } from "react";


function SideMenu({isOpen, toggleMenu}) {
  

  return (
    <>
    <div className={`fixed top-0 left-0 w-[75%] h-full z-50 bg-gray-800 text-white transition-transform transform duration-300 ease-in-out overflow-hidden  ${isOpen ? 'left-0' : 'left-[-100%]'}`}>
        <p className=" ">test</p>
    </div>
    </>
  );
}

export default SideMenu;
