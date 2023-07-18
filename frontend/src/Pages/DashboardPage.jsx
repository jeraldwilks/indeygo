import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import AdminDashboardPage from "./AdminDashboardPage";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import React, { useEffect, useState } from "react";
import ReceiptIcon from "@mui/icons-material/Receipt";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaTachometerAlt,
} from "react-icons/fa";
import SalesPage from "./SalesPage";
import AddSalePage from "./AddSalePage";
import EditSalePage from "./EditSalePage";
import AddFundraiserPage from "./AddFundraiserPage";
import FundraisersPage from "./FundraisersPage";
import EditFundraiserPage from "./EditFundraiserPage";
import OrganizationsPage from "./OrganizationsPage";
import AddOrganizationPage from "./AddOrganizationPage";
import EditOrganization from "./EditOrganizationPage";
import EditProfilePage from "./EditProfilePage";
import DashboardContent from "../components/DashboardContent";

const DashboardPage = ({ page }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);

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
      <div style={{ display: "flex", marginTop: 120 }}>
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
                icon={<AddBusinessIcon />}
                component={<Link to="/organizations" />}
              >
                Organizations
              </MenuItem>

              <MenuItem
                icon={<AttachMoneyIcon />}
                component={<Link to="/fundraisers" />}
              >
                Fundraisers
              </MenuItem>
              <MenuItem icon={<ReceiptIcon />} component={<Link to="/sales" />}>
                Sales
              </MenuItem>
              <hr></hr>

              <MenuItem icon={<LogoutIcon />} component={<Link to="/logout" />}>
                Logout
              </MenuItem>
            </Menu>
          </>
        </Sidebar>
        <div style={{ flex: 1 }}>
          {page === "organizations" && <OrganizationsPage />}
          {page === "add-organization" && <AddOrganizationPage />}
          {page === "edit-organization/:id" && <EditOrganization />}
          {page === "sales" && <SalesPage />}
          {page === "add-sale" && <AddSalePage />}
          {page === "edit-sale/:id" && <EditSalePage />}
          {page === "fundraisers" && <FundraisersPage />}
          {page === "add-fundraiser" && <AddFundraiserPage />}
          {page === "edit-fundraiser/:id" && <EditFundraiserPage />}
          {page === "edit-profile" && <EditProfilePage />}
          {page === "Dashboard" && <DashboardContent />}
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
