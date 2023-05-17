import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage"; 
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import ErrorPage from "./Pages/ErrorPage";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import StickyFooter from "./Pages/Footer";

function App() {
  return (
    <div className="fullscreen">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Products" element={<ProductsPage />} />
        <Route path="/Registration" element={<RegisterPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <StickyFooter/>
    </div>
  );
}

export default App;
