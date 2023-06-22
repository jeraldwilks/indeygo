import {
  FormControl,
  FormLabel,
  MenuItem,
  TextField,
  InputLabel,
  Select,
  Button,
  FormControlLabel,
  Checkbox,
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

const AdminProductEditor = () => {
  const [productType, setProductType] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [sellPrice, setSellPrice] = useState("");

  const [wholesalePrices, setWholesalePrices] = useState([]);
  const [availableProductTypes, setAvailableProductTypes] = useState([]);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const getProductDetails = async () => {
      const response = await fetch("/api/product");
      setAvailableProductTypes(await response.json());
    };
    getProductDetails();
  }, []);

  const updateFieldChanged = (index, value) => {
    let newArr = [...wholesalePrices];
    newArr[index] = parseFloat(value);
    setWholesalePrices(newArr);
  };

  // const response = await fetch("/api/product?productType=7498439849384398")

  const updateProduct = async () => {
    const response = await fetch("/api/productType", {
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
        isActive,
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
                Edit Product Details
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
                  <>
                    <br />
                    <TextField
                      key={"tier" + index}
                      type="number"
                      variant="outlined"
                      label={"Tier " + (index + 1) + " Price"}
                      helperText={
                        index + 1 === productType.priceTierMin.length
                          ? priceTier + " or more"
                          : "Up to " +
                            (productType.priceTierMin[index + 1] -
                              productType.caseSize)
                      }
                      onChange={(e) =>
                        updateFieldChanged(index, e.target.value)
                      }
                    />
                  </>
                ))}
              <FormControl>
                Is the product Active
                <Checkbox onClick={(e) => setIsActive(e.target.checked)} />
              </FormControl>
              <Button
                onClick={updateProduct}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Update Product
              </Button>
            </FormControl>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default AdminProductEditor;

