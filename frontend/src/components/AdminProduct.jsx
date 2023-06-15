import {
  FormControl,
  FormLabel,
  MenuItem,
  TextField,
  InputLabel,
  Select,
  Button,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";


const theme = createTheme();

const AdminProduct = () => {
  const [productType, setProductType] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [sellPrice, setSellPrice] = useState(1);
  const [wholesalePrices, setWholesalePrices] = useState([]);
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
        sellPrice,
        wholesalePrices,
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
      <FormControl>
        <FormLabel>Add a New Product</FormLabel>
        <br />
        <InputLabel id="ProductType-label">Product Type</InputLabel>
        <Select
          labelId="ProductType-label"
          id="ProductType"
          value={productType}
          // label="Product Type"
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
        <br/>
        <Grid item xs={12}>
        <TextField
          type="text"
          variant="outlined"
          label="Product Name"
          name="name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        </Grid>
        <TextField
          type="text"
          variant="outlined"
          label="Product Description"
          name="description"
          required
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          type="number"
          variant="outlined"
          label="Consumer Price"
          name="sellPrice"
          required
          onChange={(e) => setSellPrice(e.target.value)}
        />
        {productType != [] &&
          productType.priceTierMin.map((priceTier, index) => (
            <TextField
              key={"tier" + index}
              type="number"
              variant="outlined"
              label={"Tier " + (index + 1) + " Price"}
              helperText={
                index + 1 === productType.priceTierMin.length
                  ? priceTier + " or more"
                  : "Up to " +
                    (productType.priceTierMin[index + 1] - productType.caseSize)
              }
            />
          ))}

        <Button onClick={submitForm}>
          Click
        </Button>
      </FormControl>
      </Box>
    </Container> 
    </ThemeProvider> 
    </>
  );
};

export default AdminProduct;
