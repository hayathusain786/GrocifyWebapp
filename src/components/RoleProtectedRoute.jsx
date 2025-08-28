import React from 'react'
import Cookies from "js-cookie";
import { Navigate, Outlet } from 'react-router-dom';

const RoleProtectedRoute = ({allowedRoles}) => {
  const role=Cookies.get("role");
  if(role=="" || role==null){
    return <Navigate to="/admin/login"/>
  }
  if(!allowedRoles.includes(role)){
    return <Navigate to="/unauthorize"/>
  }
  return <Outlet/>;
}

export default RoleProtectedRoute