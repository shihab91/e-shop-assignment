import React from "react";
import { Spinner } from "react-rainbow-components";
import useAuth from "../../../hooks/useAuth";
import { useLocation, Navigate } from "react-router";
const PrivateRoute = ({ children, ...rest }) => {
  const location = useLocation();
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <Spinner size="large" />;
  }
  if (user?.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
