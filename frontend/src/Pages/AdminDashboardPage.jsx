import AddIcon from "@mui/icons-material/Add";
import AdminAddProduct from "../components/AdminAddProduct";
import AdminEditProduct from "../components/AdminEditProduct";
import AdminProducts from "../components/AdminProducts";

import AdminProductType from "../components/AdminProductType";
import AdminEditProductType from "../components/AdminEditProductType";
import AdminAddProductType from "../components/AdminAddProductType";

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
      <div style={{ display: "flex"}}>
        <Sidebar
          collapsed={collapsed}
          toggled={toggled}
          onToggle={handleToggleSidebar}
        >
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
                icon={<AddIcon />}
                component={<Link to="/admin-product-type" />}
              >
                Product Type
              </MenuItem>

              <MenuItem
                icon={<InventorySharpIcon />}
                component={<Link to="/admin-products" />}
              >
                Products
              </MenuItem>
              <hr></hr>

              <MenuItem icon={<LogoutIcon />} component={<Link to="/logout" />}>
                Logout
              </MenuItem>
            </Menu>
          </>
        </Sidebar>
        <div style={{ flex: 1 }}>
          {page === "admin-products" && <AdminProducts />}
          {page === "admin-add-product" && <AdminAddProduct />}
          {page === "admin-edit-product/:id" && <AdminEditProduct />}

          {page === "admin-add-product-type" && <AdminAddProductType />}
          {page === "admin-edit-product-type/:id" && <AdminEditProductType />}
          {page === "admin-product-type" && <AdminProductType />}

        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;
