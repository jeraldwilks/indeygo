import AddBusinessIcon from "@mui/icons-material/Add";
import AdminDashboardPage from "./AdminDashboardPage";
import DragHandleSharpIcon from "@mui/icons-material/DragHandleSharp";
import OrganizationPage from "./OrganizationPage";
import React, { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem as SidebarMenuItem } from "react-pro-sidebar";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaTachometerAlt,
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
              width: "4.55%",
              color: "black",
              position: "absolute",
              top: 68,
            }}
          >
            <DragHandleSharpIcon />
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
              style={{ width: "100%", color: "black" }}
            >
              {sidebarOpen && <DragHandleSharpIcon />}
              {!sidebarOpen && <DragHandleSharpIcon />}
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
                  <hr></hr>
                  <Link
                    to="/Dashboard"
                    style={{
                      color: "black",
                    }}
                  >
                    <SidebarMenuItem icon={<FaTachometerAlt />}>
                      Dashboard
                    </SidebarMenuItem>
                  </Link>
                  <Link
                    to="/OrganizationPage"
                    style={{
                      color: "black",
                    }}
                  >
                    <SidebarMenuItem icon={<AddBusinessIcon />}>
                      Organization
                    </SidebarMenuItem>
                  </Link>
                  <hr></hr>
                  <Link
                    to="/Logout"
                    style={{
                      color: "black",
                    }}
                  >
                    <SidebarMenuItem icon={<LogoutIcon />}>Logout</SidebarMenuItem>
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
