import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  changePasswordApi,
  updateProfileApi,
  editUserNotificationsApi,
  getUserNotificationsApi
} from "../api/settings";

import {
  changePasswordLoading,
  updateProfileLoading,
  editUserNotificationsLoading,
  getUserNotificationsLoading
} from "@/redux/Loading/LoadingSlice";

const initialState = {
  error: false,
  changePasswordData: {},
  updateProfileData: {},
  editUserNotificationsData: {},
  getUserNotificationsData: {}
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

    updateProfileAction: (state, action) => {
      state.updateProfileData = action.payload;
    },

    editUserNotificationsAction: (state, action) => {
      state.editUserNotificationsData = action.payload;
    },

    getUserNotificationsAction: (state, action) => {
      state.getUserNotificationsData = action.payload;
    }
  }
});
export default settingsSlice.reducer;

// Actions
const { hasError, changePasswordAction, updateProfileAction, editUserNotificationsAction, getUserNotificationsAction } =
  settingsSlice.actions;

export const changePassword = (data) => async (dispatch) => {
  dispatch(changePasswordLoading(true));

  try {
    const response = await changePasswordApi(data);
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
export const updateProfile = (data) => async (dispatch) => {
  dispatch(updateProfileLoading(true));

  try {
    const response = await updateProfileApi(data);
    console.log(response, "updateProfile response");
    toast.success(response?.data?.data?.message);
    dispatch(updateProfileLoading(false));
    dispatch(updateProfileAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    console.log(e, "updateProfile error");
    toast.error(e?.response?.data);
    dispatch(updateProfileLoading(false));
    dispatch(hasError(e?.response?.data));
    return { success: false };
  }
};

export const editUserNotifications = (data) => async (dispatch) => {
  dispatch(editUserNotificationsLoading(true));
  try {
    const response = await editUserNotificationsApi(data);
    toast.success(response?.data?.data?.message);
    dispatch(editUserNotificationsLoading(false));
    dispatch(editUserNotificationsAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(hasError(e?.response?.data));
    dispatch(editUserNotificationsLoading(false));
    return { success: false };
  }
};

export const getUserNotifications = () => async (dispatch) => {
  dispatch(getUserNotificationsLoading(true));
  try {
    const response = await getUserNotificationsApi();
    toast.success(response?.data?.data?.message);
    dispatch(getUserNotificationsLoading(false));
    dispatch(getUserNotificationsAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(hasError(e?.response?.data));
    dispatch(getUserNotificationsLoading(false));
    return { success: false };
  }
};
