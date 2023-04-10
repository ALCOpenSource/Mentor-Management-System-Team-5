import jwtDecode from "jwt-decode";
import { setAuthToken } from "./setAuthToken";

export const isAuthenticated = (): boolean => {
  const token = getToken();
  return !!token;
};

export const getToken = (): string | null => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    return JSON.parse(token);
  }
  return null;
};

export const setToken = (token: string | null) => {
  if (token) {
    localStorage.setItem("accessToken", JSON.stringify(token));
  } else {
    localStorage.removeItem("accessToken");
  }
};

export const setRefreshToken = (token: string | null): void => {
  if (token) {
    localStorage.setItem("refreshToken", JSON.stringify(token));
  } else {
    localStorage.removeItem("refreshToken");
  }
};

export const isExpired = (token: string): boolean => {
  let decoded: any = {};
  decoded = decodeToken(token);
  const milliseconds = decoded.exp * 1000;
  return Date.now() > milliseconds;
};

const clearStorage = (): void => {
  localStorage.clear();
};

export const decodeToken = (token: string | null) => {
  let decoded = {};
  if(token){
    decoded = jwtDecode(token);
    return decoded;
  }
};

export const login = (token: string): void => {
  token && setToken(token);
};

export const logout = (): void => {
  clearStorage();
};

export const checkAuth = (store: any): void => {
  if (localStorage.accessToken) {
    setAuthToken(localStorage.accessToken);
    const decoded: any = jwtDecode(localStorage.accessToken);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = "/";
    }
  }
};
