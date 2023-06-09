import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { Select, MenuItem } from "@mui/material";


// Declaring the form data
// const MyForm = () => {
//     const [formData, setFormData] = useState({
//       firstName: '',
//       lastName: '',
//       email: '',
//       phoneNumber: '',
//       organisationName: '',
//       organisationType: '',
//       participants: '',
//       deliveryCity: '',
//       comments: '',
//     });
  
//     const handleChange = (e) => {
//       setFormData({
//         ...formData,
//         [e.target.name]: e.target.value,
//       });
//     };
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
  
//       // Send the form data to the backend
//       fetch('/api/submit-form', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           // Handle the response from the backend if needed
//           console.log(data);
//         })
//         .catch((error) => {
//           // Handle any errors that occurred during the request
//           console.error(error);
//         });
  
//       // Clear the form fields
//       setFormData({
//       firstName: '',
//       lastName: '',
//       email: '',
//       phoneNumber: '',
//       organisationName: '',
//       organisationType: '',
//       participants: '',
//       deliveryCity: '',
//       comments: '',
//       });
//     };
  


//For changing the values in drop down
const Inquiry = () => {
  const [type, setType] = React.useState("1");

  const handleChange = (event) => {
    setType(event.target.value);
  };

  return (
    <>
    <form>
    {/* <ThemeProvider theme={customTheme(outerTheme)}> */}
      <div>Inquiry Form</div>

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          required
          label="First Name"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          required
          label="Last Name"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          required
          label="Email"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Organisation Name"
          variant="outlined"
        />
        {/* <TextField id="outlined-basic" label="Type" variant="outlined" /> */}

        {/* <Box sx={{ minWidth: 120 }}> */}
      {/* <FormControl> */}
        {/* <InputLabel id="outlined-basic">Organisation Type</InputLabel> */}
        <Select
          id="outlined-basic"
          value={type}
          label="Organization Type"
          variant="outlined"
          onChange={handleChange}
          sx={{
            marginTop: 35,
            width: 250,
            height: 50,
          }}
        >
          <MenuItem value={1}>Organisation Type</MenuItem>
          <MenuItem value={2}>Gyms</MenuItem>
          <MenuItem value={3}>Hospitals</MenuItem>
          <MenuItem value={4}>Schools</MenuItem>
          <MenuItem value={5}>Others</MenuItem>
        </Select>
        
        <TextField
          id="outlined-basic"
          label="Approximate no of Participants"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Delivery City"
          variant="outlined"
        />
        <TextField
        fullWidth
          id="fullWidth"
          required
          label="Questions/Comments"
          variant="outlined"
        />
        <Box component="div" sx={{ visibility: "hidden" }}>
          Invisible container
        </Box>
        <Stack spacing={2} direction="row" >
          <Button id="outlined-basic" variant="contained" type="submit">Submit</Button>
        </Stack>
      </Box>
    </form>
    </>
  );
};

export default Inquiry;
