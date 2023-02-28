import React from 'react'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
  const { isAuth } = useSelector( data => data );
  if(isAuth) return children;
  return <Navigate to='/login' />
}

export default PrivateRoute
