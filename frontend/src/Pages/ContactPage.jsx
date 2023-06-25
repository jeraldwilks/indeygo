import Avatar from "@mui/material/Avatar";
import CallSharpIcon from '@mui/icons-material/CallSharp';
import React, { useState } from "react";
import { Container, CssBaseline, TextField, Button, Typography, Grid, Box, createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme();

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      alert("Invalid email format");
      return;
    }

    const requestData = { name, email, message };

    try {
      const response = await fetch("/api/user/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        alert("Your message has been sent!");
        // Handle any necessary redirects or state updates
      } else {
        const errorData = await response.json();
        alert(errorData.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
    <Box sx={{ height: "100vh" }}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ height: "100%" }}
      >
        <Grid item xs={12} md={4}>
          <Box 
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <CallSharpIcon />
          </Avatar>
            <Typography component="h1" variant="h5">
              Contact Us
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    {/* <img
                      src=
                      alt="Contact"
                      style={{ maxWidth: "100%" }}
                    /> */}
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    margin="normal"
                    required
                    type="email"
                    autoComplete="email"
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    margin="normal"
                    required
                    multiline
                    rows={4}
                  />
                  <Button fullWidth variant="contained" type="submit" sx={{ mt: 2 }}>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
    </Container>
    </ThemeProvider>
  );
};

export default ContactPage;
