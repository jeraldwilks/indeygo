import "./App.css";
import AboutPage from "./Pages/AboutPage";
import Authenticated from "./components/Authenticated";
import ContactPage from "./Pages/ContactPage";
import DashboardPage from "./Pages/DashboardPage";
import ErrorPage from "./Pages/ErrorPage";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import Logout from "./components/Logout";
import ProductsPage from "./Pages/ProductsPage";
import FundraisingInfo from "./Pages/FundraisingInfoPage.jsx";
import BlogPage from "./Pages/BlogPage.jsx";
import FAQPage from "./Pages/FAQPage.jsx";
import React from "react";
import RegisterPage from "./Pages/RegisterPage";
import ResetPasswordPage from "./Pages/ResetPasswordPage";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import InquiryPage from "./Pages/InquiryPage";
import { Routes, Route } from "react-router-dom";
import StickyFooter from "./components/Footer";
import Wufooform from "./Pages/Wufooform";

function App() {
  return (
    <div className="fullscreen">
      <ResponsiveAppBar />
      <Routes>
        {/* Routes  to responsive app bar */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/Products" element={<ProductsPage />} />
        <Route path="/FundraisingInfo" element={<FundraisingInfo />} />
        <Route path="/FAQ" element={<FAQPage />} />
        <Route path="/Blog" element={<BlogPage />} />
        <Route path="/Contact" element={<InquiryPage />} />

        <Route path="*" element={<ErrorPage />} />
        
        {/* Routes to be configured */}
        <Route path="/More Info" element={<InquiryPage />} />
        <Route path="/Wufooform" element={<Wufooform />} />

        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/ResetPassword/:token" element={<ResetPasswordPage />} />
        <Route path="/ForgotPassword" element={<ForgotPasswordPage />} />

        <Route
          path="/Dashboard"
          element={
            <Authenticated>
              <DashboardPage page="Dashboard" />
            </Authenticated>
          }
        />
        <Route
          path="/admin-add-product"
          element={<DashboardPage page="admin-add-product" />}
        />
        <Route
          path="/admin-edit-product/:id"
          element={
            <Authenticated>
              <DashboardPage page="admin-edit-product/:id" />
            </Authenticated>
          }
        />
        <Route
          path="/admin-products"
          element={
            <Authenticated>
              <DashboardPage page="admin-products" />
            </Authenticated>
          }
        />
        {/* Routes for Admin Product Type */}

        <Route
          path="/admin-add-product-type"
          element={<DashboardPage page="admin-add-product-type" />}
        />
        <Route
          path="/admin-edit-product-type/:id"
          element={<DashboardPage page="admin-edit-product-type/:id" />}
        />
        <Route
          path="/admin-product-type"
          element={
            <Authenticated>
              <DashboardPage page="admin-product-type" />
            </Authenticated>
          }
        />

        <Route
          path="/fundraisers"
          element={
            <Authenticated>
              <DashboardPage page="fundraisers" />
            </Authenticated>
          }
        />
        <Route
          path="/organizations"
          element={
            <Authenticated>
              <DashboardPage page="organizations" />
            </Authenticated>
          }
        />
        <Route
          path="/sales"
          element={
            <Authenticated>
              <DashboardPage page="sales" />
            </Authenticated>
          }
        />
        <Route
          path="/add-sale"
          element={
            <Authenticated>
              <DashboardPage page="add-sale" />
            </Authenticated>
          }
        />
        <Route
          path="/edit-sale/:id"
          element={
            <Authenticated>
              <DashboardPage page="edit-sale/:id" />
            </Authenticated>
          }
        />
        <Route path="/Logout" element={<Logout />} />
      </Routes>
      <StickyFooter />
    </div>
  );
}

export default App;
