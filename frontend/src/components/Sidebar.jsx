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
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const SidebarComponent = ({ collapsed, toggled, onToggle, role, page }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const getMenuItems = () => {
    if (role === "admin") {
      return (
        <>
          <Link to="/dashboard">
            <MenuItem icon={<FaTachometerAlt />}>Dashboard</MenuItem>
          </Link>
          <Link to="/admin-product-type">
            <MenuItem icon={<FaGem />}>Product Type</MenuItem>
          </Link>
          <Link to="/admin-products">
            <MenuItem icon={<FaList />}>Products</MenuItem>
          </Link>
          {/* Add more menu items for the admin role */}
        </>
      );
    } else if (role === "user") {
      return (
        <>
          {/* Add menu items for the user role */}
        </>
      );
    } else if (role === "organizer") {
      return (
        <>
          {/* Add menu items for the organizer role */}
        </>
      );
    } else {
      return null;
    }
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
            onToggle={onToggle}
          >
            <div
              onClick={() => setSidebarOpen(!sidebarOpen)}
              style={{ width: "100%", color: "blue" }}
            >
              {sidebarOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </div>
            {sidebarOpen && (
              <Menu iconShape="circle">
                {collapsed ? (
                  <MenuItem icon={<FaAngleDoubleRight />} onClick={onToggle} />
                ) : (
                  <MenuItem suffix={<FaAngleDoubleLeft />} onClick={onToggle} />
                )}
                {getMenuItems()}
              </Menu>
            )}
          </Sidebar>
        )}
        <div style={{ flex: 1 }}>{page}</div>
      </div>
    </>
  );
};

export default SidebarComponent;
