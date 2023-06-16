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
  handleCollapsedChange
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
      
   </Menu>
   </Sidebar>
<AdminProductType />
      <br />
      <br />
      <AdminProduct />
    </>
  );
};

export default AdminDashboardPage;
