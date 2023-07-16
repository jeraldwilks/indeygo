import Avatar from "@mui/material/Avatar";
import { Button, FormControl, FormLabel, TextField } from "@mui/material";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";

const theme = createTheme();

const AdminAddProductType = () => {
  const [name, setName] = useState("");
  const [quantityDesc, setQuantityDesc] = useState("");
  const [caseSize, setCaseSize] = useState();
  const [wholesalePrices, setWholesalePrices] = useState([
    {
      tierMin: 1,
      price: 0,
    },
  ]);
  const [sellPrice, setSellPrice] = useState();

  const addTier = () => {
    setWholesalePrices((prev) => [...prev, { tierMin: 1, price: 0 }]);
  };

  const removeTier = (index) => {
    setWholesalePrices((current) => current.filter((value, i) => index != i));
  };

  const updateTierQuantity = (index, value) => {
    let newArray = [...wholesalePrices];
    newArray[index].tierMin = parseInt(value);
    setWholesalePrices(newArray);
  };
  const updateTierPrice = (index, value) => {
    let newArray = [...wholesalePrices];
    newArray[index].price = parseFloat(value);
    setWholesalePrices(newArray);
  };

  const submitForm = async () => {
    const response = await fetch("/api/productType/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        quantityDesc,
        caseSize,
        wholesalePrices,
        sellPrice,
      }),
    });
    alert(await response.text());
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          component="form"
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 3,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <AddIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add a New Product Type
          </Typography>
          <br />
          <FormControl sx={{ width: "50ch" }}>
            <TextField
              type="text"
              variant="outlined"
              label="Product Type Name"
              name="name"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <br />

            <TextField
              type="text"
              variant="outlined"
              label="Description of Consumer Sell Quantity"
              name="quantityDesc"
              helperText="Example: Each tub makes 4-6 dozen cookies"
              required
              onChange={(e) => setQuantityDesc(e.target.value)}
            />
            <TextField
              type="number"
              variant="outlined"
              label="Wholesale Case Size"
              name="caseSize"
              required
              onChange={(e) => setCaseSize(e.target.value)}
            />
            <br />
            <TextField
              type="number"
              variant="outlined"
              label="Consumer Sell Price"
              name="sellPrice"
              required
              onChange={(e) => setSellPrice(e.target.value)}
            />
            <br />
            <FormLabel>Wholesale Prices:</FormLabel>
            {wholesalePrices.map((tier, index) => (
              <React.Fragment key={"PricingTier" + index}>
                <br />
                <TextField
                  type="number"
                  variant="outlined"
                  label={"Tier " + (index + 1) + " Minimum Quantity"}
                  name="tierMin"
                  defaultValue={wholesalePrices[index].tierMin}
                  onChange={(e) => updateTierQuantity(index, e.target.value)}
                  required
                  helperText="Specify the minimum number of items sold to get this pricing tier"
                />
                <br />
                <TextField
                  type="number"
                  variant="outlined"
                  label={"Tier " + (index + 1) + " Price"}
                  name="price"
                  defaultValue={wholesalePrices[index].price}
                  onChange={(e) => updateTierPrice(index, e.target.value)}
                  required
                  helperText="Wholesale price at this tier"
                />
                {wholesalePrices.length > 1 && index != 0 && (
                  <Button
                    onClick={() => removeTier(index)}
                    type="submit"
                    color="error"
                    variant="text"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Remove Tier
                  </Button>
                )}
              </React.Fragment>
            ))}

            <Button
              onClick={addTier}
              type="submit"
              fullWidth
              color="success"
              variant="text"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Tier
            </Button>

            <Button
              onClick={submitForm}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Product Type
            </Button>
          </FormControl>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default AdminAddProductType;
