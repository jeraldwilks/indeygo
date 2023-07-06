import React, { useState, useEffect } from "react";
import { useAuth } from "../providers/AuthProvider";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ReceiptIcon from "@mui/icons-material/Receipt";
import Grid from "@mui/material/Grid";

import {
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
const theme = createTheme();

const SalePage = () => {
  const { user } = useAuth();
  const [fundraisers, setFundraisers] = useState([]);

  const [fundraiser, setFundraiser] = useState();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [products, setProducts] = useState([]);
  const [availableProducts, setAvailableProducts] = useState([]);

  useEffect(() => {
    const initialLoad = async () => {
      const url = "api/fundraiser?isActive=true&user=" + user._id;
      const fundraiserResponse = await fetch(url);
      const fundraiserData = await fundraiserResponse.json();
      if (fundraiserData.length === 0) {
        alert("Please create a fundraiser first.");
        navigate("/Fundraiser");
      } else {
        setFundraisers(fundraiserData);
        setFundraiser(fundraiserData[0]);
      }
    };
    initialLoad();
  }, []);

  useEffect(() => {
    const loadProduct = async () => {
      const productURL =
        "api/product/findByFundraiser?fundraiser=" + fundraiser._id;
      const productResponse = await fetch(productURL);
      const productData = await productResponse.json();
      setAvailableProducts(productData);
    };
    if (fundraiser) {
      loadProduct();
    }
  }, [fundraiser]);

  const submitForm = async () => {
    const response = await fetch("/api/sales/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fundraiser,
        name,
        phoneNumber,
        products,
      }),
    });
    alert(await response.text());
  };

  const changeQuantity = (id, qty, price) => {
    const index = products.map((x) => x.product).indexOf(id);
    if (index === -1) {
      setProducts((prevArray) => [
        ...prevArray,
        { product: id, quantity: qty, price: price },
      ]);
    } else {
      let newArray = products;
      newArray[index].quantity = qty;
      setProducts(newArray);
    }
  };

  return (
    fundraiser &&
    availableProducts && (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <ReceiptIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Add a New Sale
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={19}>
                <FormControl fullWidth>
                  <InputLabel id="Fundraiser-label">Fundraiser:</InputLabel>
                  <Select
                    displayEmpty
                    required
                    id="Fundraiser"
                    label="Fundraiser"
                    labelId="Fundraiser-label"
                    name="Fundraiser"
                    value={fundraiser}
                    onChange={(e) => {
                      setFundraiser(e.target.value);
                    }}
                  >
                    {fundraisers.map((selectedFundraiser) => (
                      <MenuItem
                        key={selectedFundraiser.name}
                        value={selectedFundraiser}
                      >
                        {selectedFundraiser.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={18}>
                <TextField
                  type="text"
                  variant="outlined"
                  label="Seller's Name"
                  name="name"
                  required
                  fullWidth
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={16}>
                <TextField
                  type="text"
                  variant="outlined"
                  label="Seller's Phone Number"
                  name="phoneNumber"
                  required
                  fullWidth
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />{" "}
              </Grid>
              <br />
              {availableProducts.map((product) => (
                <FormControl key={product._id}>
                  <Grid item xs={12}>
                    {product.productType.name} - {product.name} -{" "}
                    <TextField
                      type="number"
                      variant="outlined"
                      label="Quantity:"
                      name="quantity"
                      fullWidth
                      onChange={(e) =>
                        changeQuantity(
                          product._id,
                          e.target.value,
                          product.sellPrice
                        )
                      }
                    />
                  </Grid>
                </FormControl>
              ))}
              <Button
                variant="contained"
                fullWidth
                sx={{ mt: 3, mb: 2 }}
                onClick={submitForm}
              >
                Submit Sale
              </Button>
            </Grid>
          </Box>
        </Container>
      </ThemeProvider>
    )
  );
};

export default SalePage;
