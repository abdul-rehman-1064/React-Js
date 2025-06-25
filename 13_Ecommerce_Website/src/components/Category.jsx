import React from "react";
import { apiData } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

function Category() {
  const { data, categoryData } = apiData();
 const navigate =  useNavigate()
  return (
    <>
      <div className="bg-[#c4af3488] dark:text-white dark:bg-[#111111] ">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 items-center justify-center md:justify-around py-7 px-4">
          {categoryData?.map((item, index) => {
            return (
              <div key={index}>
                <button onClick={()=>navigate(`/category/${item}`)} className="border-2 border-[#292827] font-semibold text-black   px-4 py-2 rounded-md hover:bg-[#e6b054]
                hover:text-white transition dark:bg-white dark:hover:text-black dark:hover:bg-[#e6b054]">
                  {item.toUpperCase()}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Category;
