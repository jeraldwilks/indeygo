
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";

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
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#0B4D83",
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
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".9rem",
              color: "inherit",
              textDecoration: "none",
              marginLeft: "3rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link to="/" key="home" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
              <img
                src={logo}
                alt="Logo"
                style={{ height: 50, marginRight: 8 }}
              />
            </Link>
            <span>Indeygo</span>
          </Typography>

          <Box sx={{ flexGrow: 1 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "fit-content",
                marginLeft: "auto",
                marginRight: "3rem",
              }}
            >
              {pages.map((page) => (
                <Link to={page.toLowerCase()} key={page}>
                  <Button
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      marginLeft: "1rem",
                      marginRight: "1rem",
                    }}
                  >
                    {page}
                  </Button>
                </Link>
              ))}
            </Box>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleClick} sx={{ p: 0 }}>
                <Avatar alt="" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {settings.map((setting) => (
                <Link to={setting.toLowerCase()} key={setting}>
                  <MenuItem onClick={handleClose}>{setting}</MenuItem>
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














// I will delete the below piece of code after consulting with Hikmah: Rini


// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Avatar from "@mui/material/Avatar";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Container from "@mui/material/Container";
// import logo from "../assets/logo.jpg";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Toolbar from "@mui/material/Toolbar";
// import Tooltip from "@mui/material/Tooltip";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import { Link } from "react-router-dom";

// const pages = [
//   "About",
//   "Products",
//   "FundraisingInfo",
//   "FAQ",
//   "Blog",
//   "Contact",
// ];
// const settings = ["Login", "Register", "Logout"];

// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);
//   const [anchorElAbout, setAnchorElAbout] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleOpenAboutMenu = (event) => {
//     setAnchorElAbout(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   const handleCloseAboutMenu = () => {
//     setAnchorElAbout(null);
//   };

//   return (
//     <AppBar
//       position="fixed"
//       sx={{
//         backgroundColor: "#0B4D83",
//         // marginBottom: "1rem",
//         height: 100,
//         // paddingTop: ".1rem",
//       }}
//     >
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: "none", md: "flex" },
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".9rem",
//               color: "inherit",
//               textDecoration: "none",

//               marginRight: "5rem",
//               marginLeft: "3rem",
//             }}
//           >
//             <Link to="/" key="home">
//               <img
//                 src={logo}
//                 alt="Logo"
//                 style={{ height: 50, marginRight: 8 }} // Adjust the height and margin as needed
//               />
//             </Link>
//           </Typography>

//           <Box sx={{ flexGrow: 0.5, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: "block", md: "none" },
//               }}
//             >
//               {pages.map((page) => (
//                 <Link to={page} key={page}>
//                   <MenuItem onClick={handleCloseNavMenu}>
//                     <Typography textAlign="center">{page}</Typography>
//                   </MenuItem>
//                 </Link>
//               ))}
//             </Menu>
//           </Box>
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href=""
//             sx={{
//               mr: 2,
//               display: { xs: "flex", md: "none" },
//               flexGrow: 1,
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
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

//           <IconButton
//             aria-label="About Us Menu"
//             aria-controls="about-menu"
//             aria-haspopup="true"
//             onClick={handleOpenAboutMenu}
//             color="inherit"
//           >
//             {/* <MoreVertIcon /> */}
//           </IconButton>
//           <Menu
//             href="/about"
//             id="about-menu"
//             anchorEl={anchorElAbout}
//             anchorOrigin={{
//               vertical: "top",
//               horizontal: "right",
//             }}
//             keepMounted
//             transformOrigin={{
//               vertical: "top",
//               horizontal: "right",
//             }}
//             open={Boolean(anchorElAbout)}
//             onClose={handleCloseAboutMenu}
//           >
//             <MenuItem onClick={handleCloseAboutMenu}>Option 1</MenuItem>
//             <MenuItem onClick={handleCloseAboutMenu}>Option 2</MenuItem>
//             <MenuItem onClick={handleCloseAboutMenu}>
//               <Link to="/youtube-channel">YouTube Channel</Link>
//             </MenuItem>
//           </Menu>

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


