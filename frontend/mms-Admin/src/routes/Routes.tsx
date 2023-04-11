// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "@/pages/LandingPage/LandingPage";
import Login from "@/pages/Authentication/Login/Login";

const RoutesComponent: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
