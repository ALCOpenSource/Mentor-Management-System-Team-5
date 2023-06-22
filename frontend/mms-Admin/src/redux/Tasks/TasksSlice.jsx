import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  deleteTaskApi,
  editTaskApi,
  getAllTasksApi,
  getCompletedTasksApi,
  getInprogressTasksApi,
  getWeeklyTasksApi,
  getMonthlyTasksApi,
  getYearlyTasksApi,
  createTaskApi,
  getTaskDetailsApi
} from "../api/tasks";

import {
  deleteTaskLoading,
  editTaskLoading,
  getAllTasksLoading,
  getCompletedTasksLoading,
  getInprogressTasksLoading,
  getWeeklyTasksLoading,
  getMonthlyTasksLoading,
  getYearlyTasksLoading,
  createTaskLoading,
  getTaskDetailsLoading
} from "@/redux/Loading/LoadingSlice";

const initialState = {
  error: false,
  deleteTaskData: {},
  editTaskData: {},
  getAllTasksData: {},
  getCompletedTasksData: {},
  getInprogressTasksData: {},
  getWeeklyTasksData: {},
  getMonthlyTasksData: {},
  getYearlyTasksData: {},
  createTaskData: {},
  getTaskDetailsData: {}
};

export const tasksSlice = createSlice({
  name: "tasks",

  initialState,

  reducers: {
    hasError: (state, action) => {
      state.error = action.payload;
    },

    deleteTaskAction: (state, action) => {
      state.deleteTaskData = action.payload;
    },

    editTaskAction: (state, action) => {
      state.editTaskData = action.payload;
    },

    getAllTasksAction: (state, action) => {
      state.getAllTasksData = action.payload;
    },

    getCompletedTasksAction: (state, action) => {
      state.getCompletedTasksData = action.payload;
    },

    getInprogressTasksAction: (state, action) => {
      state.getInprogressTasksData = action.payload;
    },

    getWeeklyTasksAction: (state, action) => {
      state.getWeeklyTasksData = action.payload;
    },

    getMonthlyTasksAction: (state, action) => {
      state.getMonthlyTasksData = action.payload;
    },

    getYearlyTasksAction: (state, action) => {
      state.getYearlyTasksData = action.payload;
    },

    createTaskAction: (state, action) => {
      state.createTaskData = action.payload;
    },

    getTaskDetailsAction: (state, action) => {
      state.getTaskDetailsData = action.payload;
    }
  }
});
export default tasksSlice.reducer;

// Actions
const {
  hasError,
  deleteTaskAction,
  editTaskAction,
  getAllTasksAction,
  getCompletedTasksAction,
  getInprogressTasksAction,
  getWeeklyTasksAction,
  getMonthlyTasksAction,
  getYearlyTasksAction,
  createTaskAction,
  getTaskDetailsAction
} = tasksSlice.actions;

export const deleteTask = (data) => async (dispatch) => {
  dispatch(deleteTaskLoading(true));

  try {
    const response = await deleteTaskApi(data);
    dispatch(deleteTaskLoading(false));
    dispatch(deleteTaskAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(deleteTaskLoading(false));
    dispatch(hasError(e?.response?.data));
    return { success: false };
  }
};
export const editTask = (data) => async (dispatch) => {
  dispatch(editTaskLoading(true));

  try {
    const response = await editTaskApi(data);
    dispatch(editTaskLoading(false));
    dispatch(editTaskAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data);
    dispatch(editTaskLoading(false));
    dispatch(hasError(e?.response?.data));
    return { success: false };
  }
};

export const getAllTasks = (data) => async (dispatch) => {
  dispatch(getAllTasksLoading(true));

  try {
    const response = await getAllTasksApi(data);
    dispatch(getAllTasksLoading(false));
    dispatch(getAllTasksAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data);
    dispatch(getAllTasksLoading(false));
    dispatch(hasError(e?.response?.data));
    return { success: false };
  }
};

export const getCompletedTasks = (data) => async (dispatch) => {
  dispatch(getCompletedTasksLoading(true));
  try {
    const response = await getCompletedTasksApi(data);
    // toast.success(response?.data?.data?.message);
    toast.success("Notification tasks updated successfully");
    dispatch(getCompletedTasksLoading(false));
    dispatch(getCompletedTasksAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    // toast.error(e?.response?.data?.message);
    dispatch(hasError(e?.response?.data));
    dispatch(getCompletedTasksLoading(false));
    return { success: false };
  }
};

export const getInprogressTasks = () => async (dispatch) => {
  dispatch(getInprogressTasksLoading(true));
  try {
    const response = await getInprogressTasksApi();
    toast.success(response?.data?.data?.message);
    dispatch(getInprogressTasksLoading(false));
    dispatch(getInprogressTasksAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    // toast.error(e?.response?.data?.message);
    dispatch(hasError(e?.response?.data));
    dispatch(getInprogressTasksLoading(false));
    return { success: false };
  }
};

export const getWeeklyTasks = (data) => async (dispatch) => {
  dispatch(getWeeklyTasksLoading(true));
  try {
    const response = await getWeeklyTasksApi(data);
    // toast.success(response?.data?.data?.message);
    toast.success("Privacy tasks updated successfully");
    dispatch(getWeeklyTasksLoading(false));
    dispatch(getWeeklyTasksAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(hasError(e?.response?.data));
    dispatch(getWeeklyTasksLoading(false));
    return { success: false };
  }
};

export const getMonthlyTasks = () => async (dispatch) => {
  dispatch(getMonthlyTasksLoading(true));
  try {
    const response = await getMonthlyTasksApi();
    dispatch(getMonthlyTasksLoading(false));
    dispatch(getMonthlyTasksAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(hasError(e?.response?.data));
    dispatch(getMonthlyTasksLoading(false));
    return { success: false };
  }
};

export const getYearlyTasks = () => async (dispatch) => {
  dispatch(getYearlyTasksLoading(true));
  try {
    const response = await getYearlyTasksApi();
    dispatch(getYearlyTasksLoading(false));
    dispatch(getYearlyTasksAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(hasError(e?.response?.data));
    dispatch(getYearlyTasksLoading(false));
    return { success: false };
  }
};

export const createTask = (data) => async (dispatch) => {
  dispatch(createTaskLoading(true));
  try {
    const response = await createTaskApi(data);
    dispatch(createTaskLoading(false));
    dispatch(createTaskAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(hasError(e?.response?.data));
    dispatch(createTaskLoading(false));
    return { success: false };
  }
};

export const getTaskDetails = (data) => async (dispatch) => {
  dispatch(getTaskDetailsLoading(true));
  try {
    const response = await getTaskDetailsApi(data);
    dispatch(getTaskDetailsLoading(false));
    dispatch(getTaskDetailsAction(response?.data?.data));
    return { success: true };
  } catch (e) {
    toast.error(e?.response?.data?.message);
    dispatch(hasError(e?.response?.data));
    dispatch(getTaskDetailsLoading(false));
    return { success: false };
  }
};
