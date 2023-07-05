import "./App.css";
import Authenticated from "./components/Authenticated";
import ContactPage from "./Pages/ContactPage";
import DashboardPage from "./Pages/DashboardPage";
import ErrorPage from "./Pages/ErrorPage";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import FundraisingPage from "./Pages/FundraisingPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import Logout from "./components/Logout";
import ProductsPage from "./Pages/ProductsPage";
import React from "react";
import RegisterPage from "./Pages/RegisterPage";
import ResetPasswordPage from "./Pages/ResetPasswordPage";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import InquiryPage from "./Pages/InquiryPage";
import { Routes, Route } from "react-router-dom";
import StickyFooter from "./components/Footer";
import SalePage from "./Pages/SalePage";
import OrganizationPage from "./Pages/OrganizationPage";
import Wufooform from "./Pages/Wufooform";


function App() {
  return (
    <div className="fullscreen">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/More Info" element={<InquiryPage />} />
        <Route path="/Wufooform" element={<Wufooform />} />
        <Route path="/ForgotPassword" element={<ForgotPasswordPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/ProductType" element={<ProductsPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/ResetPassword/:token" element={<ResetPasswordPage />} />

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
          path="/FundraisingPage"
          element={
            <Authenticated>
              <DashboardPage page="FundraisingPage" />
            </Authenticated>
          }
        />
        <Route
          path="/OrganizationPage"
          element={
            <Authenticated>
              <DashboardPage page="OrganizationPage" />
            </Authenticated>
          }
        />
        <Route
          path="/SalePage"
          element={
            <Authenticated>
              <DashboardPage page="SalePage" />
            </Authenticated>
          }
        />
        {/* <Route path="/Info" element={<Inquiry/>} /> */}
        <Route
          path="/admin-product-edit"
          element={<DashboardPage page="admin-product-edit" />}
        />
        <Route
          path="/admin-product-type-edit"
          element={<DashboardPage page="admin-product-type-edit" />}
        />
        <Route path="/Logout" element={<Logout />} />
      </Routes>
      <StickyFooter />
    </div>
  );
}

export default App;
