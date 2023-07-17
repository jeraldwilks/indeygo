import React from "react";

import Button from "@mui/material/Button";

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
import { Box } from "@mui/material";

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

export default function InfoRunFundraiser() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
       <div style={{ marginBottom: "50px" }}>Step 2</div>

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
                      src="./images/step2.png"
                      alt="Step 2"
                      style={{ width: "150px", height: "150px" 
                    
                    }}
                    />
                  </Box> 
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
       
        <Button variant="outlined" onClick={handleClickOpen}>



          Run Your Fundraiser
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
            Run Your Fundraiser
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              Pick a start and end date – we suggest running your fundraiser
              over 10-14 days and include two weekends. Goal setting is
              important to help motivate your group. Clearly communicate your
              goal with your participants as well as your customers.
            </Typography>
            <Typography gutterBottom>
              Collect the order forms and funds from your participants. Any
              cheques collected should be made out to your organization. Keep
              these order forms – you will need these when the participants pick
              up their orders. If you ran an online store, include these sales
              to your brochure sales total.
            </Typography>
            <Typography gutterBottom>
              Submit your order either online, fax or call the Indeygo Office.
              Orders for frozen goods need to be submitted in case lots (6
              units/case for Cookie Dough/Muffin Dough and 4 packs/case for
              Cinnamon/Sticky Buns – sorry no mixed cases). Other products can
              be submitted by units. Orders bound for Western Canada normally
              take 7-10 business days, and orders for Eastern Canada take 10-14
              business days. Your group will be invoiced upon ordering and we
              require payment prior to shipping.
              <p>
                **A comprehensive checklist is available in our Coordinator Info
                section
              </p>
            </Typography>
          </DialogContent>
          <DialogActions>
          <a href="/CoordinatorsChecklistInfo">
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#0B4D83" }}
                >
                  Coordinators Checklist
                </Button>
              </a>
          
          </DialogActions>
        </BootstrapDialog>
        
      </div>
    </>
  );
}
