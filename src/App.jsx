import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import AboutUs from "./pages/AboutUs";
import PricingPage from "./pages/PricingPage";
import LoginPage from "./pages/LoginPage";
import OtpPage from "./pages/OtpPage";
import CreateProject from "./pages/CreateProjectForm";
import Profile from "./pages/Profile";
import ProfilePrice from "./pages/ProfilePrice";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/signin" element={<LoginPage />} />
      <Route path="/otp" element={<OtpPage />} />
      <Route path="/createproject" element={<CreateProject />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile-pricing" element={<ProfilePrice/>} />
    </Routes>
  );
}

export default App;
