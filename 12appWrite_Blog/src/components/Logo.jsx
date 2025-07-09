import React from 'react'
import logo from '../assets/logo.jpeg'

function Logo({width = '70px'}) {
  return (
   <img src={logo} width={50} className='rounded-full' alt="" />
  )
}

export default Logo