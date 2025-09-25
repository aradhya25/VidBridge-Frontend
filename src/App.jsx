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
import Dashboard from "./components/Creator-Dashboard/dashboard";
import EditorDashboard from "./components/editor-dashboard/EditorDashboard";
import Signup from "./components/signup2/Signup";
import Login from "./components/login2/Login";
import ProjectPlan from "./components/section/ProjectPlan";
import Features from "./components/section/Features";
import Footer from "./components/section/Footer";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/otp" element={<OtpPage />} />
      <Route path="/createproject" element={<CreateProject />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile-pricing" element={<ProfilePrice/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
       <Route path="/editordashboard" element={<EditorDashboard/>} />
       <Route path="/project-plan" element={<ProjectPlan/>} />
       <Route path="/features" element={<Features/>} />
        <Route path="/footer" element={<Footer/>} />
    </Routes>
  );
}

export default App;
