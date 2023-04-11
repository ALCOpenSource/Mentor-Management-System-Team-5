import { createSlice } from "@reduxjs/toolkit";
import { loginApi, forgotPasswordApi, resetPasswordApi } from "../api/auth";
import { toast } from "react-toastify";

import { setToken } from "@/utils/auth";

import {
  loginLoading,
  forgotPasswordLoading,
  resetPasswordLoading
} from "@/redux/Loading/LoadingSlice";


const initialState = {
  error: "",
  loginData: {},
  forgotPasswordData: {},
  resetPasswordData: {}
};


export const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    hasError: (state, action) => {
      state.error = action.payload;
    },

    loginAction: (state, action) => {
      state.loginData = action.payload;
    },

    forgotPasswordAction: (state, action) => {
      state.forgotPasswordData = action.payload;
    },

    resetPasswordAction: (state, action) => {
      state.resetPasswordData = action.payload;
    }
  }
});
export default authSlice.reducer;

// Actions
const { hasError, loginAction, forgotPasswordAction, resetPasswordAction } = authSlice.actions;

export const login = (data) => async (dispatch) => {
  dispatch(loginLoading(true));

  try {
    const response = await loginApi(data);
    setToken(response.data.token);
    localStorage.setItem("loginData", JSON.stringify(response?.data));
    toast.success(response?.data?.message);
    dispatch(loginLoading(false));
    return dispatch(loginAction(response?.data));
  } catch (e) {
    if (e instanceof Error) {
      toast.error(e?.message);
      dispatch(loginLoading(false));
      return dispatch(hasError(e?.message));
    }
  }

};
export const forgotPassword = (data) => async (dispatch) => {
  dispatch(forgotPasswordLoading(true));

  try {
    const response = await forgotPasswordApi(data);
    toast.success(response.data.message);
    dispatch(forgotPasswordLoading(false));
    return dispatch(forgotPasswordAction(response?.data));
  } catch (e) {
    if (e instanceof Error) {
      toast.error(e?.message);
      dispatch(loginLoading(false));
      return dispatch(hasError(e?.message));
    }
  }
};

export const resetPassword = (data) => async (dispatch) => {
  dispatch(resetPasswordLoading(true));
  try {
    const response = await resetPasswordApi(data);
    toast.success(response.data.message);
    dispatch(resetPasswordLoading(false));
    return dispatch(resetPasswordAction(response?.data));
  } catch (e) {
    if (e instanceof Error) {
      toast.error(e?.message);
      dispatch(loginLoading(false));
      return dispatch(hasError(e?.message));
    }
  }
};

// export const logout = () => () => {
//   try {
//     localStorage.clear();
//     setAuthToken("");
//     window.location.href = "/login";
//   } catch (e) {
//     toast.error(e.response.data.message);
//   }
// };
