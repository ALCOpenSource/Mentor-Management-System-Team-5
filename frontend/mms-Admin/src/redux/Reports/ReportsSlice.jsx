import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  getAllReportsApi,
  getWeeklyReportsApi,
  getMonthlyReportsApi,
  getYearlyReportsApi,
  createNewReportApi,
  getReportDetailsApi
} from "../api/reports";

import {
  getAllReportsLoading,
  getWeeklyReportsLoading,
  getMonthlyReportsLoading,
  getYearlyReportsLoading,
  createNewReportLoading,
  getReportDetailsLoading
} from "@/redux/Loading/LoadingSlice";

const initialState = {
  error: false,
  getAllReportsData: {},
  getWeeklyReportsData: {},
  getMonthlyReportsData: {},
  getYearlyReportsData: {},
  createNewReportData: {},
  getReportDetailsData: {}
};

export const reportsSlice = createSlice({
  name: "reports",

  initialState,

  reducers: {
    hasError: (state, action) => {
      state.error = action.payload;
    },

    getAllReportsAction: (state, action) => {
      state.getAllReportsData = action.payload;
    },

    getWeeklyReportsAction: (state, action) => {
      state.getWeeklyReportsData = action.payload;
    },

    getMonthlyReportsAction: (state, action) => {
      state.getMonthlyReportsData = action.payload;
    },

    getYearlyReportsAction: (state, action) => {
      state.getYearlyReportsData = action.payload;
    },

    createNewReportAction: (state, action) => {
      state.createNewReportData = action.payload;
    },

    getReportDetailsAction: (state, action) => {
      state.getReportDetailsData = action.payload;
    }
  }
});
export default reportsSlice.reducer;

// Actions
const {
  hasError,
  getAllReportsAction,
  getWeeklyReportsAction,
  getMonthlyReportsAction,
  getYearlyReportsAction,
  createNewReportAction,
  getReportDetailsAction
} = reportsSlice.actions;

export const getAllReports = (data) => async (dispatch) => {
  dispatch(getAllReportsLoading(true));
  try {
    const response = await getAllReportsApi(data);
    dispatch(getAllReportsLoading(false));
    dispatch(getAllReportsAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(getAllReportsLoading(false));
    dispatch(hasError(e?.response?.data));
    return { success: false };
  }
};
export const getWeeklyReports = (data) => async (dispatch) => {
  dispatch(getWeeklyReportsLoading(true));
  try {
    const response = await getWeeklyReportsApi(data);
    dispatch(getWeeklyReportsLoading(false));
    dispatch(getWeeklyReportsAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(getWeeklyReportsLoading(false));
    dispatch(hasError(e?.response?.data));
    return { success: false };
  }
};

export const getMonthlyReports = (data) => async (dispatch) => {
  dispatch(getMonthlyReportsLoading(true));
  try {
    const response = await getMonthlyReportsApi(data);
    dispatch(getMonthlyReportsLoading(false));
    dispatch(getMonthlyReportsAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(hasError(e?.response?.data));
    dispatch(getMonthlyReportsLoading(false));
    return { success: false };
  }
};

export const getYearlyReports = () => async (dispatch) => {
  dispatch(getYearlyReportsLoading(true));
  try {
    const response = await getYearlyReportsApi();
    dispatch(getYearlyReportsLoading(false));
    dispatch(getYearlyReportsAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(hasError(e?.response?.data));
    dispatch(getYearlyReportsLoading(false));
    return { success: false };
  }
};

export const createNewReport = (data) => async (dispatch) => {
  dispatch(createNewReportLoading(true));
  try {
    const response = await createNewReportApi(data);
    dispatch(createNewReportLoading(false));
    dispatch(createNewReportAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(hasError(e?.response?.data));
    dispatch(createNewReportLoading(false));
    return { success: false };
  }
};

export const getReportDetails = (data) => async (dispatch) => {
  dispatch(getReportDetailsLoading(true));
  try {
    const response = await getReportDetailsApi(data);
    dispatch(getReportDetailsLoading(false));
    dispatch(getReportDetailsAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(hasError(e?.response?.data));
    dispatch(getReportDetailsLoading(false));
    return { success: false };
  }
};
