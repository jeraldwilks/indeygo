import AdminDashboardPage from "./AdminDashboardPage";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import OrganizationPage from "./OrganizationPage";
import React, { useState } from "react";
import { useAuth } from "../providers/AuthProvider";
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
  const [sidebarOpen, setSidebarOpen] = useState(true);

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
      <div style={{ display: sidebarOpen ? "flex" : "block" }}>
      {!sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(true)}
            style={{
              width: "10%",
              color: "blue",
              position: "absolute",
              top: 64,
            }}
          >
            <ArrowDropDownIcon />
          </div>
        )}
        {sidebarOpen && (
        <Sidebar
          collapsed={collapsed}
          toggled={toggled}
          onToggle={handleToggleSidebar}
        >
          <div
              onClick={() => setSidebarOpen(!sidebarOpen)}
              style={{ width: "100%", color: "blue" }}
            >
              {sidebarOpen && <ArrowDropUpIcon />}
              {!sidebarOpen && <ArrowDropDownIcon />}
            </div>
          {sidebarOpen && (
              <>
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
            <Link to="/Dashboard">
              <SidebarMenuItem icon={<FaTachometerAlt />}>
                Dashboard
              </SidebarMenuItem>
            </Link>
            <Link to="/OrganizationPage">
              <SidebarMenuItem icon={<FaGem />}>Organization</SidebarMenuItem>
            </Link>
            {/* Add more menu items as needed */}
          </Menu>
          </>
          )}
        </Sidebar>
        )}
        <div style={{ flex: 1 }}>
          {page === "OrganizationPage" && <OrganizationPage />}
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
