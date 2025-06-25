import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import ProductListView from '../components/ProductListView'

const CategoryProduct = () => {
  const [searchData, setSearchData] = useState([])
  const params = useParams()
  const category = params.category
  const navigate = useNavigate()

  const getFilterData = async ()=>{
    try {
      const res = await axios.get(`https://fakestoreapi.in/api/products/category?type=${category}`)
      const data = res.data.products
      setSearchData(data)

    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(()=>{
    getFilterData()
    window.scrollTo(0,0)
  },[])
  
  return (
    <div className='bg-white dark:bg-[#111111] dark:text-white min-h-screen'>
      {
        searchData.length > 0 ? (
          <div className='max-w-6xl mx-auto mt-10 mb-10 px-4 dark:bg-[#111111]'>
             <button onClick={()=>navigate('/')} className='bg-gray-800 mb-5 text-white px-3 py-1 rounded-md cursor-pointer flex gap-1 items-center'><ChevronLeft/> Back</button>
             {
              searchData.map((product, index) =>{
                return <ProductListView key={index} product={product}/>
              })
             }
          </div>
        ):(
          <div className='flex items-center justify-center h-[400px]'>
            <h1 className='text-2xl font-bold text-gray-700'>No Products Found in this Category</h1>
          </div>
        )
      }
    </div>
  )
}

export default CategoryProduct