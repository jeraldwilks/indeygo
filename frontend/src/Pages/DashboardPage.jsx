import React from "react";
import { useAuth } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import AdminDashboardPage from "./AdminDashboardPage";

const DashboardPage = () => {
  const { user } = useAuth();
  if (user.isAdmin) {
    return <AdminDashboardPage />;
  }
  return <div>Dashboard Page</div>;
};

export default DashboardPage;
