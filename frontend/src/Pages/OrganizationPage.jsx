import {
  FormControl,
  FormLabel,
  TextField,
  Button,
  Radio,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import React, { useState } from "react";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const theme = createTheme();

const OrganizationPage = () => {
  const [name, setName] = useState("");
  const [groupType, setGroupType] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const submitForm = async () => {
    const response = await fetch("/api/organization/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
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
                Add a New Organization
              </Typography>
              <br />

              <br />
              <TextField
                type="text"
                variant="outlined"
                label="Organization Name"
                name="name"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <FormLabel id="group-type-radio" required>
                Type of Group
              </FormLabel>
              <RadioGroup
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
              <br />
              <TextField
                type="text"
                variant="outlined"
                label="Address"
                name="address"
                required
                onChange={(e) => setAddress(e.target.value)}
              />
              <br />
              <TextField
                type="text"
                variant="outlined"
                label="City"
                name="city"
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
                onChange={(e) => setPostalCode(e.target.value)}
              />

              <Button
                onClick={submitForm}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Add Organization
              </Button>
            </FormControl>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default OrganizationPage;
