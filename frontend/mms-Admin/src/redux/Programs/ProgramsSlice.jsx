import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  deleteProgramApi,
  editProgramApi,
  getAllProgramsApi,
  getArchivedProgramsApi,
  getActiveProgramsApi,
  getActiveProgramsByWeekApi,
  getActiveProgramsByMonthApi,
  getActiveProgramsByYearApi,
  createProgramApi
} from "../api/programs";

import {
  deleteProgramLoading,
  editProgramLoading,
  getAllProgramsLoading,
  getArchivedProgramsLoading,
  getActiveProgramsLoading,
  getActiveProgramsByWeekLoading,
  getActiveProgramsByMonthLoading,
  getActiveProgramsByYearLoading,
  createProgramLoading
} from "@/redux/Loading/LoadingSlice";

const initialState = {
  error: false,
  deleteProgramData: {},
  editProgramData: {},
  getAllProgramsData: {},
  getArchivedProgramsData: {},
  getActiveProgramsData: {},
  getActiveProgramsByWeekData: {},
  getActiveProgramsByMonthData: {},
  getActiveProgramsByYearData: {},
  createProgramData: {}
};

export const programsSlice = createSlice({
  name: "programs",

  initialState,

  reducers: {
    hasError: (state, action) => {
      state.error = action.payload;
    },

    deleteProgramAction: (state, action) => {
      state.deleteProgramData = action.payload;
    },

    editProgramAction: (state, action) => {
      state.editProgramData = action.payload;
    },

    getAllProgramsAction: (state, action) => {
      state.getAllProgramsData = action.payload;
    },

    getArchivedProgramsAction: (state, action) => {
      state.getArchivedProgramsData = action.payload;
    },

    getActiveProgramsAction: (state, action) => {
      state.getActiveProgramsData = action.payload;
    },

    getActiveProgramsByWeekAction: (state, action) => {
      state.getActiveProgramsByWeekData = action.payload;
    },

    getActiveProgramsByMonthAction: (state, action) => {
      state.getActiveProgramsByMonthData = action.payload;
    },

    getActiveProgramsByYearAction: (state, action) => {
      state.getActiveProgramsByYearData = action.payload;
    },

    createProgramAction: (state, action) => {
      state.createProgramData = action.payload;
    }
  }
});
export default programsSlice.reducer;

// Actions
const {
  hasError,
  deleteProgramAction,
  editProgramAction,
  getAllProgramsAction,
  getArchivedProgramsAction,
  getActiveProgramsAction,
  getActiveProgramsByWeekAction,
  getActiveProgramsByMonthAction,
  getActiveProgramsByYearAction,
  createProgramAction
} = programsSlice.actions;

export const deleteProgram = (data) => async (dispatch) => {
  dispatch(deleteProgramLoading(true));

  try {
    const response = await deleteProgramApi(data);
    dispatch(deleteProgramLoading(false));
    dispatch(deleteProgramAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(deleteProgramLoading(false));
    dispatch(hasError(e?.response?.data));
    return { success: false };
  }
};
export const editProgram = (data) => async (dispatch) => {
  dispatch(editProgramLoading(true));

  try {
    const response = await editProgramApi(data);
    dispatch(editProgramLoading(false));
    dispatch(editProgramAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data);
    dispatch(editProgramLoading(false));
    dispatch(hasError(e?.response?.data));
    return { success: false };
  }
};

export const getAllPrograms = (data) => async (dispatch) => {
  dispatch(getAllProgramsLoading(true));

  try {
    const response = await getAllProgramsApi(data);
    dispatch(getAllProgramsLoading(false));
    dispatch(getAllProgramsAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data);
    dispatch(getAllProgramsLoading(false));
    dispatch(hasError(e?.response?.data));
    return { success: false };
  }
};

export const getArchivedPrograms = (data) => async (dispatch) => {
  dispatch(getArchivedProgramsLoading(true));
  try {
    const response = await getArchivedProgramsApi(data);
    // toast.success(response?.data?.data?.message);
    toast.success("Notification programs updated successfully");
    dispatch(getArchivedProgramsLoading(false));
    dispatch(getArchivedProgramsAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(hasError(e?.response?.data));
    dispatch(getArchivedProgramsLoading(false));
    return { success: false };
  }
};

export const getActivePrograms = () => async (dispatch) => {
  dispatch(getActiveProgramsLoading(true));
  try {
    const response = await getActiveProgramsApi();
    toast.success(response?.data?.data?.message);
    dispatch(getActiveProgramsLoading(false));
    dispatch(getActiveProgramsAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(hasError(e?.response?.data));
    dispatch(getActiveProgramsLoading(false));
    return { success: false };
  }
};

export const getActiveProgramsByWeek = (data) => async (dispatch) => {
  dispatch(getActiveProgramsByWeekLoading(true));
  try {
    const response = await getActiveProgramsByWeekApi(data);
    // toast.success(response?.data?.data?.message);
    toast.success("Privacy programs updated successfully");
    dispatch(getActiveProgramsByWeekLoading(false));
    dispatch(getActiveProgramsByWeekAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(hasError(e?.response?.data));
    dispatch(getActiveProgramsByWeekLoading(false));
    return { success: false };
  }
};

export const getActiveProgramsByMonth = () => async (dispatch) => {
  dispatch(getActiveProgramsByMonthLoading(true));
  try {
    const response = await getActiveProgramsByMonthApi();
    dispatch(getActiveProgramsByMonthLoading(false));
    dispatch(getActiveProgramsByMonthAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(hasError(e?.response?.data));
    dispatch(getActiveProgramsByMonthLoading(false));
    return { success: false };
  }
};

export const getActiveProgramsByYear = () => async (dispatch) => {
  dispatch(getActiveProgramsByYearLoading(true));
  try {
    const response = await getActiveProgramsByYearApi();
    dispatch(getActiveProgramsByYearLoading(false));
    dispatch(getActiveProgramsByYearAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(hasError(e?.response?.data));
    dispatch(getActiveProgramsByYearLoading(false));
    return { success: false };
  }
};

export const createProgram = () => async (dispatch) => {
  dispatch(createProgramLoading(true));
  try {
    const response = await createProgramApi();
    dispatch(createProgramLoading(false));
    dispatch(createProgramAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(hasError(e?.response?.data));
    dispatch(createProgramLoading(false));
    return { success: false };
  }
};
