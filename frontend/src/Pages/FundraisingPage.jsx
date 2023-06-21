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
import { Form, useNavigate } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import CookieIcon from "@mui/icons-material/Cookie";
import {
  FormControl,
  FormGroup,
  FormLabel,
  InputLabel,
  ListItemText,
  Select,
} from "@mui/material";
import { useAuth } from "../providers/AuthProvider";

function FundraisingPage() {
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [productTypes, setProductTypes] = useState([]);
  const [numberOfParticipants, setNumberOfParticipants] = useState("");
  const [fundraiserTarget, setFundraiserTarget] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [deliveryCity, setDeliveryCity] = useState("");
  const [deliveryProvince, setDeliveryProvince] = useState("");
  const [deliveryPostalCode, setDeliveryPostalCode] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");

  const [availableOrganizations, setAvailableOrganizations] = useState([]);
  const [availableProductTypes, setAvailableProductTypes] = useState([]);

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const { user } = useAuth();

  useEffect(() => {
    // Fetch active organizations for the user
    const getOrganizations = async () => {
      const response = await fetch("api/organization");
      const data = await response.json();
      if (data.length === 0) {
        alert("Please create an organization first.");
        navigate("/Organization");
      } else {
        setAvailableOrganizations(data);
        setOrganization(data[0]);
        setDeliveryAddress(data[0].address);
        setDeliveryCity(data[0].city);
        setDeliveryProvince(data[0].province);
        setDeliveryPostalCode(data[0].postalCode);
      }
    };
    // Must add code to only get active product types
    const getProductTypes = async () => {
      const response = await fetch("api/productType");
      const data = await response.json();
      setAvailableProductTypes(data);
    };

    getOrganizations();
    getProductTypes();
  }, []);

  const changeOrganization = (org) => {
    setOrganization(org);
    setDeliveryAddress(org.address);
    setDeliveryCity(org.city);
    setDeliveryProvince(org.province);
    setDeliveryPostalCode(org.postalCode);
  };

  const submitForm = async () => {
    try {
      const response = await fetch("/api/fundraiser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
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
        }),
      });

      if (response.ok) {
        const data = await response.json();
        await alert("Successfully Registered!");
        navigate("/Dashboard");
      } else {
        throw new Error("Failed to register fundraiser");
      }
    } catch (error) {
      console.error("Error creating fundraiser:", error);
      console.log("error");
    }
  };

  const handleProductTypeChange = (id, checked) => {
    // console.log(id, checked);
    if (checked === true) {
      setProductTypes((prevArray) => [...prevArray, id]);
    } else {
      setProductTypes((current) => current.filter((type) => type != id));
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
          <FormControl sx={{ width: "50ch" }}>
            <Typography component="h1" variant="h5">
              Start a Fundraiser
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="fundraiserName"
                  label="Fundraiser Name"
                  name="fundraiserName"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="organization-label">Organization</InputLabel>
                  {availableOrganizations.length > 0 && (
                    <Select
                      displayEmpty
                      labelId="organization-label"
                      required
                      fullWidth
                      id="organization"
                      label="Organization"
                      name="organization"
                      value={organization}
                      onChange={(e) => changeOrganization(e.target.value)}
                    >
                      {availableOrganizations.map((org) => (
                        <MenuItem key={org._id} value={org}>
                          {org.name}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <FormLabel>
                    Which kind of products do you want to sell?
                  </FormLabel>
                  <FormGroup>
                    {availableProductTypes.map((productType) => (
                      <FormControlLabel
                        key={productType._id}
                        control={
                          <Checkbox
                            onChange={(e) =>
                              handleProductTypeChange(
                                e.target.id,
                                e.target.checked
                              )
                            }
                            name={productType.name}
                            id={productType._id}
                          />
                        }
                        label={productType.name}
                      />
                    ))}
                  </FormGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="numberOfParticipants"
                  label="Number of Participants"
                  name="numberOfParticipants"
                  value={numberOfParticipants}
                  onChange={(e) => setNumberOfParticipants(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="fundraiserTarget"
                  label="Fundraiser Target"
                  name="fundraiserTarget"
                  type="number"
                  value={fundraiserTarget}
                  onChange={(e) => setFundraiserTarget(e.target.value)}
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
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="deliveryCity"
                  label="Delivery City"
                  name="deliveryCity"
                  value={deliveryCity}
                  onChange={(e) => setDeliveryCity(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="deliveryProvince"
                  label="Delivery Province"
                  name="deliveryProvince"
                  value={deliveryProvince}
                  onChange={(e) => setDeliveryProvince(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="deliveryPostalCode"
                  label="Delivery Postal Code"
                  name="deliveryPostalCode"
                  value={deliveryPostalCode}
                  onChange={(e) => setDeliveryPostalCode(e.target.value)}
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
                  onChange={(e) => setStartDate(e.target.value)}
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
                  onChange={(e) => setEndDate(e.target.value)}
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
                  onChange={(e) => setOrderDate(e.target.value)}
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
                  onChange={(e) => setDeliveryDate(e.target.value)}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
            <Button
              onClick={() => console.log(organization)}
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
          </FormControl>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default FundraisingPage;
