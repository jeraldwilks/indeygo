import React from "react";
import { useAuth } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import AdminDashboardPage from "./AdminDashboardPage";
import OrganizationPage from "./OrganizationPage";

const DashboardPage = ({ page }) => {
  const { user } = useAuth();
  if (user?.isAdmin) {
    return <AdminDashboardPage page={page} />;
  }
  return <OrganizationPage />;
};

export default DashboardPage;
