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
import Settings from "@/pages/Dashboard/Settings/Settings";
import ApprovalRequests from "@/pages/Dashboard/ApprovalRequests/ApprovalRequests";
import Certificates from "@/pages/Dashboard/Certificates/Certificates";
import DiscussionForum from "@/pages/Dashboard/DiscussionForum/DiscussionForum";
import MentorManagers from "@/pages/Dashboard/MentorManagers/MentorManagers";
import Mentors from "@/pages/Dashboard/Mentors/Mentors";
import Messages from "@/pages/Dashboard/Messages/Messages";
import Profile from "@/pages/Dashboard/Profile/Profile";
import Programs from "@/pages/Dashboard/Programs/Programs";
import Reports from "@/pages/Dashboard/Reports/Reports";
import Tasks from "@/pages/Dashboard/Tasks/Tasks";

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
            <DashboardContainer>
              <Outlet />
            </DashboardContainer>
          }
        >
          <Route index path='' element={<Home />} />
          <Route path='settings' element={<Settings />} />
          <Route path='approval-requests' element={<ApprovalRequests />} />
          <Route index path='certificates' element={<Certificates />} />
          <Route path='discussion-forum' element={<DiscussionForum />} />
          <Route path='mentor-managers' element={<MentorManagers />} />
          <Route path='mentors' element={<Mentors />} />
          <Route path='messages' element={<Messages />} />
          <Route index path='profile' element={<Profile />} />
          <Route path='programs' element={<Programs />} />
          <Route path='reports' element={<Reports />} />
          <Route path='tasks' element={<Tasks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
