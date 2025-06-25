import { useParams } from "react-router-dom";
import React from "react";
import SingleProductHeader from "../components/singleProductHeader.jsx";
import { IoCartOutline } from 'react-icons/io5';
import Animation from '../assets/Animation - 1750746128058.json'
import Lottie from 'lottie-react'
import { useCart } from "../context/CartContext.jsx";

function SingleProduct() {
  const [singleProduct, setSingleProduct] = React.useState(null);
  const {addToCart} = useCart();
  const params = useParams();
  const { id } = params;

  const product = async () => {
    {
      const res = await fetch(`https://fakestoreapi.in/api/products/${id}`);
      const data = await res.json();
      const uniqueProduct = data.product;
      setSingleProduct(uniqueProduct);
      // console.log(uniqueProduct);
    }
  };
  // console.log(singleProduct);

  const originalPrice = Math.round(singleProduct?.price +(singleProduct?.price * singleProduct?.discount)/100);

  React.useEffect(() => {
    product();

    window.scrollTo(0, 0);
  }, [id]);
  return (
    <div >
        <div className="dark:bg-[#111111] bg-gray-100">
      {singleProduct ? (
        <div className="max-w-6xl mx-auto px-4 mb-1 text-black dark:bg-[#111111] dark:text-white">
          <SingleProductHeader title={singleProduct.title} />
           <div className='max-w-6xl mx-auto md:p-6 grid grid-cols-1 md:grid-cols-2 gap-10'>
             <div className='w-full'>
                <img
                    src={singleProduct.image}
                    alt={singleProduct.title}
                    className="w-full h-[400px] rounded-lg"
                />
                </div>
                <div className='flex flex-col gap-6'>
                    <h1  className='md:text-3xl text-xl font-bold dark:text-white text-gray-800'>{singleProduct.title}</h1>
                    <div className='text-gray-700'><span className="text-[#efab36ee]">{singleProduct.category.toUpperCase()}</span>/
                    <span className="text-[#e6b054ee]">{singleProduct.brand.toUpperCase()}</span>/ <span className="text-[#e6b054ee]">{singleProduct.model.toUpperCase()}</span>
                    </div>
                    <p className='text-xl text-[#e6b054ee] font-bold'>{singleProduct.price}
                        <span className="line-through mx-3 text-gray-700">{originalPrice}</span>
                        <span className="bg-[#e6b054ee] text-white px-4 py-2 rounded-full">{singleProduct.discount} % Discount</span>
                    </p>
                     <p className='text-gray-600 dark:text-white'>{singleProduct.description}</p>
                    {/* <div className='flex items-center gap-4'>
                             <label htmlFor="" className='text-sm dark:text-white font-medium text-gray-700'>Quantity:</label>
                             <input type="number" min={1} value={singleProduct.quantity} className='w-20 border border-gray-300 rounded-lg dark:text-black px-3 py-1 focus:outline-none focus:ring-2 foucs:ring-red-500' />
                    </div> */}
                    <div className='flex gap-4 mt-4'>
                        <button onClick={()=> addToCart(singleProduct)} className='px-6 flex gap-2 py-2 text-lg bg-[#e6b054ee] text-white rounded-md'><IoCartOutline className="mt-1"/>Add To Cart</button>
                        </div>
                </div>
            </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
                      
                       <div className='flex justify-center items-center md:h-[500px] md:w-[700px] mt-10'>
                                   <Lottie animationData={Animation} classID='w-[500px]'/>
                            </div>
                      {/* <p className="text-gray-500 text-lg">Loading products...</p> */}
                    </div>
      )}
    </div>
    </div>
  );
}

export default SingleProduct;
