// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// Authentication
import Login from "@/pages/Authentication/Login/Login";
import ForgotPassword from "@/pages/Authentication/ForgotPassword/ForgotPassword";
import ResetPassword from "@/pages/Authentication/ResetPassword/ResetPassword";

// Dashboard
import DashboardContainer from "@/components/DashboardContainer/DashboardContainer";
import Home from "@/pages/Dashboard/Home/Home";
import ApprovalRequests from "@/pages/Dashboard/ApprovalRequests/ApprovalRequests";
import Certificates from "@/pages/Dashboard/Certificates/Certificates";
import DiscussionForum from "@/pages/Dashboard/DiscussionForum/DiscussionForum";
import MentorManagers from "@/pages/Dashboard/MentorManagers/MentorManagers";
import Mentors from "@/pages/Dashboard/Mentors/Mentors";
import Messages from "@/pages/Dashboard/Messages/Messages";
import Profile from "@/pages/Dashboard/Profile/Profile";
import Programs from "@/pages/Dashboard/Programs/Programs";
import Reports from "@/pages/Dashboard/Reports/Reports";

// Settings
import Settings from "@/pages/Dashboard/Settings/Settings";
import SettingsGeneral from "@/pages/Dashboard/Settings/General/General";
import SettingsPassword from "@/pages/Dashboard/Settings/Password/Password";
import SettingsFAQ from "@/pages/Dashboard/Settings/FAQ/FAQ";
import SettingsSupport from "@/pages/Dashboard/Settings/Support/Support";
import SettingsArchive from "@/pages/Dashboard/Settings/Archive/Archive";
import SettingsPrivacy from "@/pages/Dashboard/Settings/Privacy/Privacy";
import SettingsNotifications from "@/pages/Dashboard/Settings/Notifications/Notifications";

// Tasks
import Tasks from "@/pages/Dashboard/Tasks/Tasks";
import TaskDetails from "@/pages/Dashboard/Tasks/TaskDetails/TaskDetails";
import AddTask from "@/pages/Dashboard/Tasks/AddTask/AddTask";

// Authenticated Routes
import AuthenticatedRoutes from "@/components/AuthenticatedRoutes/AuthenticatedRoutes";
import userRoles from "@/constants/userRoles";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password' element={<ResetPassword />} />

        <Route
          path='/dashboard'
          element={
            <AuthenticatedRoutes roles={[userRoles.admin]}>
              <DashboardContainer>
                <Outlet />
              </DashboardContainer>
            </AuthenticatedRoutes>
          }
        >
          <Route index path='' element={<Home />} />
          <Route path='settings' element={<Settings />}>
            <Route index path='' element={<SettingsGeneral />} />
            <Route path='password' element={<SettingsPassword />} />
            <Route path='faq' element={<SettingsFAQ />} />
            <Route path='support' element={<SettingsSupport />} />
            <Route path='archive' element={<SettingsArchive />} />
            <Route path='privacy' element={<SettingsPrivacy />} />
            <Route path='notifications' element={<SettingsNotifications />} />
          </Route>
          <Route path='approval-requests' element={<ApprovalRequests />} />
          <Route index path='certificates' element={<Certificates />} />
          <Route path='discussion-forum' element={<DiscussionForum />} />
          <Route path='mentor-managers' element={<MentorManagers />} />
          <Route path='mentors' element={<Mentors />} />
          <Route path='messages' element={<Messages />} />
          <Route index path='profile' element={<Profile />} />
          <Route path='programs' element={<Programs />} />
          <Route path='reports' element={<Reports />} />
          <Route path='tasks'>
            <Route path='' element={<Tasks />}>
              <Route path='task-details/:id' element={<TaskDetails />} />
            </Route>
            <Route path='add-task' element={<AddTask />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
