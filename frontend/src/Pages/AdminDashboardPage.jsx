import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaTachometerAlt,
  FaGem,
  FaList,
} from "react-icons/fa";
import AdminProductType from "../components/AdminProductType";
import AdminProduct from "../components/AdminProduct";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const AdminDashboardPage = ({ page }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setToggled(!toggled);
  };

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

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
                  <Link to="/dashboard">
                    <MenuItem icon={<FaTachometerAlt />}>Dashboard</MenuItem>
                  </Link>
                  <Link to="/admin-product-type">
                    <MenuItem icon={<FaGem />}>Product Type</MenuItem>
                  </Link>
                  <Link to="/admin-product">
                    <MenuItem icon={<FaList />}>Product</MenuItem>
                  </Link>
                </Menu>
              </>
            )}
          </Sidebar>
        )}
        <div style={{ flex: 1 }}>
          {page === "admin-product" && <AdminProduct />}
          {page === "admin-product-type" && <AdminProductType />}
        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;
