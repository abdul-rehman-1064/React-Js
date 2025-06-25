import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { apiData } from "../context/DataContext";
import Category from "./Category";
import { useNavigate } from "react-router-dom";

function Carousel() {
  const { data, getallProducts } = apiData();
  const naviagte = useNavigate();
  console.log(data);

  useEffect(() => {
    getallProducts();
  }, []);

  let settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        {data?.slice(0,6).map((item) => {
          return (
            <div className="bg-gradient-to-r from-[#e6b054] to-black w-full h-full">
              <div className="flex flex-col md:flex-row gap-10 justify-center h-[600px] my-20 md:my-0 items-center px-4">
                <div className="md:space-y-6 space-y-3">
                  <h3 className="text-white font-bold font-mono text-sm">
                    Powering Your World with the Best in Electronics
                  </h3>
                  <h1 className="md:text-4xl text-xl font-bold uppercase line-clamp-2 md:line-clamp-3 md:w-[500px] text-black">
                    {item.title}
                  </h1>
                  <p className="md:w-[500px] line-clamp-3 text-white pr-7">
                    {item.description}
                  </p>
                  <button className="border-2 border-[#292827] text-white  px-4 py-2 rounded-md hover:bg-[#e6b054] hover:text-black transition">
                    Click Me
                  </button>
                </div>
                <div>
                  <img
                  onClick={()=>naviagte(`/products/${item.id}`)}
                    src={item.image}
                    alt={item.title}
                    className="rounded-full w-[450px] hover:scale-105 transition-all shadow-2xl cursor-pointer shadow-yellow-400"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <Category />
    </>
  );
}

export default Carousel;
