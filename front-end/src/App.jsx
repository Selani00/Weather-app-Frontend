import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages import
import LandingPage from "./pages/LandingPage";
import Login from "./pages/auth/Login";
import Registration from "./pages/auth/Registration";
import Weather from "./pages/Weather";
import PrivateRouter from "./components/PrivateRouter";
import ThemeProvider from "./components/ThemeProvider.jsx";
import NotFound from "./pages/NotFound.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />

        {/* Make weather as private router */}
        <Route element={<PrivateRouter />}>
          <Route
            path="/weather"
            element={
              <ThemeProvider>
                <Weather />
              </ThemeProvider>
            }
          />
        </Route>

        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
