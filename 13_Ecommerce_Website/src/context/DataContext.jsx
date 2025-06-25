import React, { useEffect } from 'react'
import axios from 'axios'
import { useContext,createContext,useState } from 'react'


export const DataContext = createContext(null);

export const DataProvider = ({children})=>{
    const [data,setData] = useState()

    const getallProducts = async ()=>{
        try {
            const response = await axios.get('https://fakestoreapi.in/api/products?limit=150');
            const data = response.data.products;
            // console.log(data);
            setData(data);
            
        } catch (error) {
            console.error("Error fetching products:", error);
            
        }
    }

    const uniqueProductData = (data,property)=>{
        let newData = data?.map((item)=>{
            return item[property]
        })  
        newData = ["ALL",...new Set(newData)]
        return newData;
    }

    const categoryData = uniqueProductData(data,"category");
    const brandData = uniqueProductData(data,"brand");

    return(
        <DataContext.Provider value={{data,setData,getallProducts,categoryData,brandData}}>
            {children}
        </DataContext.Provider>
    )
}

export const apiData = ()=> useContext(DataContext)