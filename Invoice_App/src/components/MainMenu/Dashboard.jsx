import React from 'react'
import SideBar from './SideBar'
import MainBox  from './MainBox'

function Dashboard() {
  return (

    <>
    <div className='m-0 p-0 flex bg-black'>
    <SideBar />
    <MainBox />
    </div>
    </>
  )
}

export default Dashboard