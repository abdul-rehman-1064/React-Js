import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import ProductListView from '../components/ProductListView';

const CategoryProduct = () => {
  const [searchData, setSearchData] = useState([]);
  const { category } = useParams();
  const navigate = useNavigate();

  const getFilterData = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.in/api/products/category?type=${category}`);
      const data = res.data.products;
      setSearchData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFilterData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white dark:bg-[#111111] dark:text-white min-h-screen">
      {searchData.length > 0 ? (
        <div className="max-w-6xl mx-auto py-6 sm:py-10 px-3 sm:px-4">
          <button
            onClick={() => navigate('/')}
            className="bg-gray-800 text-white px-3 py-1 text-sm sm:text-base rounded-md cursor-pointer flex gap-1 items-center mb-6"
          >
            <ChevronLeft size={18} /> Back
          </button>

          <div className="space-y-6">
            {searchData.map((product, index) => (
              <ProductListView key={index} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-[400px] px-4 text-center">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-700 dark:text-white">
            No Products Found in this Category
          </h1>
        </div>
      )}
    </div>
  );
};

export default CategoryProduct;
