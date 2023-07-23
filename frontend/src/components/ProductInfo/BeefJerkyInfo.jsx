import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import StarsIcon from "@mui/icons-material/Stars";

// Below are the imports for open dialog box
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";

//Dialog Box
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const Item = ({ children }) => (
  <Paper
    sx={{
      display: "flex",
      alignItems: "center", // Align icon and text vertically
      padding: "8px", // Add some spacing around the item
    }}
  >
    <StarsIcon sx={{ marginRight: "8px", color: "#0B4D83" }} />{" "}
    {/* Add margin to separate the icon */}
    {children}
  </Paper>
);

// Custom styles for the download button
const DownloadButton = styled(Button)({
  display: "flex",
  alignItems: "center",
  border: "2px solid #0B4D83",
  padding: "10px 20px",
  fontSize: "16px",
  fontWeight: "bold",
  fontPalette: "#0B4D83",
  marginTop: "30px",
});

const BeefJerkyInfo = () => {
  // download pdf logic here
  const handleDownloadPDF = () => {
    const pdfPath = "../pdfs/BeefJerky2022.pdf";
    window.open(pdfPath, "_blank");
  };

  //opening and closing the open dialog box
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid #D3D3D3",
          borderRadius: "8px",
          padding: "8px",
        }}
      >
        <Button
          variant="outlined"
          style={{
            width: "250px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "none", // Remove the button border
            padding: 0, // Remove the default padding
          }}
          onClick={handleClickOpen}
        >
          <div>
            <img
              src="./images/productbeefjerky.jpeg"
              alt="Cinnamon & Sticky Bun"
              style={{ width: "250px", height: "250px" }}
            />
          </div>
          <div
            style={{
              fontFamily: "'Open Sans', sans-serif",
              color: "#0b4d83",
              fontSize: "16px",
              textTransform: "none", 
            }}
          >
            Beef Jerky
          </div>
        </Button>
      </div>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <img
            src="../images/productbeefjerky.jpeg"
            alt="Cinnamon & Sticky Bun"
            style={{
              width: "100%",
              height: "250px", // Adjust the height as needed
              objectFit: "cover",
            }}
          />
          Cinnamon & Sticky Buns Fundraiser
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <Stack spacing={2}>
              <Item>Make up to 30% Profit per pack</Item>
              <Item>
                A delicious and convenient snack-high in protein and low in fat
              </Item>
              <Item>
                Perfect fundraising product for sports teams and clubs
              </Item>
              <Item>
                Fundraise with brochures or sell directly to your supporters by
                pre-ordering what you want to sell
              </Item>
              <Item>Made fresh to order with 100% Canadian Beef</Item>
              <Item>
                Each bag contains 200 grams ** Beef Jerky only available in
                Alberta
              </Item>
            </Stack>
          </Typography>
        </DialogContent>
        <DialogActions
          style={{
            height: "90px", // Adjust the height as needed
            display: "flex",
            justifyContent: "center", // Equal spacing on either side
            marginBottom: "30 px",
          }}
        >
          <DownloadButton onClick={handleDownloadPDF}>
            <DownloadForOfflineIcon sx={{ marginRight: "8px" }} />
            Beef Jerky Flavours
          </DownloadButton>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
};

export default BeefJerkyInfo;

// The below code is to render product details by page : do not delete. may use it later

// import * as React from "react";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Stack from "@mui/material/Stack";
// import { styled } from "@mui/material/styles";
// import StarsIcon from "@mui/icons-material/Stars";
// import { Button } from "@mui/material";
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "left",
//   color: theme.palette.text.secondary,
// }));

// // Custom styles for the button
// const DownloadButton = styled(Button)({
//   border: "2px solid #0B4D83", // Replace #000 with your desired border color
//   padding: "10px 20px",
//   fontSize: "16px",
//   fontWeight: "bold",
//   fontPalette: "#0B4D83",
//   marginTop: "30px",
// });

// // download pdf button here

// const BeefJerkyInfo = () => {
//   const handleDownloadPDF = () => {
//     const pdfPath = "../pdfs/BeefJerky2022.pdf";
//     window.open(pdfPath, "_blank");
//   };

//   return (
//     <>
//     <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
//       <div style={{ position: "relative" }}>
//         <img
//           src="../images/productbeefjerky.jpeg"
//           alt="Beef Jerky Image"
//           style={{
//             width: "1000px",
//             height: "250px", // Adjust the height as needed
//             objectFit: "cover",
//           }}
//         />
//         <div
//           style={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             color: "#fff",
//             fontSize: "32px",
//             fontWeight: "bold",
//           }}
//         >
//           Beef Jerky Fundraiser
//         </div>
//       </div>

//       <div
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           alignItems: "center",
//           justifyContent: "center",
//           // minHeight: "100vh",
//         }}
//       >
//         <Box sx={{ width: "100%", position: "relative", ml: 30 }}>
//           <Stack spacing={4}>
//             <Item>
//               <StarsIcon /> Make 30% Profit per bag
//             </Item>
//             <Item>
//               <StarsIcon /> A delicious and convenient snack-high in protein and
//               low in fat
//             </Item>
//             <Item>
//               <StarsIcon /> Perfect fundraising product for sports teams and
//               clubs
//             </Item>
//             <Item>
//               <StarsIcon /> Fundraise with brochures or sell directly to your
//               supporters by pre-ordering what you want to sell
//             </Item>
//             <Item>
//               <StarsIcon /> Made fresh to order with 100% Canadian Beef
//             </Item>
//             <Item>
//               <StarsIcon /> Each bag contains 200 grams ** Beef Jerky only
//               available in Alberta
//             </Item>
//           </Stack>
//         </Box>
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <img
//             src="../images/BeefJerkyFrontPage.jpeg"
//             alt="Beef Jerky Image"
//             style={{
//               width: "50%",
//               height: "150%", // Adjust the height as needed
//               objectFit: "cover",
//             }}
//           />
//           <DownloadButton onClick={handleDownloadPDF}>
//             Download Brochure
//           </DownloadButton>
//         </div>
//       </div>
//       </Box>
//     </>
//   );
// };

// export default BeefJerkyInfo;
