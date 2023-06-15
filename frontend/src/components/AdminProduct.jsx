import {
  FormControl,
  FormLabel,
  MenuItem,
  TextField,
  InputLabel,
  Select,
  Button,
} from "@mui/material";
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
  const [quantityDesc, setQuantityDesc] = useState("");
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
        >
          {availableProductTypes.map((availableProductType) => (
            <MenuItem
              key={availableProductType.name}
              value={availableProductType._id}
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
        <Button onClick={() => console.log(productType)}
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        >Click
        </Button>
      </FormControl>
    </Box>
    </Container> 
    </ThemeProvider>
    </>
  );
};

export default AdminProduct;
