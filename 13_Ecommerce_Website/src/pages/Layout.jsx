import React, { useEffect } from 'react'
import { Header ,Footer } from '../components'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
// import {ScrolltoTop} from 'react-scroll-to-top'
// import { useCart } from "./context/CartContext.jsx";

function Layout() {
  // const { cart ,setCart } = useCart();

  // useEffect(()=>{
  //   const storedCart = localStorage.getItem('cart')
  //   if(storedCart){
  //     setCartItem(JSON.parse(storedCart))
  //   }
  // },[])


  //  useEffect(() => {
  //   localStorage.setItem('cart', JSON.stringify(cart))
  // }, [cart])

  return (
   <>
   <Header />
    <Outlet />
     {/* <ScrolltoTop smooth /> */}
     <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
           
    <Footer />
    
   </>
  )
}

export default Layout