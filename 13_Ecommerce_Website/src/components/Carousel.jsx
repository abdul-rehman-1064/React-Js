import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { apiData } from "../context/DataContext";
import Category from "./Category";
import { useNavigate } from "react-router-dom";

function Carousel() {
  const { data, getallProducts } = apiData();
  const navigate = useNavigate();

  useEffect(() => {
    getallProducts();
  }, []);

  const settings = {
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
        {data?.slice(0, 6).map((item) => {
          return (
            <div
              key={item.id}
              className="bg-gradient-to-r from-[#e6b054] to-black w-full"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-center px-4 py-10 md:py-0 min-h-[500px]">
                {/* Text Section */}
                <div className="md:space-y-6 space-y-3 text-center md:text-left">
                  <h3 className="text-white font-bold font-mono text-sm sm:text-base">
                    Powering Your World with the Best in Electronics
                  </h3>
                  <h1 className="text-xl sm:text-2xl md:text-4xl font-bold uppercase line-clamp-2 md:line-clamp-3 w-full md:w-[500px] text-black">
                    {item.title}
                  </h1>
                  <p className="text-white w-full md:w-[500px] line-clamp-3 px-2 md:px-0 text-sm sm:text-base">
                    {item.description}
                  </p>
                  <button className="border-2 border-[#292827] text-white px-4 py-2 rounded-md hover:bg-[#e6b054] hover:text-black transition">
                    Click Me
                  </button>
                </div>

                {/* Image Section */}
                <div className="flex justify-center items-center">
                  <img
                    onClick={() => navigate(`/products/${item.id}`)}
                    src={item.image}
                    alt={item.title}
                    className="rounded-full w-[250px] sm:w-[300px] md:w-[450px] hover:scale-105 transition-all shadow-2xl cursor-pointer shadow-yellow-400"
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
