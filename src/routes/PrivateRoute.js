import { Navigate } from 'react-router-dom';
import React, { useContext } from 'react';
import AuthContext from '../common/auth/AuthHeader';

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  return !user ? <Navigate to='/' /> : children;
};
export default PrivateRoute;
