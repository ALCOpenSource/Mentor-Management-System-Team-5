import axios from "axios";

export const setAuthToken = (token: string) => {
  if (token) {
    // Apply to every requests
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    // Delete the Auth Header
    delete axios.defaults.headers.common.Authorization;
  }
};
