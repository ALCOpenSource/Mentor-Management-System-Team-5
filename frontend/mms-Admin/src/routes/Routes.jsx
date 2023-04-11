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


const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password' element={<ResetPassword />} />

        <Route path='/dashboard' element={<DashboardContainer><Outlet /></DashboardContainer>}>
          <Route index path='' element={<Home />} />
          <Route path='settings' element={<Settings />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
