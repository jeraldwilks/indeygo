import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const theme = createTheme();

const EditFundraiserPage = () => {
  const { id } = useParams();
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

  useEffect(() => {
    const initialLoad = async () => {
      const url = "/api/fundraiser?_id=" + id;
      const fundraiserResponse = await fetch(url);
      const fundraiserData = await fundraiserResponse.json();
      setName(fundraiserData[0].name);
      setProductTypes(fundraiserData[0].productTypes);
      setNumberOfParticipants(fundraiserData[0].numberOfParticipants);
      setFundraiserTarget(fundraiserData[0].fundraiserTarget);
      setDeliveryAddress(fundraiserData[0].deliveryAddress);
      setDeliveryCity(fundraiserData[0].deliveryCity);
      setDeliveryProvince(fundraiserData[0].deliveryProvince);
      setDeliveryPostalCode(fundraiserData[0].deliveryPostalCode);
      setStartDate(fundraiserData[0].startDate.split("T")[0]);
      setEndDate(fundraiserData[0].endDate.split("T")[0]);
      setOrderDate(fundraiserData[0].orderDate.split("T")[0]);
      setDeliveryDate(fundraiserData[0].deliveryDate.split("T")[0]);

      const productTypeResponse = await fetch("/api/productType?isActive=true");
      const productTypeData = await productTypeResponse.json();
      setAvailableProductTypes(productTypeData);

      const organizationResponse = await fetch(
        "/api/organization?isActive=true"
      );
      const organizationData = await organizationResponse.json();
      setAvailableOrganizations(organizationData);
      const ind = organizationData.findIndex((org) => {
        return org._id === fundraiserData[0].organization._id;
      });
      setOrganization(organizationData[ind]);
    };
    initialLoad();
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
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: id,
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
        await alert("Successfully Updated!");
        navigate("/Dashboard");
      } else {
        throw new Error("Failed to update fundraiser");
      }
    } catch (error) {
      console.error("Error updating fundraiser:", error);
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

  const currentProductType = (currentProductType) => {
    const ind = productTypes.findIndex((pt) => {
      return pt._id === currentProductType._id;
    });
    if (ind != -1) {
      return true;
    } else {
      return false;
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
            <AttachMoneyIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Edit Fundraiser
          </Typography>

          <TextField
            required
            fullWidth
            id="fundraiserName"
            label="Fundraiser Name"
            name="fundraiserName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <FormControl fullWidth>
            <InputLabel id="Organization-label">Organization</InputLabel>
            {availableOrganizations.length > 0 && (
              <Select
                labelId="Organization-label"
                id="Organization"
                value={organization}
                label="Organization"
                onChange={(e) => changeOrganization(e.target.value)}
                required
              >
                {availableOrganizations.map((org) => (
                  <MenuItem key={org._id} value={org}>
                    {org.name}
                  </MenuItem>
                ))}
              </Select>
            )}
          </FormControl>

          <FormControl fullWidth>
            <FormLabel>Which kind of products do you want to sell?</FormLabel>
            <FormGroup>
              {availableProductTypes.map((productType) => (
                <FormControlLabel
                  key={productType._id}
                  control={
                    <Checkbox
                      onChange={(e) =>
                        handleProductTypeChange(e.target.id, e.target.checked)
                      }
                      name={productType.name}
                      id={productType._id}
                      checked={currentProductType(productType)}
                    />
                  }
                  label={productType.name}
                />
              ))}
            </FormGroup>
          </FormControl>

          <TextField
            required
            fullWidth
            type="number"
            id="numberOfParticipants"
            label="Number of Participants"
            name="numberOfParticipants"
            value={numberOfParticipants}
            onChange={(e) => setNumberOfParticipants(e.target.value)}
          />

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

          <TextField
            required
            fullWidth
            id="deliveryAddress"
            label="Delivery Address"
            name="deliveryAddress"
            value={deliveryAddress}
            onChange={(e) => setDeliveryAddress(e.target.value)}
          />

          <TextField
            required
            fullWidth
            id="deliveryCity"
            label="Delivery City"
            name="deliveryCity"
            value={deliveryCity}
            onChange={(e) => setDeliveryCity(e.target.value)}
          />

          <FormControl fullWidth>
            <InputLabel id="province-select-label" required>
              Province
            </InputLabel>
            <Select
              labelId="province-select-label"
              id="deliveryProvince"
              value={deliveryProvince}
              label="Delivery Province"
              onChange={(e) => setDeliveryProvince(e.target.value)}
            >
              <MenuItem key="Alberta" value="Alberta">
                Alberta
              </MenuItem>
              <MenuItem key="British Columbia" value="British Columbia">
                British Columbia
              </MenuItem>
              <MenuItem key="Manitoba" value="Manitoba">
                Manitoba
              </MenuItem>
              <MenuItem key="New Brunswick" value="New Brunswick">
                New Brunswick
              </MenuItem>
              <MenuItem
                key="Newfoundland and Labrador"
                value="Newfoundland and Labrador"
              >
                Newfoundland and Labrador
              </MenuItem>
              <MenuItem
                key="Northwest Territories"
                value="Northwest Territories"
              >
                Northwest Territories
              </MenuItem>
              <MenuItem key="Nova Scotia" value="Nova Scotia">
                Nova Scotia
              </MenuItem>
              <MenuItem key="Ontario" value="Ontario">
                Ontario
              </MenuItem>
              <MenuItem key="Prince Edward Island" value="Prince Edward Island">
                Prince Edward Island
              </MenuItem>
              <MenuItem key="Quebec" value="Quebec">
                Quebec
              </MenuItem>
              <MenuItem key="Saskatchewan" value="Saskatchewan">
                Saskatchewan
              </MenuItem>
              <MenuItem key="Yukon" value="Yukon">
                Yukon
              </MenuItem>
            </Select>
          </FormControl>

          <TextField
            required
            fullWidth
            id="deliveryPostalCode"
            label="Delivery Postal Code"
            name="deliveryPostalCode"
            value={deliveryPostalCode}
            onChange={(e) => setDeliveryPostalCode(e.target.value)}
          />

          <TextField
            required
            fullWidth
            id="startDate"
            label="Start Date"
            name="startDate"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            required
            fullWidth
            id="endDate"
            label="End Date"
            name="endDate"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            required
            fullWidth
            id="orderDate"
            label="Order Date"
            name="orderDate"
            type="date"
            value={orderDate}
            onChange={(e) => setOrderDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            required
            fullWidth
            id="deliveryDate"
            label="Delivery Date"
            name="deliveryDate"
            type="date"
            value={deliveryDate}
            helperText="Delivery date should be 10-14 days from order date."
            onChange={(e) => setDeliveryDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <Button
            onClick={submitForm}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Update Fundraiser
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default EditFundraiserPage;
