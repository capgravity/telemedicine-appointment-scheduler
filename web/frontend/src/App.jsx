import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDashboard from "./pages/UserDashboard";
import UserAppointments from "./pages/UserAppointments";
import UserReminders from "./pages/UserReminder";
import UserBills from "./pages/UserBills";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import UserProfilePage from "./pages/UserProfilePage";
// import UserMessages from "./pages/UserMessages";
import DoctorDashboard from "./pages/DoctorDashboard"; // Doctor's Dashboard
import DoctorAppointments from "./pages/DoctorAppointments"; // Doctor's Appointments
import DoctorProfilePage from "./pages/DoctorProfilePage";
// import DoctorMessages from "./pages/DoctorMessages"; // Doctor's Messages


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Common Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
  
        {/* User Routes */}
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/user/appointments" element={<UserAppointments />} />
        <Route path="/user/reminders" element={<UserReminders />} />
        <Route path="/user/bills" element={<UserBills />} />
        <Route path="/user/profile" element={<UserProfilePage />} />
        {/* <Route path="/user/messages" element={<UserMessages />} /> */}

        {/* Doctor Routes */}
        <Route path="/admin/dashboard" element={<DoctorDashboard />} />
        <Route path="/admin/appointments" element={<DoctorAppointments />} />
        <Route path="/admin/profile" element={<DoctorProfilePage />} />
        {/* <Route path="/admin/messages" element={<DoctorMessages />} /> */}
      </Routes>
    </Router>
  );
};

export default App;