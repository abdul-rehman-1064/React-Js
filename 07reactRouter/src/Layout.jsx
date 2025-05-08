import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
        <Header />
        <Outlet />
        {/* outlet use for changing things or components in our case header and footer will be same and inner structure of outlets will change */}
        <Footer />

        </>
    )
}

export default Layout
