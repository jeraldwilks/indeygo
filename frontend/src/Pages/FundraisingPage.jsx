import React, { useState, useEffect } from "react";
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
import MenuItem from "@mui/material/MenuItem";
import CookieIcon from "@mui/icons-material/Cookie";

function FundraisingPage() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [organizations, setOrganizations] = useState([]);
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [productTypes, setProductTypes] = useState([]);
  const [selectedProductTypes, setSelectedProductTypes] = useState([]);
  const [organization, setOrganization] = useState("");
  const [amountRaised, setAmountRaised] = useState("");
  const [fundraiserName, setFundraiserName] = useState("");
  const [manualOrganization, setManualOrganization] = useState("");
  const [selectedOrganization, setSelectedOrganization] = useState("");

  useEffect(() => {
    // Fetch active organizations for the user
    fetch("/api/organization") // Update the route path here
      .then((response) => response.json())
      .then((data) => {
        setOrganizations(data);
        if (data.length === 0) {
          alert("Please create an organization first.");
          navigate("/CreateOrganization");
        }
      })
      .catch((error) => {
        console.error("Error fetching organizations:", error);
        setErrorMessage("Failed to fetch organizations");
      });

    // Fetch active product types
    fetch("/api/productType") // Update the route path here
      .then((response) => response.json())
      .then((data) => {
        setProductTypes(data);
      })
      .catch((error) => {
        console.error("Error fetching product types:", error);
        setErrorMessage("Failed to fetch product types");
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = data.get("user");
    const organization = data.get("organisation");
    const numberOfParticipants = data.get("numberOfParticipants");
    const fundraiserTarget = data.get("fundraiserTarget");
    const startDate = data.get("startDate");
    const endDate = data.get("endDate");
    const orderDate = data.get("orderDate");
    const deliveryDate = data.get("deliveryDate");
    const isActive = true;

    try {
      const response = await fetch("/api/fundraiser", {
        // Update the route path here
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fundraiserName,
          user,
          organization: selectedOrganization || manualOrganization,
          productTypes: selectedProductTypes,
          numberOfParticipants,
          fundraiserTarget,
          amountRaised,
          deliveryAddress,
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
      console.log('eroor')
      setErrorMessage("Failed to register fundraiser");
    }
  };

  const handleProductTypeChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedProductTypes((prevSelectedProductTypes) => [
        ...prevSelectedProductTypes,
        value,
      ]);
    } else {
      setSelectedProductTypes((prevSelectedProductTypes) =>
        prevSelectedProductTypes.filter((productType) => productType !== value)
      );
    }
  };

  const handleOrganizationChange = (event) => {
    const { value } = event.target;
    if (value === "manual") {
      setSelectedOrganization("");
    } else {
      const selectedOrganization = organizations.find((org) => org._id === value);
      if (selectedOrganization) {
        setDeliveryAddress(selectedOrganization.address);
      }
      setSelectedOrganization(value);
    }
  };

  const handleManualOrganizationChange = (event) => {
    setManualOrganization(event.target.value);
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
                  id="fundraiserName"
                  label="Fundraiser Name"
                  name="fundraiserName"
                  value={fundraiserName}
                  onChange={(e) => setFundraiserName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="organisation"
                  label="Organisation"
                  name="organisation"
                  select
                  value={selectedOrganization || manualOrganization}
                  onChange={handleOrganizationChange}
                >
                  <MenuItem disabled value="">
                    Select an Organization
                  </MenuItem>
                  {organizations.map((org) => (
                    <MenuItem key={org._id} value={org._id}>
                      {org.name}
                    </MenuItem>
                  ))}
                  <MenuItem value="manual">Enter Manually</MenuItem>
                </TextField>
              </Grid>
              {selectedOrganization === "" && (
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="manualOrganization"
                    label="Enter Organization Name"
                    name="manualOrganization"
                    value={manualOrganization}
                    onChange={handleManualOrganizationChange}
                  />
                </Grid>
              )}
              <Grid item xs={12}>
                <Typography variant="subtitle1">Product Types</Typography>
                {productTypes.map((productType) => (
                  <FormControlLabel
                    key={productType._id}
                    control={
                      <Checkbox
                        checked={selectedProductTypes.includes(productType._id)}
                        onChange={handleProductTypeChange}
                        name="productTypes"
                        value={productType._id}
                      />
                    }
                    label={productType.name}
                  />
                ))}
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
                  value={deliveryAddress}
                  onChange={(e) => setDeliveryAddress(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="startDate"
                  label="Start Date"
                  name="startDate"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="endDate"
                  label="End Date"
                  name="endDate"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="orderDate"
                  label="Order Date"
                  name="orderDate"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="deliveryDate"
                  label="Delivery Date"
                  name="deliveryDate"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            {errorMessage && (
              <Typography component="p" variant="body2" color="error">
                {errorMessage}
              </Typography>
            )}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default FundraisingPage;
