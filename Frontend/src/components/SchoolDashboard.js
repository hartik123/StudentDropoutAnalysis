import React from 'react'
import Navbar from './SchoolNavbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
const SchoolDashboard = () => {
  return (
    <div>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default SchoolDashboard