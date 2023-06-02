import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Auth/AuthSlice";
import ModalReducer from "./Modal/ModalSlice";
import LoadingReducer from "./Loading/LoadingSlice";
import SettingsReducer from "./Settings/SettingsSlice";
import ReportsReducer from "./Reports/ReportsSlice";
import CriteriaSlice from "./Criteria/CriteriaSlice";
import MentorsSlice from "./Mentors/MentorsSlice";
import TasksSlice from "./Tasks/TasksSlice";
import ProgramsSlice from "./Programs/ProgramsSlice";

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    modal: ModalReducer,
    loading: LoadingReducer,
    settings: SettingsReducer,
    reports: ReportsReducer,
    criteria: CriteriaSlice,
    mentors: MentorsSlice,
    tasks: TasksSlice,
    programs: ProgramsSlice
  },
  devTools: process.env.NODE_ENV === "development"
});

export default store;
