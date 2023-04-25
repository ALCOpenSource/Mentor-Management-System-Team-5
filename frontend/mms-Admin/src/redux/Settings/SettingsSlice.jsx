import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  changePasswordApi,
  updateProfileApi,
  editUserNotificationsApi,
  getUserNotificationsApi,
  editUserPrivacyApi,
  getUserPrivacyApi
} from "../api/settings";

import {
  changePasswordLoading,
  updateProfileLoading,
  editUserNotificationsLoading,
  getUserNotificationsLoading,
  editUserPrivacyLoading,
  getUserPrivacyLoading
} from "@/redux/Loading/LoadingSlice";

const initialState = {
  error: false,
  changePasswordData: {},
  updateProfileData: {},
  editUserNotificationsData: {},
  getUserNotificationsData: {},
  editUserPrivacyData: {},
  getUserPrivacyData: {}
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
    },

    editUserPrivacyAction: (state, action) => {
      state.editUserPrivacyData = action.payload;
    },

    getUserPrivacyAction: (state, action) => {
      state.getUserPrivacyData = action.payload;
    }
  }
});
export default settingsSlice.reducer;

// Actions
const {
  hasError,
  changePasswordAction,
  updateProfileAction,
  editUserNotificationsAction,
  getUserNotificationsAction,
  editUserPrivacyAction,
  getUserPrivacyAction
} = settingsSlice.actions;

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
    dispatch(updateProfileLoading(false));
    dispatch(updateProfileAction(response?.data?.data));
    return { success: true };
  } catch (e) {
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

export const editUserPrivacy = (data) => async (dispatch) => {
  dispatch(editUserPrivacyLoading(true));
  try {
    const response = await editUserPrivacyApi(data);
    toast.success(response?.data?.data?.message);
    toast.success("Privacy settings updated successfully");
    dispatch(editUserPrivacyLoading(false));
    dispatch(editUserPrivacyAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(hasError(e?.response?.data));
    dispatch(editUserPrivacyLoading(false));
    return { success: false };
  }
};

export const getUserPrivacy = () => async (dispatch) => {
  dispatch(getUserPrivacyLoading(true));
  try {
    const response = await getUserPrivacyApi();
    toast.success(response?.data?.data?.message);
    dispatch(getUserPrivacyLoading(false));
    dispatch(getUserPrivacyAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(hasError(e?.response?.data));
    dispatch(getUserPrivacyLoading(false));
    return { success: false };
  }
};
