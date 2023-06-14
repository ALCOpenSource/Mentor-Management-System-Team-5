import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { isAuthenticated, logout } from "@/utils/auth";
import { refreshAccessToken } from "@/redux/Auth/AuthSlice";
import { refreshTokenInterval } from "@/utils/auth";

function AuthenticatedRoutes({ children, roles }) {
  const location = useLocation();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const authError = useSelector((state) => state?.auth?.error?.failed) || false;
  console.log(authError, "auth error");

  useEffect(() => {
    const refreshInterval = setInterval(() => {
      dispatch(refreshAccessToken());
    }, refreshTokenInterval());

    if (authError) {
      clearInterval(refreshInterval);
      logout();
      navigate("/login");
    }
    return () => {
      clearInterval(refreshInterval);
    };
  }, [authError, dispatch, navigate]);

  const checkIsAuthenticated = isAuthenticated();
  const userDetails = JSON.parse(localStorage.getItem("userData"));

  const userHasRequiredRole = !!(
    userDetails && roles.includes(userDetails?.roles && userDetails?.roles.toString().toLowerCase())
  );

  if (!checkIsAuthenticated) {
    toast.error("You must be logged in to access this page");
    return <Navigate to='/' state={{ from: location }} />;
  }

  if (checkIsAuthenticated && !userHasRequiredRole) {
    toast.error("You are not authorized to access this page");
    return <Navigate to='/login' state={{ from: location }} />;
  }

  return children;
}

AuthenticatedRoutes.propTypes = {
  children: PropTypes.node,
  roles: PropTypes.arrayOf(PropTypes.string)
};

export default AuthenticatedRoutes;
