// eslint-disable-next-line no-unused-vars
import React, { lazy } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

// Authentication
import Login from "@/pages/Authentication/Login/Login";
import ForgotPassword from "@/pages/Authentication/ForgotPassword/ForgotPassword";
import ResetPassword from "@/pages/Authentication/ResetPassword/ResetPassword";

// Authenticated Routes
import AuthenticatedRoutes from "@/components/AuthenticatedRoutes/AuthenticatedRoutes";
import userRoles from "@/constants/userRoles";

// Dashboard
import DashboardContainer from "@/components/DashboardContainer/DashboardContainer";
const Home = lazy(() => import("@/pages/Dashboard/Home/Home"));
const ApprovalRequests = lazy(() => import("@/pages/Dashboard/ApprovalRequests/ApprovalRequests"));
const Certificates = lazy(() => import("@/pages/Dashboard/Certificates/Certificates"));
const MentorManagers = lazy(() => import("@/pages/Dashboard/MentorManagers/MentorManagers"));
const Mentors = lazy(() => import("@/pages/Dashboard/Mentors/Mentors"));
const Profile = lazy(() => import("@/pages/Dashboard/Profile/Profile"));
const Programs = lazy(() => import("@/pages/Dashboard/Programs/Programs"));

// Messages
const Messages = lazy(() => import("@/pages/Dashboard/Messages/Messages"));
const BroadcastMessage = lazy(() => import("@/pages/Dashboard/Messages/BroadcastMessage/BroadcastMessage"));
const Chats = lazy(() => import("@/pages/Dashboard/Messages/Chats/Chats"));
const ChatDetails = lazy(() => import("@/pages/Dashboard/Messages/ChatDetails/ChatDetails"));
const AllPersonels = lazy(() => import("@/pages/Dashboard/Messages/AllPersonels/AllPersonels"));

// Settings
const Settings = lazy(() => import("@/pages/Dashboard/Settings/Settings"));
const SettingsGeneral = lazy(() => import("@/pages/Dashboard/Settings/General/General"));
const SettingsPassword = lazy(() => import("@/pages/Dashboard/Settings/Password/Password"));
const SettingsFAQ = lazy(() => import("@/pages/Dashboard/Settings/FAQ/FAQ"));
const SettingsSupport = lazy(() => import("@/pages/Dashboard/Settings/Support/Support"));
const SettingsArchive = lazy(() => import("@/pages/Dashboard/Settings/Archive/Archive"));
const SettingsPrivacy = lazy(() => import("@/pages/Dashboard/Settings/Privacy/Privacy"));
const SettingsNotifications = lazy(() => import("@/pages/Dashboard/Settings/Notifications/Notifications"));

// Tasks
const Tasks = lazy(() => import("@/pages/Dashboard/Tasks/Tasks"));
const TaskDetails = lazy(() => import("@/pages/Dashboard/Tasks/TaskDetails/TaskDetails"));
const CreateTask = lazy(() => import("@/pages/Dashboard/Tasks/CreateTask/CreateTask"));
const EditTask = lazy(() => import("@/pages/Dashboard/Tasks/EditTask/EditTask"));

// Discussion Forum
const DiscussionForum = lazy(() => import("@/pages/Dashboard/DiscussionForum/DiscussionForum"));
const PostDetails = lazy(() => import("@/pages/Dashboard/DiscussionForum/PostDetails/PostDetails"));

// Reports
const Reports = lazy(() => import("@/pages/Dashboard/Reports/Reports"));
const CreateReport = lazy(() => import("@/pages/Dashboard/Reports/CreateReport/CreateReport"));
const ReportDetails = lazy(() => import("@/pages/Dashboard/Reports/ReportDetails/ReportDetails"));

function RoutesComponent() {
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
          <Route path='discussion-forum'>
            <Route index path='' element={<DiscussionForum />} />
            <Route path='post-details/:id' element={<PostDetails />} />
          </Route>
          <Route path='mentor-managers' element={<MentorManagers />} />
          <Route path='mentors' element={<Mentors />} />
          <Route path='messages'>
            <Route path='' element={<Messages />} />
            <Route path='all-personels' element={<AllPersonels />} />
            <Route path='chats' element={<Chats />}>
              <Route path=':id' element={<ChatDetails />} />
            </Route>
            <Route path='broadcast-message' element={<BroadcastMessage />} />
          </Route>
          <Route index path='profile' element={<Profile />} />
          <Route path='programs' element={<Programs />} />
          <Route path='reports'>
            <Route path='' element={<Reports />}>
              <Route path='report-details/:id' element={<ReportDetails />} />
            </Route>
            <Route path='create-report' element={<CreateReport />} />
          </Route>
          <Route path='tasks'>
            <Route path='' element={<Tasks />}>
              <Route path='task-details/:id' element={<TaskDetails />} />
            </Route>
            <Route path='create-task' element={<CreateTask />} />
            <Route path='edit-task/:id' element={<EditTask />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesComponent;
