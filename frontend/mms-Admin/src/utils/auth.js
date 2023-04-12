import jwtDecode from "jwt-decode";
import { setAuthToken } from "./setAuthToken";
export const isAuthenticated = () => {
  const token = getToken();
  return !!token;
};

export const getToken = () => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    return JSON.parse(token);
  }
  return null;
};

export const setToken = (token) => {
  if (token) {
    localStorage.setItem("accessToken", JSON.stringify(token));
  } else {
    localStorage.removeItem("accessToken");
  }
};

export const setRefreshToken = (token) => {
  if (token) {
    localStorage.setItem("refreshToken", JSON.stringify(token));
  } else {
    localStorage.removeItem("refreshToken");
  }
};

export const isExpired = (token) => {
  if (token) {
    const decoded = decodeToken(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp < currentTime;
  }
};

export const decodeToken = (token) => {
  let decoded = {};
  if (token) {
    decoded = jwtDecode(token);
  }
  return decoded;
};

export const login = (token) => {
  token && setToken(token);
};

export const logout = () => {
  localStorage.clear();
  setAuthToken("");
  window.location.href = "/login";
};

export const checkAuth = () => {
  if (localStorage.accessToken) {
    setAuthToken(localStorage.accessToken);
    const decoded = jwtDecode(localStorage.accessToken);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      logout();
    }
  }
};
