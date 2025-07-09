import { useParams } from "react-router-dom";
import React from "react";
import SingleProductHeader from "../components/singleProductHeader.jsx";
import { IoCartOutline } from 'react-icons/io5';
import Animation from '../assets/Animation - 1750746128058.json'
import Lottie from 'lottie-react';
import { useCart } from "../context/CartContext.jsx";

function SingleProduct() {
  const [singleProduct, setSingleProduct] = React.useState(null);
  const { addToCart } = useCart();
  const { id } = useParams();

  const product = async () => {
    const res = await fetch(`https://fakestoreapi.in/api/products/${id}`);
    const data = await res.json();
    const uniqueProduct = data.product;
    setSingleProduct(uniqueProduct);
  };

  const originalPrice = Math.round(singleProduct?.price + (singleProduct?.price * singleProduct?.discount) / 100);

  React.useEffect(() => {
    product();
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="dark:bg-[#111111] bg-gray-100">
      {singleProduct ? (
        <div className="max-w-6xl mx-auto px-4 py-8 text-black dark:text-white">
          <SingleProductHeader title={singleProduct.title} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Image */}
            <div className="w-full flex justify-center items-center">
              <img
                src={singleProduct.image}
                alt={singleProduct.title}
                className="w-full max-w-[400px] h-auto rounded-lg object-contain"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col gap-4 sm:gap-6">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">{singleProduct.title}</h1>

              <div className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                <span className="text-[#efab36ee]">{singleProduct.category.toUpperCase()}</span> /{" "}
                <span className="text-[#e6b054ee]">{singleProduct.brand.toUpperCase()}</span> /{" "}
                <span className="text-[#e6b054ee]">{singleProduct.model.toUpperCase()}</span>
              </div>

              <div className="text-lg sm:text-xl font-bold text-[#e6b054ee] flex flex-col sm:flex-row sm:items-center gap-2">
                {singleProduct.price}{" "}
                <span className="line-through text-gray-500 text-base">{originalPrice}</span>
                <span className="bg-[#e6b054ee] text-white px-4 py-1 rounded-full text-sm sm:text-base">
                  {singleProduct.discount}% OFF
                </span>
              </div>

              <p className="text-gray-600 dark:text-white text-sm sm:text-base">
                {singleProduct.description}
              </p>

              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => addToCart(singleProduct)}
                  className="px-6 flex gap-2 py-2 text-base bg-[#e6b054ee] text-white rounded-md hover:bg-[#efc766]"
                >
                  <IoCartOutline className="mt-1" /> Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Loading state with Lottie animation
        <div className="flex justify-center items-center h-screen px-4">
          <div className="w-full max-w-[500px]">
            <Lottie animationData={Animation} />
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleProduct;
