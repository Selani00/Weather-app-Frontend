import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages import
import LandingPage from "./pages/LandingPage";
import Login from "./pages/auth/Login";
import Registration from "./pages/auth/Registration";
import Weather from "./pages/Weather";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />

        <Route path="/weather" element={<Weather/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
