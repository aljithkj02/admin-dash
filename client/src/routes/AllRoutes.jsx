import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom';
import { Login, Signup, Dashboard } from '../pages'

const AllRoutes = () => {
  return (
    <Routes>
        {/* <Route path="/" element={  } >
            <Route path="" element={ <Home /> }/>
            <Route path="profile/:id" element={ <Profile /> }/>
        </Route> */}
        <Route path="/login" element={ <Login /> } />
        <Route path="/signup" element={ <Signup /> } />
        <Route path="/dashboard/:role" element={ <Dashboard /> } />
    </Routes>
  )
}

export default AllRoutes
