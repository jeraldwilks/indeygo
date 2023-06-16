import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";
import CookieIcon from "@mui/icons-material/Cookie";

export default function FundraisingPage() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get("name");
    const user = data.get("user");
    const organization = data.get("organization");
    const productTypes = data.getAll("productTypes");
    const numberOfParticipants = data.get("numberOfParticipants");
    const fundraiserTarget = data.get("fundraiserTarget");
    const deliveryAddress = data.get("deliveryAddress");
    const deliveryCity = data.get("deliveryCity");
    const deliveryProvince = data.get("deliveryProvince");
    const deliveryPostalCode = data.get("deliveryPostalCode");
    const startDate = data.get("startDate");
    const endDate = data.get("endDate");
    const orderDate = data.get("orderDate");
    const deliveryDate = data.get("deliveryDate");
    const isActive = data.get("isActive");

    try {
      const response = await fetch("/api/fundraiser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          user,
          organization,
          productTypes,
          numberOfParticipants,
          fundraiserTarget,
          deliveryAddress,
          deliveryCity,
          deliveryProvince,
          deliveryPostalCode,
          startDate,
          endDate,
          orderDate,
          deliveryDate,
          isActive,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        alert("Successfully Registered!");
        navigate("/Dashboard");
      } else {
        throw new Error("Failed to register fundraiser");
      }
    } catch (error) {
      console.error("Error creating fundraiser:", error);
      setErrorMessage("Failed to register fundraiser");
    }
  };

  const theme = createTheme();

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
          <Avatar>
            <CookieIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register a Fundraiser
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="user"
                  label="User"
                  name="user"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="organization"
                  label="Organization"
                  name="organization"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="productTypes"
                  label="Product Types"
                  name="productTypes"
                  helperText="Enter multiple product types separated by commas"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="numberOfParticipants"
                  label="Number of Participants"
                  name="numberOfParticipants"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="fundraiserTarget"
                  label="Fundraiser Target"
                  name="fundraiserTarget"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="deliveryAddress"
                  label="Delivery Address"
                  name="deliveryAddress"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="deliveryCity"
                  label="Delivery City"
                  name="deliveryCity"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="deliveryProvince"
                  label="Delivery Province"
                  name="deliveryProvince"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="deliveryPostalCode"
                  label="Delivery Postal Code"
                  name="deliveryPostalCode"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="startDate"
                  label="Start Date"
                  type="date"
                  id="startDate"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="endDate"
                  label="End Date"
                  type="date"
                  id="endDate"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="orderDate"
                  label="Order Date"
                  type="date"
                  id="orderDate"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="deliveryDate"
                  label="Delivery Date"
                  type="date"
                  id="deliveryDate"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="true" color="primary" />}
                  label="Is Active"
                  name="isActive"
                />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Start Fundraising
            </Button>
          </Box>
        </Box>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5 }}>
          {"© "}
          <Link color="inherit" href="/">
            Indeygo
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </ThemeProvider>
  );
}
