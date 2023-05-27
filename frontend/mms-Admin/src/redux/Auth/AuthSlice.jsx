import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  loginApi,
  forgotPasswordApi,
  resetPasswordApi,
  refreshAccessTokenApi,
  signUpApi,
  confirmEmailApi
} from "../api/auth";

import { setToken, setRefreshToken, getToken, getRefreshToken } from "@/utils/auth";

import {
  loginLoading,
  forgotPasswordLoading,
  resetPasswordLoading,
  signUpLoading,
  confirmEmailLoading
} from "@/redux/Loading/LoadingSlice";
import { getProfile } from "@/redux/Settings/SettingsSlice";

const initialState = {
  error: false,
  loginData: {},
  forgotPasswordData: {},
  resetPasswordData: {},
  refreshAccessTokenData: {},
  signUpData: {},
  confirmEmailData: {}
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
    },

    refreshAccessTokenAction: (state, action) => {
      state.refreshAccessTokenData = action.payload;
    },

    signUpAction: (state, action) => {
      state.signUpData = action.payload;
    },

    confirmEmailAction: (state, action) => {
      state.confirmEmailData = action.payload;
    }
  }
});
export default authSlice.reducer;

// Actions
const {
  hasError,
  loginAction,
  forgotPasswordAction,
  resetPasswordAction,
  refreshAccessTokenAction,
  signUpAction,
  confirmEmailAction
} = authSlice.actions;

export const login = (data) => async (dispatch) => {
  dispatch(loginLoading(true));

  try {
    const response = await loginApi(data);
    setToken(response?.data?.data?.token);
    setRefreshToken(response?.data?.data?.refreshToken);
    localStorage.setItem("userData", JSON.stringify(response?.data?.data));
    toast.success(response?.data?.message);
    dispatch(loginLoading(false));
    dispatch(loginAction(response?.data?.data));
    dispatch(getProfile());
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(loginLoading(false));
    dispatch(hasError(e?.response?.data));
    return { success: false };
  }
};
export const forgotPassword = (data) => async (dispatch) => {
  dispatch(forgotPasswordLoading(true));

  try {
    const response = await forgotPasswordApi(data);
    toast.success(response?.data?.data?.message);
    dispatch(forgotPasswordLoading(false));
    dispatch(forgotPasswordAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message || e?.response?.data);
    dispatch(forgotPasswordLoading(false));
    dispatch(hasError(e?.response?.data));
    return { success: false };
  }
};

export const resetPassword = (data) => async (dispatch) => {
  dispatch(resetPasswordLoading(true));
  try {
    const response = await resetPasswordApi(data);
    dispatch(resetPasswordLoading(false));
    dispatch(resetPasswordAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(hasError(e?.response?.data));
    dispatch(resetPasswordLoading(false));
    return { success: false };
  }
};

export const refreshAccessToken = () => async (dispatch) => {
  const refreshToken = getRefreshToken();
  const token = getToken();
  try {
    const response = await refreshAccessTokenApi({ refreshToken: refreshToken, accessToken: token });
    setToken(response?.data?.data?.accessToken);
    setRefreshToken(response?.data?.data?.refreshToken);
    dispatch(refreshAccessTokenAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    dispatch(hasError({ failed: true }));
    return { failed: true };
  }
};

export const signUp = (data) => async (dispatch) => {
  dispatch(signUpLoading(true));
  try {
    const response = await signUpApi(data);
    dispatch(signUpLoading(false));
    dispatch(signUpAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message || e?.response?.data);
    dispatch(hasError(e?.response?.data));
    dispatch(signUpLoading(false));
    return { success: false };
  }
};

export const confirmEmail = (data) => async (dispatch) => {
  dispatch(confirmEmailLoading(true));
  try {
    const response = await confirmEmailApi(data);
    toast.success(response?.data?.message);
    dispatch(confirmEmailLoading(false));
    dispatch(confirmEmailAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(hasError(e?.response?.data));
    dispatch(confirmEmailLoading(false));
    return { success: false };
  }
};
