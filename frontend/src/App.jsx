import "./App.css";
import ContactPage from "./Pages/ContactPage";
import ErrorPage from "./Pages/ErrorPage";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import ProductsPage from "./Pages/ProductsPage";
import StickyFooter from "./components/Footer";
import React from "react";
import RegisterPage from "./Pages/RegisterPage";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import DashboardPage from "./Pages/DashboardPage";
import Logout from "./components/Logout";
import Inquiry from "./components/Inquiry";
import { Routes, Route } from "react-router-dom";
import Authenticated from "./components/Authenticated";
import ResetPasswordPage from "./Pages/ResetPasswordPage";
import FundraisingPage from "./Pages/FundraisingPage";

function App() {
  return (
    <div className="fullscreen">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Start Fundraising" element={<FundraisingPage />} />
        <Route path="/ForgotPassword" element={<ForgotPasswordPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Products" element={<ProductsPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/ResetPassword/:token" element={<ResetPasswordPage />} />
        <Route
          path="/Dashboard"
          element={
            <Authenticated>
              <DashboardPage />
            </Authenticated>
          }
        />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/Info" element={<Inquiry/>} />
      </Routes>
      <StickyFooter />
    </div>
  );
}

export default App;
