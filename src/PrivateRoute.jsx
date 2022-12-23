import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthService from './common/auth/AuthService';

const PrivateRoute = ({ children }) => {
  const user = AuthService.getCurrentUser();

  return user ? children : <Navigate to='/' />;
};

export default PrivateRoute;
