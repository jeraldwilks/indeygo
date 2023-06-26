import AddIcon from "@mui/icons-material/Add";
import AdminAddProduct from "../components/AdminAddProduct";
import AdminEditProduct from "../components/AdminEditProduct";
import AdminProducts from "../components/AdminProducts";
import AdminProductType from "../components/AdminProductType";
import DragHandleSharpIcon from "@mui/icons-material/DragHandleSharp";
import InventorySharpIcon from "@mui/icons-material/InventorySharp";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaTachometerAlt,
} from "react-icons/fa";

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
                  <Link
                    to="/Dashboard"
                    style={{
                      color: "black",
                    }}
                  >
                    <MenuItem icon={<FaTachometerAlt />}>Dashboard</MenuItem>
                  </Link>
                  <Link
                    to="/admin-product-type"
                    style={{
                      color: "black",
                    }}
                  >
                    <MenuItem icon={<AddIcon />}>Product Type</MenuItem>
                  </Link>
                  <Link
                    to="/admin-products"
                    style={{
                      color: "black",
                    }}
                  >
                    <MenuItem icon={<InventorySharpIcon />}>Products</MenuItem>
                  </Link>
                  <hr></hr>
                  <Link
                    to="/Logout"
                    style={{
                      color: "black",
                    }}
                  >
                    <MenuItem icon={<LogoutIcon />}>Logout</MenuItem>
                  </Link>
                </Menu>
              </>
            )}
          </Sidebar>
        )}
        <div style={{ flex: 1 }}>
          {/* <h2> Admin Dashboard</h2> */}
          {page === "admin-products" && <AdminProducts />}
          {page === "admin-add-product" && <AdminAddProduct />}
          {page === "admin-edit-product/:id" && <AdminEditProduct />}
          {page === "admin-product-type" && <AdminProductType />}
        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;
