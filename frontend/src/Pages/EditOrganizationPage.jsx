import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  FormControlLabel,
  FormControl,
  FormLabel,
  InputLabel,
  Radio,
  MenuItem,
  Select,
  TextField,
  Typography,
  Checkbox,
} from "@mui/material";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import RadioGroup from "@mui/material/RadioGroup";

const theme = createTheme();

const EditOrganizationPage = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [groupType, setGroupType] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [isActive, setIsActive] = useState();

  useEffect(() => {
    const initialLoad = async () => {
      const organizationResponse = await fetch("/api/organization?_id=" + id);
      const organizationData = await organizationResponse.json();
      setName(organizationData[0].name);
      setGroupType(organizationData[0].groupType);
      setAddress(organizationData[0].address);
      setCity(organizationData[0].city);
      setProvince(organizationData[0].province);
      setPostalCode(organizationData[0].postalCode);
      setIsActive(organizationData[0].isActive);
    };
    initialLoad();
  }, []);

  const submitForm = async () => {
    const response = await fetch("/api/organization", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: id,
        name,
        groupType,
        address,
        city,
        province,
        postalCode,
      }),
    });
    alert(await response.text());
  };

  return (
    <>
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
              <AddBusinessIcon />
            </Avatar>
            <FormControl sx={{ width: "50ch" }}>
              <Typography component="h1" variant="h5">
                Update Organization
              </Typography>
              <br />

              <br />
              <TextField
                type="text"
                variant="outlined"
                label="Organization Name"
                name="name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <FormLabel id="group-type-radio" required>
                Type of Group
              </FormLabel>
              {groupType != "" && (
                <RadioGroup
                  defaultValue={groupType}
                  aria-labelledby="group-type"
                  name="groupType"
                  onChange={(e) => setGroupType(e.target.value)}
                >
                  <FormControlLabel
                    value="Sports Team"
                    control={<Radio />}
                    label="Sports Team"
                  />
                  <FormControlLabel
                    value="School Group"
                    control={<Radio />}
                    label="School Group"
                  />
                  <FormControlLabel
                    value="Community Group"
                    control={<Radio />}
                    label="Community Group"
                  />
                  <FormControlLabel
                    value="Youth Group"
                    control={<Radio />}
                    label="Youth Group"
                  />
                </RadioGroup>
              )}
              <br />
              <TextField
                type="text"
                variant="outlined"
                label="Address"
                name="address"
                value={address}
                required
                onChange={(e) => setAddress(e.target.value)}
              />
              <br />
              <TextField
                type="text"
                variant="outlined"
                label="City"
                name="city"
                value={city}
                required
                onChange={(e) => setCity(e.target.value)}
              />
              <br />
              <FormControl>
                <InputLabel id="province-select-label" required>
                  Province
                </InputLabel>
                <Select
                  labelId="province-select-label"
                  id="province"
                  value={province}
                  label="Province"
                  onChange={(e) => setProvince(e.target.value)}
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
                  <MenuItem
                    key="Prince Edward Island"
                    value="Prince Edward Island"
                  >
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
              <br />
              <TextField
                type="text"
                variant="outlined"
                label="Postal Code"
                name="postalCode"
                required
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
              {isActive != null && (
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(e) => setIsActive(e.target.checked)}
                      checked={isActive}
                    />
                  }
                  label="Active Organization"
                />
              )}
              <Button
                onClick={submitForm}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Update Organization
              </Button>
            </FormControl>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default EditOrganizationPage;
