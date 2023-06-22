import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getAllMentorManagersApi, deleteMentorManagerApi, getMentorManagerDetailsApi } from "../api/mentorManagers";

import {
  getAllMentorManagersLoading,
  deleteMentorManagerLoading,
  getMentorManagerDetailsLoading
} from "@/redux/Loading/LoadingSlice";

const initialState = {
  error: false,
  getAllMentorManagersData: {},
  deleteMentorManagerData: {},
  getMentorManagerDetailsData: {}
};

export const mentorManagersSlice = createSlice({
  name: "mentorManagers",

  initialState,

  reducers: {
    hasError: (state, action) => {
      state.error = action.payload;
    },

    getAllMentorManagersAction: (state, action) => {
      state.getAllMentorManagersData = action.payload;
    },

    deleteMentorManagerAction: (state, action) => {
      state.deleteMentorManagerData = action.payload;
    },

    getMentorManagerDetailsAction: (state, action) => {
      state.getMentorManagerDetailsData = action.payload;
    }
  }
});
export default mentorManagersSlice.reducer;

// Actions
const { hasError, getAllMentorManagersAction, deleteMentorManagerAction, getMentorManagerDetailsAction } =
  mentorManagersSlice.actions;

export const getAllMentorManagers = (data) => async (dispatch) => {
  dispatch(getAllMentorManagersLoading(true));
  try {
    const response = await getAllMentorManagersApi(data);
    dispatch(getAllMentorManagersLoading(false));
    dispatch(getAllMentorManagersAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(getAllMentorManagersLoading(false));
    dispatch(hasError(e?.response?.data));
    return { success: false };
  }
};

export const deleteMentorManager = () => async (dispatch) => {
  dispatch(deleteMentorManagerLoading(true));
  try {
    const response = await deleteMentorManagerApi();
    dispatch(deleteMentorManagerLoading(false));
    dispatch(deleteMentorManagerAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(hasError(e?.response?.data));
    dispatch(deleteMentorManagerLoading(false));
    return { success: false };
  }
};

export const getMentorManagerDetails = (data) => async (dispatch) => {
  dispatch(getMentorManagerDetailsLoading(true));
  try {
    const response = await getMentorManagerDetailsApi(data);
    dispatch(getMentorManagerDetailsLoading(false));
    dispatch(getMentorManagerDetailsAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(hasError(e?.response?.data));
    dispatch(getMentorManagerDetailsLoading(false));
    return { success: false };
  }
};
