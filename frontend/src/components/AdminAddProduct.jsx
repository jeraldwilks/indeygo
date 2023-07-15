import {
  FormControl,
  FormLabel,
  MenuItem,
  TextField,
  InputLabel,
  Select,
  Button,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import React, { useEffect, useState } from "react";
import BakeryDiningOutlinedIcon from "@mui/icons-material/BakeryDiningOutlined";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const theme = createTheme();

const AdminAddProduct = () => {
  const [productType, setProductType] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [availableProductTypes, setAvailableProductTypes] = useState([]);

  useEffect(() => {
    const getProductTypes = async () => {
      const response = await fetch("api/productType");
      setAvailableProductTypes(await response.json());
    };
    getProductTypes();
  }, []);

  const submitForm = async () => {
    const response = await fetch("/api/product/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productType,
        name,
        description,
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
              <BakeryDiningOutlinedIcon />
            </Avatar>
            <FormControl sx={{ width: "50ch" }}>
              <Typography component="h1" variant="h5">
                Add a New Product
              </Typography>
              <br />
              <FormControl>
                <InputLabel id="ProductType-label">Product Type</InputLabel>
                <Select
                  labelId="ProductType-label"
                  id="ProductType"
                  value={productType}
                  label="Product Type"
                  onChange={(e) => {
                    setProductType(e.target.value);
                  }}
                  required
                >
                  {availableProductTypes.map((availableProductType) => (
                    <MenuItem
                      key={availableProductType.name}
                      value={availableProductType}
                    >
                      {availableProductType.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <br />
              <TextField
                type="text"
                variant="outlined"
                label="Product Name"
                name="name"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <TextField
                type="text"
                variant="outlined"
                label="Product Description"
                name="description"
                required
                onChange={(e) => setDescription(e.target.value)}
              />
              <br />

              <Button
                onClick={submitForm}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Add Product
              </Button>
            </FormControl>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default AdminAddProduct;
