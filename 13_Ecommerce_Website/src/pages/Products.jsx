import React, { useEffect, useState } from "react";
import FilterSection from "../components/FilterSection";
import ProductCard from "../components/ProductCard";
import { apiData } from "../context/DataContext";
import Pagination from "../components/Pagination";
import Lottie from 'lottie-react'
import notfound from '../assets/notfound.json'
import Animation from '../assets/Animation - 1750746128058.json'

function Products() {
  const { data, getallProducts } = apiData();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("ALL");
  const [brand, setBrand] = useState("ALL");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [page ,setPage] = useState(1);

  useEffect(() => {
    getallProducts();
    window.scrollTo(0, 0);
  }, []);
  
  

  const handleCategory = (e) => {
    setCategory(e.target.value);
    setPage(1);
    window.scrollTo(0, 0);
  };

  const handleBrand = (e) => {
    setBrand(e.target.value);
    setPage(1);
    window.scrollTo(0, 0);
  };

  const pageHandler =(page)=>{
    setPage(page);
    window.scrollTo(0, 0);
  }

  const dynamicPage = Math.ceil(data?.length / 8);
  

  const uniqueData = data?.filter((product) => 
    product.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "ALL" || product.category === category) &&
      (brand === "ALL" || product.brand === brand) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1]
  );

  // console.log(uniqueData);
  
  return (
    <div className="dark:bg-[#111111]">
         <div className='max-w-6xl mx-auto px-4 mb-1 dark:bg-[#111111]'>

          {/* {MobileFilter} */}

          {
            data?.length > 0 ? (
              <>
                  <div className='flex gap-8 dark:bg-[#111111]'>
                       <FilterSection
        search={search}
        setSearch={setSearch}
        brand={brand}
        setBrand={setBrand}
        category={category}
        setCategory={setCategory}
        handleCategory={handleCategory}
        handleBrand={handleBrand}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        
        />
        {
          uniqueData?.length > 0 ? (
            <div className="flex flex-col justify-center items-center">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mt-10">
                {uniqueData?.slice((page - 1) * 8, page * 8).map((product, index) => {
                  return <ProductCard key={index} product={product} />;
                })
                }
              </div>
              <Pagination page={page} pageHandler={pageHandler} dynamicPage={dynamicPage} />
            </div>
          ) : (
            <div className='flex justify-center items-center md:h-[600px] md:w-[900px] mt-10'>
                           <Lottie animationData={notfound} classID='w-[500px]'/>
                    </div>
          )
        }

                  </div>
              
              </>
            ):(
             <div className="flex justify-center items-center h-screen">
              
               <div className='flex justify-center items-center md:h-[500px] md:w-[700px] mt-10'>
                           <Lottie animationData={Animation} classID='w-[500px]'/>
                    </div>
              {/* <p className="text-gray-500 text-lg">Loading products...</p> */}
            </div>
            )
          }
         </div>



          </div>
  );
}

export default Products;
