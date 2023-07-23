import React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

// Below are the imports for open dialog box
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

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

export default function InfoContactUs() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
     <div style={{ marginBottom: "50px" }}>Step 1</div>

<Box
  sx={{
    border: "5px dotted #0b4d83",
    borderRadius: "25px",
    p: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "30px",
  }}
>
  <img
    src="./images/step1.png"
    alt="Step 1"
    style={{ width: "150px", height: "150px" }}
  />
</Box>
      <div>
        <Button variant="outlined" style={{ width: "250px", fontFamily: "'Open Sans', sans-serif", textTransform: "none", fontSize: "16px" }} onClick={handleClickOpen}>
          Contact Us
        </Button>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          >
            Contact Us
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
            Contact Indeygo to request your order forms. Keep it simple – choose
            one or two product types from our awesome lineup. Ask us about free
            shipping to your area.
            </Typography>
            <Typography gutterBottom>
            <p>
            <LocalPhoneIcon style={{ verticalAlign: "middle" }} /> Phone:
            1-877-463-3946
          </p>
          <p>
            <EmailIcon style={{ verticalAlign: "middle" }} /> Email:
            info@indeygo.com
          </p>
          <p>Fill out one of our online forms</p>
            </Typography>
           
          </DialogContent>
          <DialogActions>
          <div style={{ display: "flex", gap: "50px" }}>
            <a href="/Contact">
              <Button
                variant="contained"
                style={{ backgroundColor: "#0B4D83" }}
              >
                I Need More Info
              </Button>
            </a>

            <div style={{ marginBottom: "20px" }} />
            <a href="/Contact">
              <Button
                variant="contained"
                style={{ backgroundColor: "#0B4D83" }}
              >
                I'm Ready To Book My Fundraiser
              </Button>
            </a>
          </div>


          </DialogActions>
        </BootstrapDialog>
      </div>

    </>
  );
}

