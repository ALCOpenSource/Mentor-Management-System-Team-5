import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getAllMentorsApi, createMentorInvitationApi, registerMentorApi, deleteMentorApi } from "../api/mentors";

import {
  getAllMentorsLoading,
  createMentorInvitationLoading,
  registerMentorLoading,
  deleteMentorLoading
} from "@/redux/Loading/LoadingSlice";

const initialState = {
  error: false,
  getAllMentorsData: {},
  createMentorInvitationData: {},
  registerMentorData: {},
  deleteMentorData: {}
};

export const mentorsSlice = createSlice({
  name: "mentors",

  initialState,

  reducers: {
    hasError: (state, action) => {
      state.error = action.payload;
    },

    getAllMentorsAction: (state, action) => {
      state.getAllMentorsData = action.payload;
    },

    createMentorInvitationAction: (state, action) => {
      state.createMentorInvitationData = action.payload;
    },

    registerMentorAction: (state, action) => {
      state.registerMentorData = action.payload;
    },

    deleteMentorAction: (state, action) => {
      state.deleteMentorData = action.payload;
    }
  }
});
export default mentorsSlice.reducer;

// Actions
const { hasError, getAllMentorsAction, createMentorInvitationAction, registerMentorAction, deleteMentorAction } =
  mentorsSlice.actions;

export const getAllMentors = (data) => async (dispatch) => {
  dispatch(getAllMentorsLoading(true));
  try {
    const response = await getAllMentorsApi(data);
    dispatch(getAllMentorsLoading(false));
    dispatch(getAllMentorsAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(getAllMentorsLoading(false));
    dispatch(hasError(e?.response?.data));
    return { success: false };
  }
};
export const createMentorInvitation = (data) => async (dispatch) => {
  dispatch(createMentorInvitationLoading(true));
  try {
    const response = await createMentorInvitationApi(data);
    dispatch(createMentorInvitationLoading(false));
    dispatch(createMentorInvitationAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(createMentorInvitationLoading(false));
    dispatch(hasError(e?.response?.data));
    return { success: false };
  }
};

export const registerMentor = (data) => async (dispatch) => {
  dispatch(registerMentorLoading(true));
  try {
    const response = await registerMentorApi(data);
    dispatch(registerMentorLoading(false));
    dispatch(registerMentorAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(hasError(e?.response?.data));
    dispatch(registerMentorLoading(false));
    return { success: false };
  }
};

export const deleteMentor = () => async (dispatch) => {
  dispatch(deleteMentorLoading(true));
  try {
    const response = await deleteMentorApi();
    dispatch(deleteMentorLoading(false));
    dispatch(deleteMentorAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(hasError(e?.response?.data));
    dispatch(deleteMentorLoading(false));
    return { success: false };
  }
};
