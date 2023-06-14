import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAuth } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import CookieIcon from "@mui/icons-material/Cookie";

const theme = createTheme();



const InquiryPage = () => {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const firstName = data.get("firstName");
        const lastName = data.get("lastName");
        const email = data.get("email");
        const phoneNumber = data.get("phoneNumber");
        const organisationName = data.get("organisationName");
        const organisationType = data.get("organisationType");
        const participants = data.get("participants");
        const deliveryCity = data.get("deliveryCity");
        const comments = data.get("comments");
        // const allowExtraEmails = data.get("allowExtraEmails");
    //     const success = await (
    //       firstName,
    //       lastName,
    //       email.toLowerCase(),
    //       phoneNumber,
    //       organisationName,
    //       organisationType,
    //       participants,
    //       deliveryCity,
    //       comments
    //     );
    
    //     if (success === true) {
    //       await alert("Successfully Registered!");
    //       navigate("/Dashboard");
    //     } else {
    //       alert(success);
    //     }
    //   };

    try {
        await fetch('/api/inquiry', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            phoneNumber,
            organisationName,
            organisationType,
            participants,
            deliveryCity,
            comments,
          }),
        });
        alert('Form submitted successfully!');
        navigate('/Dashboard');
      } catch (error) {
        console.error('Failed to submit form:', error);
        alert('Form submission failed');
      }
    };


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Get in touch with us to know more!!
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="First name"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phoneNumber"
                  label="Phone Number"
                  name="phoneNumber"
                  autoComplete="phoneNumber"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="organizationName"
                  label="Organization Name"
                  type="organizationName"
                  id="organizationName"
                  autoComplete="organizationName"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="organizationType"
                  label="Organization Type"
                  type="organizationType"
                  id="organizationType"
                  autoComplete="organizationType"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="participants"
                  label="No of Participants"
                  type="participants"
                  id="participants"
                  autoComplete="participants"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="deliveryCity"
                  label="Delivery City"
                  type="deliveryCity"
                  id="deliveryCity"
                  autoComplete="deliveryCity"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="comments"
                  label="Comments:"
                  type="comments"
                  id="comments"
                  autoComplete="comments"
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox required value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive Fundraising updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit 
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/Login" variant="body2">
                  Already have an account? Login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
  

export default InquiryPage

