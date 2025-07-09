import React from 'react'
import logo from '../assets/logo.jpeg'

function Logo({width = '70px'}) {
  return (
   <img src={logo} width={width} className='rounded-full' alt="" />
  )
}

export default Logo