
import React from 'react'

const InquiryPage = () => {
  return (
    <div>InquiryPage</div>
  )
}

export default InquiryPage

// export default InquiryPage


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
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useAuth } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import CookieIcon from "@mui/icons-material/Cookie";
const handleSubmit = async (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const startDate = data.get("startDate");
  const endDate = data.get("endDate");
  const organizationName = data.get("organizationName");
  const fundraiserAmount = data.get("fundraiserAmount");
  const expectedProfit = data.get("expectedProfit");
  const deliveryAddress = data.get("deliveryAddress");
  const orderDate = data.get("orderDate");
  const deliveryDate = data.get("deliveryDate");

  try {
    const response = await fetch("/api/fundraiser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        startDate,
        endDate,
        organizationName,
        fundraiserAmount,
        expectedProfit,
        deliveryAddress,
        orderDate,
        deliveryDate,
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

export default function FundraisingPage() {
  {
    const { register } = useAuth();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const startDate = data.get("startDate");
      const endDate = data.get("endDate");
      const organizationName = data.get("organizationName");
      const fundraiserAmount = data.get("fundraiserAmount");
      const expectedProfit = data.get("expectedProfit");
      const deliveryAddress = data.get("deliveryAddress");
      const orderDate = data.get("orderDate");
      const deliveryDate = data.get("deliveryDate");

      if (success === true) {
        alert("Successfully Registered!");
        navigate("/Dashboard");
      } else {
        alert(success);
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
            <Avatar>
              <CookieIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register an Organzition
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
                    name="startDate"
                    required
                    fullWidth
                    id="startDate"
                    label="start date"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="endDate"
                    label="End Date"
                    name="endDate"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="organizationName"
                    label="Organization Name"
                    name="organizationName"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="fundraiserAmount"
                    label="Fundraiser Amount"
                    name="fundraiserAmount"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="expectedProfit"
                    label="Expected Profit"
                    id="expectedProfit"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="deliveryAddress"
                    label="Delivery Address"
                    id="deliveryAddress"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="orderDate"
                    label="Order Date"
                    id="orderDate"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="deliveryDate"
                    label="Delivery Date"
                    id="deliveryDate"
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
                Start Fundraising
              </Button>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    );
  }

  function Copyright(props) {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="/">
          Indeygo
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }
}
