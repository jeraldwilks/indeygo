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
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
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
                I'm Ready To Book My Fundraiser
              </Button>
            </a>
          </div>


          </DialogActions>
        </BootstrapDialog>
      </div>

{/* Below code may not be required  */}

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
          <h2>Contact Us</h2>
          <p>
            Contact Indeygo to request your order forms. Keep it simple – choose
            one or two product types from our awesome lineup. Ask us about free
            shipping to your area.
          </p>
          <p>
            <LocalPhoneIcon style={{ verticalAlign: "middle" }} /> Phone:
            1-877-463-3946
          </p>
          <p>
            <EmailIcon style={{ verticalAlign: "middle" }} /> Email:
            info@indeygo.com
          </p>
          <p>Fill out one of our online forms</p>
          <div style={{ display: "flex", gap: "10px" }}>
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
                I'm Ready To Book My Fundraiser
              </Button>
            </a>
          </div>
        </Box>
      </div> */}
    </>
  );
}

// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
// import Typography from '@mui/material/Typography';

// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//   '& .MuiDialogContent-root': {
//     padding: theme.spacing(2),
//   },
//   '& .MuiDialogActions-root': {
//     padding: theme.spacing(1),
//   },
// }));

// function BootstrapDialogTitle(props) {
//   const { children, onClose, ...other } = props;

//   return (
//     <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
//       {children}
//       {onClose ? (
//         <IconButton
//           aria-label="close"
//           onClick={onClose}
//           sx={{
//             position: 'absolute',
//             right: 8,
//             top: 8,
//             color: (theme) => theme.palette.grey[500],
//           }}
//         >
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </DialogTitle>
//   );
// }

// BootstrapDialogTitle.propTypes = {
//   children: PropTypes.node,
//   onClose: PropTypes.func.isRequired,
// };

// export default function CustomizedDialogs() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Open dialog
//       </Button>
//       <BootstrapDialog
//         onClose={handleClose}
//         aria-labelledby="customized-dialog-title"
//         open={open}
//       >
//         <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
//           Modal title
//         </BootstrapDialogTitle>
//         <DialogContent dividers>
//           <Typography gutterBottom>
//             Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//             dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//             consectetur ac, vestibulum at eros.
//           </Typography>
//           <Typography gutterBottom>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
//             Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
//           </Typography>
//           <Typography gutterBottom>
//             Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
//             magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
//             ullamcorper nulla non metus auctor fringilla.
//           </Typography>
//         </DialogContent>
//         <DialogActions>
//           <Button autoFocus onClick={handleClose}>
//             Save changes
//           </Button>
//         </DialogActions>
//       </BootstrapDialog>
//     </div>
//   );
// }
