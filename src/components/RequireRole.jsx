import React from 'react'
import Cookies from "js-cookie";
import { Navigate, Outlet } from 'react-router-dom';

const RequireRole = ({role}) => {
  const currentRole = Cookies.get("role");

  if (currentRole !== role) {
    return <Navigate to="/unauthorize" />;
  }

  return <Outlet />;
}

export default RequireRole