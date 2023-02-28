import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom';
import { Login, Signup, Dashboard, AdminSignup } from '../pages'
import PrivateRoute from './PrivateRoute';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <PrivateRoute> <Dashboard /> </PrivateRoute > } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/signup" element={ <Signup /> } />
        <Route path="/admin-signup" element={ <AdminSignup /> } />
    </Routes>
  )
}

export default AllRoutes
