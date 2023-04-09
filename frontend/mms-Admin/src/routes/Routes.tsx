// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "@/pages/LandingPage/LandingPage";
import Login from "@/pages/Authentication/Login/Login";
import ForgotPassword from "@/pages/Authentication/ForgotPassword/ForgotPassword";
import ResetPassword from "@/pages/Authentication/ResetPassword/ResetPassword";

const RoutesComponent: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password' element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
