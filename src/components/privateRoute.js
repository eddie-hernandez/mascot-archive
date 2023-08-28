import React from 'react'
import { Outlet, Navigate } from 'react-router-dom' // Import Routes
import { useSelector } from 'react-redux'

export default function PrivateRoute() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  return isAuthenticated ? <Outlet /> : <Navigate to="/admin/login" />
}
