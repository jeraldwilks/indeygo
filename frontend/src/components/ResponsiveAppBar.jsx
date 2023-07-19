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
    hasDropdown: true,

    menuItems: [
      {
        label: "Cookie Dough",
        callback: () => console.log("Products > Cookie Dough"),
      },
      {
        label: "Muffin Dough",
        callback: () => console.log("Products > Muffin Dough"),
      },
      {
        label: "Cinnamon & Sticky Bun",
        callback: () => console.log("Products > Cinnamon & Sticky Bun"),
      },
      {
        label: "Coffee & tea",
        callback: () => console.log("Products > Coffee & Tea"),
      },
      {
        label: "Beef Jerky",
        callback: () => console.log("Products > Beef Jerky"),
      },
      {
        label: "Harvest Bundle",
        callback: () => console.log("Products > Harvest Bundle"),
      },
      {
        label: "Spring Planters & Herbs",
        callback: () => console.log("Products > Spring Planters & Herbs"),
      },
      {
        label: "Doggie Dough",
        callback: () => console.log("Products > Doggie Dough"),
      },
    ],
  },
  {
    label: "FundraisingInfo",
    hasDropdown: true,
    menuItems: [
      {
        label: "Fundraising Guide",
        callback: () => console.log("FundraisingInfo > FundraisingInfo 1"),
      },
      {
        label: "How does a Fundraiser work",
        callback: () => console.log("FundraisingInfo > FundraisingInfo 2"),
      },
      {
        label: "Coordinators Checklist",
        callback: () => console.log("FundraisingInfo > FundraisingInfo 1"),
      },
      {
        label: "I Need More Info",
        callback: () => console.log("FundraisingInfo > FundraisingInfo 2"),
      },
      {
        label: "I am Ready to Book Ny fundraiser",
        callback: () => console.log("FundraisingInfo > FundraisingInfo 1"),
      },
      {
        label: "I am Ready to Submit my Final Group Bulk Order",
      },
      {
        label: "I wish to Register for an Online Store",
      },
      {
        label: "Fundraising Profit",
      },
    ],
  },
  {
    label: "FAQ",
    // hasDropdown: true,
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
                style={{ height: 66, marginRight: 350, marginLeft: 15 }} // Adjust the height and margin as needed
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
              color="inherit"
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
                  style={{ height: 0, color: "#0b4d83",  }} // Adjust the height and margin as needed
                >
                  {page.hasDropdown ? (
                    <NestedDropdown
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
                      <MenuItem
                        key={page.label}
                        onClick={handleCloseNavMenu}
                        sx={{
                          display: "flex",
                          justifyContent: "left",
                          "&:hover": {
                            backgroundColor: "#F7E86A",
                            color: "#0B4D83",
                          },
                        }}
                      >
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
                style={{ height: 50, marginRight: 8 }}
              />{" "}
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex", color: "white", } }}>
            {pages.map((page) => (
              <Link to={page.label} key={page.label}  style={{ textDecoration: "none"  }}>
                {page.hasDropdown ? (
                  <NestedDropdown
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
                    <Button
                      key={page.label}
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        color: "white",
                        display: "block",
                        marginLeft: "8rem",
                        marginRight: "0rem",
                        "&:hover": {
                          backgroundColor: "#F7E86A",
                          color: "#0B4D83",
                        },
                      }}
                    >
                      {page.label}
                    </Button>
                  </NestedDropdown>
                ) : (
                  <Button key={page.label} component={Link} to={page.label}>
                    {page.label}
                    <Typography textAlign="center"></Typography>
                  </Button>
                )}
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, height: 50, marginRight: 9 }}
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
