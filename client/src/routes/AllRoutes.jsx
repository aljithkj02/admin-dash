import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom';
import { Login, Signup, Dashboard, AdminSignup } from '../pages'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/login" element={ <Login /> } />
        <Route path="/signup" element={ <Signup /> } />
        <Route path="/admin-signup" element={ <AdminSignup /> } />
        <Route path="/dashboard" element={ <Dashboard /> } />
    </Routes>
  )
}

export default AllRoutes
