import jwtDecode from "jwt-decode";
import { setAuthToken } from "./setAuthToken";

export const isAuthenticated = () => {
  const token = getToken();
  return !!token;
};

export const getToken = () => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    return JSON.parse(localStorage.getItem("accessToken"));
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
  try {
    const decoded = decodeToken(token);
    const milliseconds = decoded.exp * 1000;
    return Date.now() > milliseconds;
  } catch (err) {
    return true;
  }
};

const clearStorage = () => {
  localStorage.clear();
};

export const decodeToken = (token) => {
  let decoded = {};
  try {
    decoded = jwtDecode(token);
  } catch (error) {
    // todo
  }
  return decoded;
};

export const login = (token) => {
  setToken(token);
};

export const logout = () => {
  clearStorage();
};

export const checkAuth = (store) => {
  if (localStorage.accessToken) {
    setAuthToken(localStorage.accessToken);
    const decoded = jwtDecode(localStorage.accessToken);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = "/";
    }
  }
};
