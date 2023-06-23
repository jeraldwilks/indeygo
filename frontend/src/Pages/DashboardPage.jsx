import React, {useState} from "react";
import AdminDashboardPage from "./AdminDashboardPage";
import OrganizationPage from "./OrganizationPage";
import { useAuth } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem as SidebarMenuItem } from "react-pro-sidebar";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaTachometerAlt,
  FaGem,
  FaList,
} from "react-icons/fa";

const DashboardPage = ({ page }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);

  const handleToggleSidebar = () => {
    setToggled(!toggled);
  };

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };


  const { user } = useAuth();
  if (user?.isAdmin) {
    return <AdminDashboardPage page={page} />;
  }
  return (
    <>
    <div style={{ display: "flex" }}>
      <Sidebar
      collapsed={collapsed}
      toggled={toggled}
      onToggle={handleToggleSidebar}
      >
        <Menu iconShape="circle">
          {collapsed ? (
            <SidebarMenuItem
              icon={<FaAngleDoubleRight />}
              onClick={handleCollapsedChange}
            />
          ) : (
            <SidebarMenuItem
              suffix={<FaAngleDoubleLeft />}
              onClick={handleCollapsedChange}
            />
          )}
          <Link to="/dashboard">
            <SidebarMenuItem icon={<FaTachometerAlt />}>
              Dashboard
            </SidebarMenuItem>
          </Link>
          <Link to="/OrganizationPage">
            <SidebarMenuItem icon={<FaGem />}>Organization</SidebarMenuItem>
          </Link>
          {/* Add more menu items as needed */}
        </Menu>
      </Sidebar>
      <div style={{ flex: 1 }}>{page === "OrganizationPage" && <OrganizationPage />}
      </div>
      </div>
    </>
  );
  // <OrganizationPage />;
};

export default DashboardPage;
