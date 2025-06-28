import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  if (!localStorage.getItem("token")) {
    // If no token, redirect to login
    return <Navigate to="/" replace />;
  } else {
    // If token exists, render the children components
    return children;
  }
};
export default PrivateRoute;
