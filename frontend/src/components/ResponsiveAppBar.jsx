import * as React from "react";
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
// import logo from "../assets/logo.jpg";
import DropdownMenu from "./DropdownMenu";

const pages = [
  "About",
  "Products",
  "FundraisingInfo",
  "FAQ",
  "Blog",
  "Contact",
];
const settings = ["Login", "Register", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
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
        height: 60,
        paddingTop: ".3rem",
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
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to="/" key="home">
              <img
                src="Logo.jpg"
                alt="Logo"
                style={{ height: 60, marginRight: 8 }} // Adjust the height and margin as needed
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
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link to={page} key={page}>
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              </Link>
              ))}
            </Menu>
          {/* <DropdownMenu pages={pages} handleClose={handleCloseNavMenu} /> */}
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
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
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
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link to={page} key={page}>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    marginLeft: "8rem",
                    marginRight: "0rem",
                  }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <Link to={setting} key={setting}>
                  <MenuItem
                    key={setting}
                    onClick={handleCloseUserMenu}
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





// Rini's old code, replaced with reponsive code - Hikmah 
// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import { Link } from "react-router-dom";
// import logo from '../assets/logo.jpg';

// const pages = [
//   "About",
//   "Products",
//   "FundraisingInfo",
//   "FAQ",
//   "Blog",
//   "Contact",
// ];
// const settings = ["Login", "Register", "Dashboard", "Logout"];
// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);
//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };
//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };
//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar
//       position="fixed"
//       sx={{
//         backgroundColor: "#0B4D83",
//         marginBottom: "2rem",
//         height: 70,
//         paddingTop: ".3rem",
//       }}
//     >
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Typography variant="h6" noWrap>
//             <Link to="/" key="home">
//               <img
//                 src={logo}
//                 alt="Logo"
//                 style={{ height: 70, marginRight: 8 }} // Adjust the height and margin as needed
//               />
//             </Link>
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}></Box>{" "}
//           {/* Close the Box component here */}
//           <Typography variant="h5" noWrap>
//             <Link to="/" key="home">
//               <img
//                 src={logo}
//                 alt="Logo"
//                 style={{ height: 70, marginRight: 8 }} // Adjust the height and margin as needed
//               />
//             </Link>
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//             {pages.map((page) => (
//               <Link to={page} key={page}>
//                 <Button
//                   onClick={handleCloseNavMenu}
//                   sx={{
//                     my: 2,
//                     color: "white",
//                     display: "block",
//                     marginRight: "6rem",
//                     marginLeft: "6rem",
//                   }}
//                 >
//                   {page}
//                 </Button>
//               </Link>
//             ))}
//           </Box>
//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="" src="" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: "45px" }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <Link to={setting} key={setting}>
//                   <MenuItem onClick={handleCloseUserMenu}>
//                     <Typography textAlign="center">{setting}</Typography>
//                   </MenuItem>
//                 </Link>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default ResponsiveAppBar;
