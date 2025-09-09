import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import { RequireAuthProps } from 'types';

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const { authed } = useAuth();
  const location = useLocation();

  return authed ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" replace state={{ from: location.pathname }} />
  );
};

export default RequireAuth;
