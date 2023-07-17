import React from "react";
import Box from "@mui/material/Box";

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
import { Button } from "@mui/material";

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


export default function InfoProductDelivery() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
    

<div>
<div style={{ marginBottom: "50px" }}>Step 3</div>
<Box
                    sx={{
                      border: "5px dotted #0b4d83",
                      borderRadius: "25px",
                      p: "8px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    
                    <img
                      src="./images/step3.png"
                      alt="Step 3"
                      style={{ width: "150px", height: "150px" }}
                    />
                  </Box>
        <Button variant="outlined" onClick={handleClickOpen}>
          Deliver Product
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
            Deliver Product
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
            When delivery day arrives, make sure you have a few volunteers to help
        sort and distribute the order using the original order forms. Count
        everything upon delivery, ensure nothing is damaged or dented. Mark any
        discrepancies or damage on the waybill. Sort and send the product home
        with your happy participants and customers.
            </Typography>
           
          </DialogContent>
          {/* <DialogActions>
            <div style={{ display: "flex", gap: "0px" }}>
              <a href="/Contact">
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#0B4D83" }}
                >
                  I Need More Info
                </Button>
              </a>
              <a href="/Contact">
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#0B4D83" }}
                >
                  Deliver Product
                </Button>
              </a>
            </div>
          </DialogActions> */}
        </BootstrapDialog>
      </div>

     {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "16px",
            marginBottom: "16px",
            marginTop: "50px",
            maxWidth: "500Px",
            alignItems: "center",
          }}
        >
    
    
      <h2>Deliver Product</h2>
      
      <ul>
        When delivery day arrives, make sure you have a few volunteers to help
        sort and distribute the order using the original order forms. Count
        everything upon delivery, ensure nothing is damaged or dented. Mark any
        discrepancies or damage on the waybill. Sort and send the product home
        with your happy participants and customers.
      </ul>
      
      </Box>
    </div> */}
    </>
  );
};


