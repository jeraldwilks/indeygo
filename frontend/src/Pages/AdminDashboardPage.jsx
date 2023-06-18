import AdminProductType from "../components/AdminProductType";
import AdminProduct from "../components/AdminProduct";
import React from "react";
import { Link, NavLink } from 'react-router-dom';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { FaUser, FaAngleDoubleLeft, FaAngleDoubleRight, FaTachometerAlt, FaGem, FaList, FaRegLaughWink, FaHeart } from 'react-icons/fa';



const AdminDashboardPage = ({
  collapsed,
  toggled,
  handleToggleSidebar, 
  handleCollapsedChange,
  page
}) => {


  return (
    <>
<Sidebar
      collapsed={collapsed}
      toggled={toggled}
      onToggle={handleToggleSidebar}
      breakPoint="md"
    >
      <Menu iconShape="circle">
      <MenuItem icon={<FaTachometerAlt />}>Dashboard</MenuItem>
      <MenuItem icon={<FaGem />}>
            <Link to="/admin-product-type">Product Type</Link>
          </MenuItem>
          <MenuItem icon={<FaList />} onClick={<></>}>
            <Link to="/admin-product">Product</Link>
          </MenuItem>
      
   </Menu>
   </Sidebar>
      <div>
        {
          page === "admin-product" &&
      <AdminProduct />
        }
      </div>
      <div>
        {
          page === "admin-product-type" &&
      <AdminProductType />
        }
      </div>
    </>
  );
};

export default AdminDashboardPage;
