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

const MuffinDoughInfo = () => {
  // download pdf logic here
  const handleDownloadPDF = () => {
    const pdfPath = "../pdfs/CinnamonBun2022.pdf";
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
      src="./images/productcinnamonstickybun.jpeg"
      alt="Cinnamon & Sticky Bun"
      style={{ width: "250px", height: "250px" }}
    />
  </div>
  <div>Cinnamon & Sticky Bun</div>
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
            src="../images/productcinnamonstickybun.jpeg"
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
              <Item>8 buns/pack - sold in case lots of 4</Item>
              <Item>
                Already baked ~ thaw and serve. Reheat in a microwave or oven
                for a warm treat
              </Item>
              <Item>
                Cinnamon Buns are made with a delicious cream cheese frosting
              </Item>
              <Item>
                Sticky Buns are covered in a sweet gooey coating ~ get out your
                napkin!
              </Item>
              <Item>Can be thawed and refrozen</Item>
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
            Cinnamon & Sticky Buns
          </DownloadButton>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
};

export default MuffinDoughInfo;
