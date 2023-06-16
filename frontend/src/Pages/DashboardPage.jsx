import React from "react";
import { useAuth } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import AdminDashboardPage from "./AdminDashboardPage";

const DashboardPage = ({page}) => {
  const { user } = useAuth();
  if (user?.isAdmin) {
    return <AdminDashboardPage page={page} />;
  }
  return <div>Dashboard Page</div>;
};

export default DashboardPage;
