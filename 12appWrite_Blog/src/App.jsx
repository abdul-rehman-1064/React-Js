import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import {login,logout} from './store/authSlice'
import {Header ,Footer} from './components'
import { Outlet } from 'react-router-dom'

function App() {

  const [loading,setloading] =useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=> setloading(false))
  },[])
  
  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between ">
      <div className="w-full block ">
        <Header />
        <main className='bg-[#0f0e0e] text-white min-h-52 p-8 mt-12 mb-12'>
          <Outlet />
        </main> 
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
