import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import AdminDashboardPage from "./AdminDashboardPage";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DragHandleSharpIcon from "@mui/icons-material/DragHandleSharp";
import OrganizationPage from "./OrganizationPage";
import React, { useState } from "react";
import ReceiptIcon from '@mui/icons-material/Receipt';
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaTachometerAlt,
} from "react-icons/fa";
import SalePage from "./SalePage";
import FundraisingPage from "./FundraisingPage";

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
        {/* {!sidebarOpen && (
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
        {sidebarOpen && ( */}
          <Sidebar
            collapsed={collapsed}
            toggled={toggled}
            onToggle={handleToggleSidebar}
          >
            {/* <div
              onClick={() => setSidebarOpen(!sidebarOpen)}
              style={{ width: "100%", color: "black" }}
            >
              {sidebarOpen && <DragHandleSharpIcon />}
              {!sidebarOpen && <DragHandleSharpIcon />}
            </div> */}
            {/* {sidebarOpen && ( */}
              <>
                <Menu iconShape="circle">
                  {collapsed ? (
                    <MenuItem
                      icon={<FaAngleDoubleRight />}
                      onClick={handleCollapsedChange}
                    />
                  ) : (
                    <MenuItem
                      suffix={<FaAngleDoubleLeft />}
                      onClick={handleCollapsedChange}
                    />
                  )}
                  <hr></hr>
                  <MenuItem
                    icon={<FaTachometerAlt />}
                    component={<Link to="/Dashboard" />}
                  >
                    Dashboard
                  </MenuItem>

                  <MenuItem
                    icon={<AddBusinessIcon />}
                    component={<Link to="/Organization" />}
                  >
                    Organizations
                  </MenuItem>

                  <MenuItem
                    icon={<AttachMoneyIcon />}
                    component={<Link to="/Fundraiser" />}
                  >
                    Fundraisers
                  </MenuItem>
                  <MenuItem
                    icon={<ReceiptIcon />}
                    component={<Link to="/Sale" />}
                  >
                    Sales
                  </MenuItem>
                  <hr></hr>
            
                  <MenuItem icon={<LogoutIcon />}>Logout</MenuItem>
                </Menu>
              </>
            {/* )} */}
          </Sidebar>
        {/* )} */}
        <div style={{ flex: 1 }}>
          {page === "Organization" && <OrganizationPage />}
          {page === "Sale" && <SalePage />}
          {page === "Fundraiser" && <FundraisingPage />}
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
