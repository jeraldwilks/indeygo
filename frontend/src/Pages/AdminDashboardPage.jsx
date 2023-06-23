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
import AdminAddProduct from "../components/AdminAddProduct";
import AdminProducts from "../components/AdminProducts";
import AdminEditProduct from "../components/AdminEditProduct";

const AdminDashboardPage = ({ page }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);

  const handleToggleSidebar = () => {
    setToggled(!toggled);
  };

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <Sidebar
        collapsed={collapsed}
        toggled={toggled}
        onToggle={handleToggleSidebar}
      >
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
          <Link to="/admin-products">
            <MenuItem icon={<FaList />}>Products</MenuItem>
          </Link>
        </Menu>
      </Sidebar>
      <div>
        {page === "admin-add-product" && <AdminAddProduct />}
        {page === "admin-products" && <AdminProducts />}
        {page === "admin-edit-product/:id" && <AdminEditProduct />}
        {page === "admin-product-type" && <AdminProductType />}
      </div>
      <div></div>
    </>
  );
};

export default AdminDashboardPage;
