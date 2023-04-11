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

type DecodedToken = {
  email: string;
  name: string;
  id: string;
  iat: number;
  exp: number;
};
export const isExpired = (token: string) => {
  if(token){
    const decoded: DecodedToken = decodeToken(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp < currentTime;
  }
};

export const decodeToken = (token: string | null) => {
  let decoded: DecodedToken = {} as DecodedToken;
  if(token){
    decoded = jwtDecode(token);
  }
  return decoded;
};

export const login = (token: string): void => {
  token && setToken(token);
};

export const logout = (): void => {
  localStorage.clear();
  setAuthToken("");
  window.location.href = "/login";
};

export const checkAuth = (): void => {
  if (localStorage.accessToken) {
    setAuthToken(localStorage.accessToken);
    const decoded: DecodedToken = jwtDecode(localStorage.accessToken);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      logout();
    }
  }
};
