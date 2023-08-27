import React from 'react'
import { Route, Navigate } from 'react-router-dom'

export function PrivateRoute({ element: Element, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      element={
        authenticated ? (
          <Element />
        ) : (
          <Navigate to="/admin/login" state={{ from: rest.location }} />
        )
      }
    />
  )
}
