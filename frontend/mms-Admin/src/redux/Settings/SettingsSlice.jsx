import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  changePasswordApi,
  editUserNotificationsApi,
  getUserNotificationsApi,
  editUserPrivacyApi,
  getUserPrivacyApi,
  getGeneralFaqApi,
  getTechnicalFaqApi,
  sendSupportMessageApi
} from "../api/settings";

import {
  changePasswordLoading,
  editUserNotificationsLoading,
  getUserNotificationsLoading,
  editUserPrivacyLoading,
  getUserPrivacyLoading,
  getGeneralFaqLoading,
  getTechnicalFaqLoading,
  sendSupportMessageLoading
} from "@/redux/Loading/LoadingSlice";

const initialState = {
  error: false,
  changePasswordData: {},
  editUserNotificationsData: {},
  getUserNotificationsData: {},
  editUserPrivacyData: {},
  getUserPrivacyData: {},
  getGeneralFaqData: {},
  getTechnicalFaqData: {},
  sendSupportMessageData: {}
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
    },

    getGeneralFaqAction: (state, action) => {
      state.getGeneralFaqData = action.payload;
    },

    getTechnicalFaqAction: (state, action) => {
      state.getTechnicalFaqData = action.payload;
    },

    sendSupportMessageAction: (state, action) => {
      state.sendSupportMessageData = action.payload;
    }
  }
});
export default settingsSlice.reducer;

// Actions
const {
  hasError,
  changePasswordAction,
  editUserNotificationsAction,
  getUserNotificationsAction,
  editUserPrivacyAction,
  getUserPrivacyAction,
  getGeneralFaqAction,
  getTechnicalFaqAction,
  sendSupportMessageAction
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

export const editUserNotifications = (data) => async (dispatch) => {
  dispatch(editUserNotificationsLoading(true));
  try {
    const response = await editUserNotificationsApi(data);
    // toast.success(response?.data?.data?.message);
    toast.success("Notification settings updated successfully");
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
    // toast.success(response?.data?.data?.message);
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

export const getGeneralFaq = () => async (dispatch) => {
  dispatch(getGeneralFaqLoading(true));
  try {
    const response = await getGeneralFaqApi();
    dispatch(getGeneralFaqLoading(false));
    dispatch(getGeneralFaqAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(hasError(e?.response?.data));
    dispatch(getGeneralFaqLoading(false));
    return { success: false };
  }
};

export const getTechnicalFaq = () => async (dispatch) => {
  dispatch(getTechnicalFaqLoading(true));
  try {
    const response = await getTechnicalFaqApi();
    dispatch(getTechnicalFaqLoading(false));
    dispatch(getTechnicalFaqAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(hasError(e?.response?.data));
    dispatch(getTechnicalFaqLoading(false));
    return { success: false };
  }
};

export const sendSupportMessage = (data) => async (dispatch) => {
  dispatch(sendSupportMessageLoading(true));
  try {
    const response = await sendSupportMessageApi(data);
    dispatch(sendSupportMessageLoading(false));
    dispatch(sendSupportMessageAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(hasError(e?.response?.data));
    dispatch(sendSupportMessageLoading(false));
    return { success: false };
  }
};
