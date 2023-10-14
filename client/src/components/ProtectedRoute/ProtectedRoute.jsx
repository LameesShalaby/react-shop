import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, redirectTo, ...props }) => {
  // If the user is authenticated, render the protected route
  if (isAuthenticated) {
    return <Route {...props} />;
  }

  // If the user is not authenticated, redirect to the specified route
  return <Navigate to={redirectTo} replace />;
};

export default ProtectedRoute;
