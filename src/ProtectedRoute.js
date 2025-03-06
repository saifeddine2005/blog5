import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ children }) => {
  const token = Cookies.get('token');
  return token ? children : <Navigate to="/auth/?mode=login" />;
};

export default ProtectedRoute;
