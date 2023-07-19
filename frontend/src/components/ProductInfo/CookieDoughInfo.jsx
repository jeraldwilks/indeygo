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

//customizing theme for mui stack

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "left",
//   color: theme.palette.text.secondary,
// }));

const Item = ({ children }) => (
  <Paper
    sx={{
      display: "flex",
      alignItems: "center", // Align icon and text vertically
      padding: "8px", // Add some spacing around the item
    }}
  >
    <StarsIcon sx={{ marginRight: "8px", color: "#0B4D83"  }} /> {/* Add margin to separate the icon */}
    {children}
  </Paper>
);


// Custom styles for the download button
const DownloadButton = styled(Button)({
  border: "2px solid #0B4D83", // Replace #000 with your desired border color
  padding: "10px 20px",
  fontSize: "16px",
  fontWeight: "bold",
  fontPalette: "#0B4D83",
  marginTop: "30px",
});




const CookieDoughInfo = () => {

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
          border: "0.5px solid #D3D3D3",
          borderRadius: "8px",
          padding: "8px",
        }}
      >
        <img
          src="./images/productcookiedough.jpeg"
          alt="Cookie DOugh Image"
          style={{ width: "150px", height: "150px" }}
        />
        <Button
          variant="outlined"
          style={{ width: "250px" }}
          onClick={handleClickOpen}
        >
          Cookie Dough
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
          Cookie Dough Fundraiser
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <Stack spacing={2}>
              <Item>
                Typically make between 30% to 40% Profit
              </Item>
              <Item>
                 10 Awesome Classic Flavours. Click HERE for
                flavours
              </Item>
              <Item>
                Choose either a 2.7 lb tub or a box of 48
                pre-portioned cookies
              </Item>
              <Item>
                Macaroon Cookie Dough Available-have a treat
                without the wheat! * not certified gluten free- made without
                wheat
              </Item>
              <Item>
                Also available-our famous Doggie Dough! A healthy,
                nutritious and tail wagging temptation for our loyal companions
              </Item>
              <Item>
                 Over 70% of the ingredients are sourced from
                Canadian farmers!
              </Item>
              <Item>
                 Dough stays fresh for months in the freezer can be
                thawed and refrozen
              </Item>
              <Item>
              View our Ingredients List HERE *Indeygo reserves
                the right to offer substitutions based on availability
              </Item>
            </Stack>
          </Typography>
          <Typography gutterBottom>
            <p>Fill out one of our online forms</p>
          </Typography>
        </DialogContent>
        <DialogActions>
          <div style={{ display: "flex", gap: "0px" }}>
            <a href="/Contact">
            <DownloadButton onClick={handleDownloadPDF}>
            Download Brochure
          </DownloadButton>
            </a>
          </div>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
};

export default CookieDoughInfo;















{
  /* <Button variant="outlined" style={{ width: "250px"}} onClick={handleClickOpen}>
          Contact Us
        </Button>

        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
           <BootstrapDialog/>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
       
       
        <Box sx={{ width: "850px", position: "relative" }}>
        <div style={{ position: "relative" }}>
        <img src= "../images/productcookiedough.jpeg" alt="Cookie Dough Image" style={{   width: "100%",
                height: "250px", // Adjust the height as needed
                objectFit: "cover", }}  />
                <div  style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#fff",
                fontSize: "32px",
                fontWeight: "bold",
              }}>
          Cookie Dough Fundraiser
          </div>
        </div>
        
          <Stack spacing={2}>
            <Item><StarsIcon/>   Typically make between 30% to 40% Profit</Item>
            <Item><StarsIcon/>   10 Awesome Classic Flavours. Click HERE for flavours</Item>
            <Item>
            <StarsIcon/>    Choose either a 2.7 lb tub or a box of 48 pre-portioned cookies
            </Item>
            <Item>
            <StarsIcon/>    Macaroon Cookie Dough Available-have a treat without the wheat! *
              not certified gluten free- made without wheat
            </Item>
            <Item>
            <StarsIcon/>    Also available-our famous Doggie Dough! A healthy, nutritious and
              tail wagging temptation for our loyal companions
            </Item>
            <Item>
            <StarsIcon/>    Over 70% of the ingredients are sourced from Canadian farmers!
            </Item>
            <Item>
            <StarsIcon/>    Dough stays fresh for months in the freezer can be thawed and
              refrozen
            </Item>
            <Item>
            <StarsIcon/>    View our Ingredients List HERE *Indeygo reserves the right to
              offer substitutions based on availability
            </Item>
          </Stack>
        </Box>
       
      </div>
       */
}
