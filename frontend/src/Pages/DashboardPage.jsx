import React from "react";
import AdminDashboardPage from "./AdminDashboardPage";
import OrganizationPage from "./OrganizationPage";
import { useAuth } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem as SidebarMenuItem } from "react-pro-sidebar";
import { FaTachometerAlt, FaGem } from "react-icons/fa";

const DashboardPage = ({ page }) => {
  const { user } = useAuth();
  if (user?.isAdmin) {
    return <AdminDashboardPage page={page} />;
  }
  return (
    <>
      <Sidebar>
        <Menu iconShape="circle">
          <Link to="/dashboard">
            <SidebarMenuItem icon={<FaTachometerAlt />}>Dashboard</SidebarMenuItem>
          </Link>
          <Link to="/OrganizationPage">
            <SidebarMenuItem icon={<FaGem />}>Organization</SidebarMenuItem>
          </Link>
          {/* Add more menu items as needed */}
        </Menu>
      </Sidebar>
      <div>
        {page === "OrganizationPage" && <OrganizationPage />}
      </div>
    </>
  );
  // <OrganizationPage />;
};

export default DashboardPage;
