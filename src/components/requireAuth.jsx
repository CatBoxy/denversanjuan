import React from 'react';
import { useAuthState } from '../context/authProvider';
import { Navigate, useLocation } from 'react-router-dom';

export default function RequireAuth({ children }) {
  const { isLoggedin } = useAuthState();
  
  const location = useLocation();

  // Redirect to /login page, but save the current location they were trying to go to when they where redirected
  return isLoggedin ? children : <Navigate to="/login" state={{ from: location }} replace/>;
}
