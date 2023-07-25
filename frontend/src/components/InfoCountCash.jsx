import React from "react";
import Box from "@mui/material/Box";

// Below are the imports for open dialog box
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
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

export default function InfoCountCash() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div style={{ marginBottom: "50px" }}>Step 4</div>
   
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
          src="./images/step4.png"
          alt="Step 4"
          style={{ width: "150px", height: "150px" }}
        />
      </Box>

      <div 
        >
        <Button variant="outlined" style={{ width: "250px" , fontFamily: "'Open Sans', sans-serif", textTransform: "none", fontSize: "16px" }} onClick={handleClickOpen}>
          Count Your Cash
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
            Count Your Cash
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              <p>Cookie Dough and Muffin Dough (tubs)</p>
              <p>Make up to 36%or $7.75/tub</p>
              <p>Cookie dough Pre-portioned</p>
              <p>Make up to 25% or $5.75/box</p>
              <p>Cinnamon and Sticky Buns</p> 
              <p>Make up to 30% or $4.25/pack</p>
              <p>Coffee/Tea</p>
              <p>Make up to 30% or $6/bag</p>
              <p>Beef Jerky</p>
              <p>Make up to 30% or $6/pack Spring</p>
              <p>Planters and Herbs</p>
              <p>Make up to 30% or $8/basket</p>
              <p>
                * only available in Edmonton, Red Deer, Calgary and surrounding
                areas
                </p>
              <p>Harvest Veggie</p>
              Bundles Make up to 30% or $6/bundle
              <p>
                * only available in Edmonton, Red Deer, Calgary and surrounding
                areas
              </p>
            </Typography>
          </DialogContent>
        </BootstrapDialog>
      </div>
    </>
  );
}
