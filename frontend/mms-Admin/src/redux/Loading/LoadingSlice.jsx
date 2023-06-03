import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //Auth
  loginLoading: false,
  forgotPasswordLoading: false,
  resetPasswordLoading: false,
  signUpLoading: false,
  confirmEmailLoading: false,

  // Reports
  getAllReportsLoading: false,
  getWeeklyReportsLoading: false,
  getMonthlyReportsLoading: false,
  getYearlyReportsLoading: false,
  createNewReportLoading: false,
  editReportLoading: false,

  //Settings
  changePasswordLoading: false,
  updateProfileLoading: false,
  getProfileLoading: false,
  editUserNotificationsLoading: false,
  getUserNotificationsLoading: false,
  editUserPrivacyLoading: false,
  getUserPrivacyLoading: false,
  getGeneralFaqLoading: false,
  getTechnicalFaqLoading: false,
  sendSupportMessageLoading: false,

  //Tasks
  deleteTaskLoading: false,
  editTaskLoading: false,
  getAllTasksLoading: false,
  getCompletedTasksLoading: false,
  getInprogressTasksLoading: false,
  getWeeklyTasksLoading: false,
  getMonthlyTasksLoading: false,
  getYearlyTasksLoading: false,
  createTaskLoading: false,

  //Programs
  deleteProgramLoading: false,
  editProgramLoading: false,
  getAllProgramsLoading: false,
  getArchivedProgramsLoading: false,
  getActiveProgramsLoading: false,
  getActiveProgramsByWeekLoading: false,
  getActiveProgramsByMonthLoading: false,
  getActiveProgramsByYearLoading: false,
  createProgramLoading: false,

  //Mentors
  getAllMentorsLoading: false,
  inviteMentorLoading: false,
  registerMentorLoading: false,
  deleteMentorLoading: false
};

