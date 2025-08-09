
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp"
import AboutUs from "./pages/AboutUs";
import PricingPage from "./pages/PricingPage";
function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace/>}/>
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/pricing" element={<PricingPage />} />
    </Routes>
  );
}

export default App;
