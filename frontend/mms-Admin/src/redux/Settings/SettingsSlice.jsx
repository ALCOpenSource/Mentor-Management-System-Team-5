import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { changePasswordApi, forgotPasswordApi, resetPasswordApi, refreshAccessTokenApi } from "../api/settings";

// import { setToken, setRefreshToken, getRefreshToken, logout } from "@/utils/settings";

import { changePasswordLoading, forgotPasswordLoading, resetPasswordLoading } from "@/redux/Loading/LoadingSlice";

const initialState = {
  error: false,
  changePasswordData: {},
  forgotPasswordData: {},
  resetPasswordData: {},
  refreshAccessTokenData: {}
};

export const settingsSlice = createSlice({
  name: "settings",

  initialState,

  reducers: {
    hasError: (state, action) => {
      state.error = action.payload;
    },

    changePasswordAction: (state, action) => {
      state.changePasswordData = action.payload;
    },

    forgotPasswordAction: (state, action) => {
      state.forgotPasswordData = action.payload;
    },

    resetPasswordAction: (state, action) => {
      state.resetPasswordData = action.payload;
    },

    refreshAccessTokenAction: (state, action) => {
      state.refreshAccessTokenData = action.payload;
    }
  }
});
export default settingsSlice.reducer;

// Actions
const { hasError, changePasswordAction, forgotPasswordAction, resetPasswordAction, refreshAccessTokenAction } =
  settingsSlice.actions;

export const changePassword = (data) => async (dispatch) => {
  dispatch(changePasswordLoading(true));

  try {
    const response = await changePasswordApi(data);
    toast.success(response?.data?.message);
    dispatch(changePasswordLoading(false));
    dispatch(changePasswordAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(changePasswordLoading(false));
    dispatch(hasError(e?.response?.data));
    return { success: false };
  }
};
export const forgotPassword = (data) => async (dispatch) => {
  dispatch(forgotPasswordLoading(true));

  try {
    const response = await forgotPasswordApi(data);
    console.log(response, "forgotPassword response");
    toast.success(response?.data?.data?.message);
    dispatch(forgotPasswordLoading(false));
    dispatch(forgotPasswordAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    console.log(e, "forgotPassword error");
    toast.error(e?.response?.data);
    dispatch(forgotPasswordLoading(false));
    dispatch(hasError(e?.response?.data));
    return { success: false };
  }
};

export const resetPassword = (data) => async (dispatch) => {
  dispatch(resetPasswordLoading(true));
  try {
    const response = await resetPasswordApi(data);
    toast.success(response?.data?.data?.message);
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

// export const refreshAccessToken = () => async (dispatch) => {
//   const refreshToken = getRefreshToken();
//   try {
//     const response = await refreshAccessTokenApi(refreshToken);
//     setToken(response?.data?.data?.token);
//     setRefreshToken(response?.data?.data?.refreshToken);
//     localStorage.setItem("userData", JSON.stringify(response?.data?.data));
//     dispatch(refreshAccessTokenAction(response?.data?.data));
//     return { success: true };
//   } catch (e) {
//     console.error(e, "refresh error");
//     dispatch(hasError(e?.response?.data));
//     logout();
//   }
// };
