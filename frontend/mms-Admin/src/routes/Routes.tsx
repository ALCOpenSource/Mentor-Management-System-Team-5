// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const RoutesComponent: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Test route */}
        <Route path='/' element={<p>Hello World</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
