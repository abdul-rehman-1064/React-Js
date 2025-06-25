import React from "react";
import banner from "../assets/banner.jpg";

const MidBanner = () => {
  return (
    <div className="bg-gray-100 md:py-24">
      <div
        className="relative max-w-7xl mx-auto md:rounded-2xl pt-28 bg-cover bg-center h-[550px] md:h-[550px] "
        style={{
          backgroundImage: `url(${banner})`,
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/60 md:rounded-2xl bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            {/* <h1 className=' mb-4'></h1>
             */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r  from-[#e6b054] to-black bg-clip-text text-transparent">
              Next-Gen Electronics at Your Fingertips
            </h1>
            <p className="text-2xl md:text-xl mb-6">
              Discover the latest tech innovations with unbeatable prices and
              free shipping on all orders.
            </p>
            <button className="border-2 border-[#292827] text-white bg-[#e6b054] px-4 py-2 font-bold w-44 rounded-md hover:bg-[#e6b054] hover:text-black transition">
              Click Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidBanner;
