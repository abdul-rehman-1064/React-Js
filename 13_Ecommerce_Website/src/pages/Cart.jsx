import React from 'react'
import { useCart } from '../context/CartContext'
import { FaRegTrashAlt } from 'react-icons/fa';
import { LuNotebookText } from 'react-icons/lu';
import { MdDeliveryDining } from 'react-icons/md';
import { GiShoppingBag } from 'react-icons/gi';
import { useUser } from '@clerk/clerk-react';
import { useEffect ,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Cart = () => {
  const [address, setAddress] = useState("Detcting Location...");
  const { cart,deleteFromCart ,updateQuantity } = useCart()
  const  { user } = useUser()
  const navigate = useNavigate()
  console.log(user);

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

      try {
        const response = await axios.get(url);
        if (response.data) {
          setAddress(response.data.address);
        } else {
          setAddress("Location not found");
        }
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    });
  };

  console.log(address);
  

  // useEffect(() => {
  //   getLocation();
  // }, []);
  

  // const totalPrice = cart?.reduce((acc, item) => acc + item.price, 0);
  // const totalPrice = cart?.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalPrice = cart
  .filter(item => item !== null)
  .reduce((acc, item) => acc + item.price * item.quantity, 0);

  
  return (
    <div className='bg-white dark:bg-[#111111] dark:text-white mt-[-40px] min-h-screen'>
    <div className='mt-10 max-w-6xl mx-auto mb-5 px-4 md:px-0 '>
      {
        cart.length > 0 ? <div>
          <h1 className='font-bold text-2xl pt-12 '>My Cart ({cart.length})</h1>
          <div>
            <div className='mt-10'>
              {cart.map((item, index) => {
                return <div key={index} className='bg-gray-100 dark:bg-[#e6b054ee] dark:text-black p-5 rounded-md flex items-center justify-between mt-3 w-full'>
                  <div className='flex items-center gap-4'>
                    <img src={item?.image} alt={item?.title}  onClick={()=>navigate(`/products/${item.id}`)} className='w-20 cursor-pointer h-20 rounded-md' />
                    <div>
                      <h1 className='md:w-[300px] line-clamp-2 '>{item?.title}</h1>
                      <p className='text-[#ecaa3a] font-semibold text-lg'>${item?.price}</p>
                    </div>
                  </div>
                  <div className='bg-[#6c5022] text-white flex gap-4 p-2 rounded-md font-bold text-xl'>
                    <button  className='cursor-pointer' onClick={()=>updateQuantity(cart , item.id ,"decrement")}>-</button>
                    <span>{item?.quantity}</span>
                    <button className='cursor-pointer' onClick={()=>updateQuantity(cart , item.id ,"increment")}>+</button>
                  </div>
                  <span className='hover:bg-white/60 transition-all rounded-full p-3 hover:shadow-2xl'>
                    <FaRegTrashAlt className='text-[#6c5022] text-2xl cursor-pointer' onClick={()=>deleteFromCart(item?.id)} />
                  </span>
                </div>
              })}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-20 '>
              <div className='bg-gray-100 dark:bg-[#e6b054ee] dark:text-black rounded-md p-7 mt-4 space-y-2'>
                <h1 className='text-gray-800 font-bold text-xl'>Delivery Info</h1>
                <div className='flex flex-col space-y-1'>
                  <label htmlFor="">Full Name</label>
                  <input type="text" value={user?.fullName} placeholder='Enter your name' className='p-2 rounded-md' />
                </div>
                <div className='flex flex-col space-y-1'>
                  <label htmlFor="">Address</label>
                  <input type="text" placeholder='Enter your address' value={address?.city} className='p-2 rounded-md' />
                </div>
                <div className='flex w-full gap-5'>
                  <div className='flex flex-col space-y-1 w-full'>
                    <label htmlFor="">State</label>
                    <input type="text" value={address?.state} placeholder='Enter your state' className='p-2 rounded-md w-full' />
                  </div>
                  <div className='flex flex-col space-y-1 w-full'>
                    <label htmlFor="">PostCode</label>
                    <input type="text" value={address?.postcode} placeholder='Enter your postcode' className='p-2 rounded-md w-full' />
                  </div>
                </div>
                <div className='flex w-full gap-5'>
                  <div className='flex flex-col space-y-1 w-full'>
                    <label htmlFor="">Country</label>
                    <input type="text" placeholder='Enter your country' value={address?.country} className='p-2 rounded-md w-full' />
                  </div>
                  <div className='flex flex-col space-y-1 w-full'>
                    <label htmlFor="">Phone No</label>
                    <input type="text" placeholder='Enter your Number' className='p-2 rounded-md w-full' />
                  </div>
                </div>
                <button className='bg-[#6c5022] text-white px-3 py-1 rounded-md mt-3 cursor-pointer'>Submit</button>
                <div className='flex items-center justify-center w-full dark:text-white text-gray-700'>
                  ---------OR-----------
                </div>
                <div className='flex justify-center'>
                  <button onClick={getLocation} className='bg-[#6c5022] text-white px-3 py-2 rounded-md'>Detect Location</button>
                </div>
              </div>
              <div className='bg-white dark:bg-[#e6b054ee] dark:text-white border border-gray-100 shadow-xl rounded-md p-7 mt-4 space-y-2 h-max'>
                <h1 className='text-gray-800 font-bold text-xl'>Bill details</h1>
                <div className='flex justify-between items-center'>
                  <h1 className='flex gap-1 items-center text-gray-700'><span><LuNotebookText /></span>Items total</h1>
                  <p className='font-bold'>${totalPrice}</p>
                </div>
                <div className='flex justify-between items-center'>
                  <h1 className='flex gap-1 items-center text-gray-700'><span><MdDeliveryDining /></span>Delivery Charge</h1>
                  <p className='text-[#e6b054ee] dark:text-[#6c5022] font-semibold'><span className='text-gray-600 line-through'>$25</span> FREE</p>
                </div>
                <div className='flex justify-between items-center'>
                  <h1 className='flex gap-1 items-center text-gray-700'><span><GiShoppingBag /></span>Handling Charge</h1>
                  <p className='text-[#e6b054ee] dark:text-[#6c5022] font-semibold'>$5</p>
                </div>
                <hr  className='text-gray-200 mt-2'/>
                <div className='flex justify-between items-center'>
                  <h1 className='font-semibold text-lg'>Grand total</h1>
                  <p className='font-semibold text-lg'>${totalPrice+5}</p>
                </div>
                <div>
                  <h1 className='font-semibold text-gray-700 mb-3 mt-7'>Apply Promo Code</h1>
                  <div className='flex gap-3'>
                    <input type="text" placeholder='Enter code' className='p-2 rounded-md w-full'/>
                    <button className='bg-white text-black border border-gray-200 px-4 cursor-pointer py-1 rounded-md'>Apply</button>
                  </div>
                </div>
                <button className='bg-[#6c5022] text-white px-3 py-2 rounded-md w-full cursor-pointer mt-3'>Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </div> : <div className='flex flex-col gap-3 justify-center items-center h-[600px]'>
          <h1 className='text-[#e6b054ee] font-bold text-5xl text-muted'>Oh no! Your cart is empty</h1>
          {/* <img src={emptyCart} alt="" className='w-[400px]'/> */}
          <button onClick={()=>navigate('/products')} className='bg-[#6c5022] text-white px-3 py-2 rounded-md cursor-pointer' >Continue Shopping</button>
        </div>
      }
    </div>
     </div>
  )
}

export default Cart