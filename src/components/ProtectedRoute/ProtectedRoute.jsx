import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ element: Component, ...props }) {
  return (
    props.loggedIn ? <Component {...props} /> : <Navigate to="/" />
  )
}

export default ProtectedRoute;