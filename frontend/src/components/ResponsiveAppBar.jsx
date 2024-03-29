import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { NestedDropdown } from "mui-nested-menu";
import { useAuth } from "../providers/AuthProvider";

const pages = [
  {
    label: "About",
    hasDropdown: false,
  },
  {
    label: "Products",
    hasDropdown: false,
  },
  {
    label: "Fundraising Calculator",
    hasDropdown: false,
    menuItems: [
      {
        label: "Fundraising Calculator",
        callback: () => console.log("FundraisingInfo > FundraisingInfo 1"),
      },
      {
        label: "Fundraising Guide",
        callback: () => console.log("FundraisingInfo > FundraisingInfo 2"),
      },
      {
        label: "How does a Fundraiser Work",
        callback: () => console.log("FundraisingInfo > FundraisingInfo 1"),
      },
      {
        label: "Coordinators Checklist",
        callback: () => console.log("FundraisingInfo > FundraisingInfo 2"),
      },
      {
        label: "Need More Information",
        callback: () => console.log("FundraisingInfo > FundraisingInfo 1"),
      },
      {
        label: "Register Online Store",
      },
      {
        label: "Fundraising Profit",
      },
    ],
  },
  {
    label: "FAQ",
    menuItems: [
      { label: "Blog", callback: () => console.log("FundraisingInfo > Blog") },
    ],
  },
  {
    label: "Contact",
    hasDropdown: false,
  },
];

function ResponsiveAppBar() {
  const { user } = useAuth();
  const [anchorElNav, setAnchorElNav] = useState();
  const [anchorElUser, setAnchorElUser] = useState();
  const settings = user ? ["Dashboard", "Logout"] : ["Login", "Register"];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleLogout = () => {
    handleCloseUserMenu();
  };

  const handleLogin = () => {
    handleCloseUserMenu();
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#0B4D83",
        marginBottom: "2rem",
        height: 68,
        paddingTop: ".1rem",
        color: "#0B4D83",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "sans-serif",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#0b4d83",
              textDecoration: "none",
            }}
          >
            <Link to="/" key="home">
              <img
                src="Logo.jpg"
                alt="Logo"
                style={{ height: 66, marginRight: 300, marginLeft: 10 }} // Adjust the height and margin as needed
              />
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="white"
            >
              <MenuIcon />
            </IconButton>
            {/* Navbar Display */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link
                  to={page.label}
                  key={page.label}
                  style={{ height: 0, color: "#0b4d83" }} // Adjust the height and margin as needed
                >
                  {page.hasDropdown ? (
                    <NestedDropdown
                      key={page.label}
                      ButtonProps={{ variant: "white" }}
                      menuItemsData={{
                        label: page.label,
                        items: page.menuItems.map((menuItem) => ({
                          label: menuItem.label,
                          callback: menuItem.callback,
                        })),
                      }}
                      anchorEl={anchorElNav}
                      onClose={handleCloseNavMenu}
                    >
                      <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                        {page.label}
                      </MenuItem>
                    </NestedDropdown>
                  ) : (
                    <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                      {page.label}
                    </MenuItem>
                  )}
                </Link>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "sans-serif",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#0b4d83",
              textDecoration: "none",
            }}
          >
            <Link to="/" key="home">
              <img
                src="Logo.jpg"
                alt="Logo"
                style={{ height: 50, marginRight: 1 }}
              />{" "}
            </Link>
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", color: "white" },
            }}
          >
            {pages.map((page) => (
              <Button
                component={Link}
                to={page.label}
                key={page.label}
                sx={{ textDecoration: "none", color: "white" }}
              >
                {page.hasDropdown ? (
                  <NestedDropdown
                    ButtonProps={{ variant: "white" }}
                    key={page.label}
                    menuItemsData={{
                      label: page.label,
                      items: page.menuItems.map((menuItem) => ({
                        label: menuItem.label,
                        callback: menuItem.callback,
                      })),
                    }}
                    anchorEl={anchorElNav}
                    onClose={handleCloseNavMenu}
                  >
                    <Button key={page.label} onClick={handleCloseNavMenu}>
                      {/* <Typography sx={{color:"white", fontSize:"50px"}} textAlign="center">{page.label}</Typography> */}
                    </Button>
                  </NestedDropdown>
                ) : (
                  <Typography
                    sx={{ color: "white", fontSize: "14px" }}
                    textAlign="center"
                  >
                    {page.label}
                  </Typography>
                )}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, height: 50, marginRight: 1 }}
              >
                <Avatar alt="" src="" />
              </IconButton>
            </Tooltip>

            {/* User Menu/Settings Display */}
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <Link to={setting} key={setting}>
                  <MenuItem
                    key={setting}
                    onClick={setting === "Login" ? handleLogin : handleLogout}
                    // onClick={handleCloseUserMenu}
                    sx={{
                      "&:hover": {
                        backgroundColor: "#F7E86A",
                      },
                    }}
                  >
                    <Typography textAlign="center" sx={{ color: "#0B4D83" }}>
                      {setting}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
