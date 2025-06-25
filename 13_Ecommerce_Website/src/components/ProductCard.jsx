import React from 'react'
import {  useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext';

function ProductCard({product}) {
  const navigate = useNavigate();
  const { addToCart ,cart } = useCart();
  console.log(cart);
  
  return (
    <>
    
    
      <div className='border-2 hover:bg-[#e6b054ee] relative border-[#e6b054] bg-[#111111] text-white rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition-all p-2 h-max mb-12 '>
        <img src={product.image} className='mt-[-42px] rounded-[50%]' onClick={()=>navigate(`/products/${product.id}`)} alt="" />
        <h1 className='line-clamp-2 p-1 font-semibold text-center'>{product.description}</h1>
        <p className='text-center font-bold font-sans'>{product.price}$</p>
        <button onClick={()=>addToCart(product)} className="border-2 border-[#292827] text-black ml-8 mt-3 mb-1 bg-[#ecb04a] px-4 py-2 rounded-md hover:bg-white hover:text-black transition font-semibold">
                   Add To Cart
                  </button>

      </div>
    
    </>
  )
}

export default ProductCard