export const loadingSlice = createSlice({
  name: "loading",

  initialState,

  reducers: {
    //Auth
    loginLoading: (state, action) => {
      state.loginLoading = action.payload;
    },
    forgotPasswordLoading: (state, action) => {
      state.forgotPasswordLoading = action.payload;
    },
    resetPasswordLoading: (state, action) => {
      state.resetPasswordLoading = action.payload;
    },
    signUpLoading: (state, action) => {
      state.signUpLoading = action.payload;
    },
    confirmEmailLoading: (state, action) => {
      state.confirmEmailLoading = action.payload;
    },

    // Reports
    getAllReportsLoading: (state, action) => {
      state.getAllReportsLoading = action.payload;
    },
    getWeeklyReportsLoading: (state, action) => {
      state.getWeeklyReportsLoading = action.payload;
    },
    getMonthlyReportsLoading: (state, action) => {
      state.getMonthlyReportsLoading = action.payload;
    },
    getYearlyReportsLoading: (state, action) => {
      state.getYearlyReportsLoading = action.payload;
    },
    createNewReportLoading: (state, action) => {
      state.createNewReportLoading = action.payload;
    },
    editReportLoading: (state, action) => {
      state.editReportLoading = action.payload;
    },

    //Settings
    changePasswordLoading: (state, action) => {
      state.changePasswordLoading = action.payload;
    },
    updateProfileLoading: (state, action) => {
      state.updateProfileLoading = action.payload;
    },
    getProfileLoading: (state, action) => {
      state.getProfileLoading = action.payload;
    },
    editUserNotificationsLoading: (state, action) => {
      state.editUserNotificationsLoading = action.payload;
    },
    getUserNotificationsLoading: (state, action) => {
      state.getUserNotificationsLoading = action.payload;
    },
    editUserPrivacyLoading: (state, action) => {
      state.editUserPrivacyLoading = action.payload;
    },
    getUserPrivacyLoading: (state, action) => {
      state.getUserPrivacyLoading = action.payload;
    },
    getGeneralFaqLoading: (state, action) => {
      state.getGeneralFaqLoading = action.payload;
    },
    getTechnicalFaqLoading: (state, action) => {
      state.getTechnicalFaqLoading = action.payload;
    },
    sendSupportMessageLoading: (state, action) => {
      state.sendSupportMessageLoading = action.payload;
    },

    //Tasks
    deleteTaskLoading: (state, action) => {
      state.deleteTaskLoading = action.payload;
    },
    editTaskLoading: (state, action) => {
      state.editTaskLoading = action.payload;
    },
    getAllTasksLoading: (state, action) => {
      state.getAllTasksLoading = action.payload;
    },
    getCompletedTasksLoading: (state, action) => {
      state.getCompletedTasksLoading = action.payload;
    },
    getInprogressTasksLoading: (state, action) => {
      state.getInprogressTasksLoading = action.payload;
    },
    getWeeklyTasksLoading: (state, action) => {
      state.getWeeklyTasksLoading = action.payload;
    },
    getMonthlyTasksLoading: (state, action) => {
      state.getMonthlyTasksLoading = action.payload;
    },
    getYearlyTasksLoading: (state, action) => {
      state.getYearlyTasksLoading = action.payload;
    },
    createTaskLoading: (state, action) => {
      state.createTaskLoading = action.payload;
    },

    //Programs
    deleteProgramLoading: (state, action) => {
      state.deleteProgramLoading = action.payload;
    },
    editProgramLoading: (state, action) => {
      state.editProgramLoading = action.payload;
    },
    getAllProgramsLoading: (state, action) => {
      state.getAllProgramsLoading = action.payload;
    },
    getArchivedProgramsLoading: (state, action) => {
      state.getArchivedProgramsLoading = action.payload;
    },
    getActiveProgramsLoading: (state, action) => {
      state.getActiveProgramsLoading = action.payload;
    },
    getActiveProgramsByWeekLoading: (state, action) => {
      state.getActiveProgramsByWeekLoading = action.payload;
    },
    getActiveProgramsByMonthLoading: (state, action) => {
      state.getActiveProgramsByMonthLoading = action.payload;
    },
    getActiveProgramsByYearLoading: (state, action) => {
      state.getActiveProgramsByYearLoading = action.payload;
    },
    createProgramLoading: (state, action) => {
      state.createProgramLoading = action.payload;
    },

    //Mentors
    getAllMentorsLoading: (state, action) => {
      state.getAllMentorsLoading = action.payload;
    },
    inviteMentorLoading: (state, action) => {
      state.inviteMentorLoading = action.payload;
    },
    registerMentorLoading: (state, action) => {
      state.registerMentorLoading = action.payload;
    },
    deleteMentorLoading: (state, action) => {
      state.deleteMentorLoading = action.payload;
    }
  }
});

// Actions
export const {
  loginLoading,
  forgotPasswordLoading,
  resetPasswordLoading,
  signUpLoading,
  confirmEmailLoading,
  getAllReportsLoading,
  getWeeklyReportsLoading,
  getMonthlyReportsLoading,
  getYearlyReportsLoading,
  createNewReportLoading,
  editReportLoading,
  changePasswordLoading,
  updateProfileLoading,
  getProfileLoading,
  editUserNotificationsLoading,
  getUserNotificationsLoading,
  editUserPrivacyLoading,
  getUserPrivacyLoading,
  getGeneralFaqLoading,
  getTechnicalFaqLoading,
  sendSupportMessageLoading,
  getAllMentorsLoading,
  inviteMentorLoading,
  registerMentorLoading,
  deleteMentorLoading,
  deleteTaskLoading,
  editTaskLoading,
  getAllTasksLoading,
  getCompletedTasksLoading,
  getInprogressTasksLoading,
  getWeeklyTasksLoading,
  getMonthlyTasksLoading,
  getYearlyTasksLoading,
  createTaskLoading,
  deleteProgramLoading,
  editProgramLoading,
  getAllProgramsLoading,
  getArchivedProgramsLoading,
  getActiveProgramsLoading,
  getActiveProgramsByWeekLoading,
  getActiveProgramsByMonthLoading,
  getActiveProgramsByYearLoading,
  createProgramLoading
} = loadingSlice.actions;

export default loadingSlice.reducer;
