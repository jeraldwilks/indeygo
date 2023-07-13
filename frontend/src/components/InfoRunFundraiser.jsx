import React from "react";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';

// import Dialog from '@mui/material/Dialog';
// import DialogContent from '@mui/material/DialogContent';

const InfoRunFundraiser = () => {
  return (
    <>
      <div
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
          <h2>Run Your Fundraiser</h2>
          
          <ul>
            Pick a start and end date – we suggest running your fundraiser over
            10-14 days and include two weekends. Goal setting is important to
            help motivate your group. Clearly communicate your goal with your
            participants as well as your customers.
          </ul>
          
          <ul>
            Collect the order forms and funds from your participants. Any
            cheques collected should be made out to your organization. Keep
            these order forms – you will need these when the participants pick
            up their orders. If you ran an online store, include these sales to
            your brochure sales total.
          </ul>
          
          <ul>
            Submit your order either online, fax or call the Indeygo Office.
            Orders for frozen goods need to be submitted in case lots (6
            units/case for Cookie Dough/Muffin Dough and 4 packs/case for
            Cinnamon/Sticky Buns – sorry no mixed cases). Other products can be
            submitted by units. Orders bound for Western Canada normally take
            7-10 business days, and orders for Eastern Canada take 10-14
            business days. Your group will be invoiced upon ordering and we
            require payment prior to shipping.
          </ul>
          
          <ul>**A comprehensive checklist is available in our Coordinator Info section</ul>
          <br/>
          <Button color="primary" variant="contained" style={{ backgroundColor: "#0b4d83" }}>Coordinators Checklist</Button>

        </Box>
      </div>
    </>
  );
};

export default InfoRunFundraiser;

// The below code is kept to implement a mui dialog box for the above context: I need to sort it during office hours

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
