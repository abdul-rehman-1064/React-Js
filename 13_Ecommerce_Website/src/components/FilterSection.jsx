import React from 'react'
import { apiData } from '../context/DataContext'

function FilterSection({search,setSearch,brand,setBrand,category,setCategory,handleCategory , handleBrand,priceRange ,setPriceRange}) {
    const {categoryData,brandData} = apiData()
  return (
    <div className='bg-gray-100 mt-10 p-4 rounded-md h-max hidden md:block ml-8'>
       <input type="text" 
            placeholder='Search..'  
            value={search}
            onChange={(e)=>setSearch(e.target.value)} 
            className='bg-white p-2 rounded-md border-gray-400 border-2' 
            />

             <h1 className='mt-5 font-semibold text-xl'>CATEGORY</h1>
              <div className='flex flex-col gap-2 mt-3'>

                {
                  categoryData?.map((product,index)=>{
                    return <div key={index} className='flex gap-2'>
                       <input type="checkbox" name={product} checked={category === product} value={product} onChange={handleCategory}/>
                            <button className='cursor-pointer uppercase'>{product}</button>
                      
                       </div>
                  })
                }
              </div>

              <h1 className='mt-5 font-semibold text-xl mb-3'>BRAND</h1>
             <select name="" id="" 
             className='bg-white w-full p-2 border-gray-200 border-2 rounded-md ' 
             value={brand}
             onChange={handleBrand}
             >
                {
                    brandData?.map((item, index)=>{
                        return <option key={index} value={item}>{item.toUpperCase()}</option>
                    })
                }
             </select>

              <h1 className='mt-5 font-semibold text-xl mb-3'>PRICE RANGE</h1>
             <div className='flex flex-col gap-2'>
                <label htmlFor="">Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
                <input type="range" min="0" max="5000" name="" id="" value={priceRange[1]} onChange={(e)=>setPriceRange([priceRange[0], Number(e.target.value)])} className='transition-all'/>
             </div>
              <button className='bg-[#e6b054] ml-12 text-white rounded-md px-3 py-1 mt-5 cursor-pointer' onClick={()=>{
                setSearch(''),setBrand("ALL"),setCategory("ALL"),setPriceRange([0,5000])
              }}>
                Reset Filter
              </button>
      </div>
  )
}

export default FilterSection