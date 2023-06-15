import Avatar from "@mui/material/Avatar";
import { Button, FormControl, FormLabel, TextField } from "@mui/material";
import React, { useState } from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import IcecreamOutlinedIcon from '@mui/icons-material/IcecreamOutlined';
import Typography from "@mui/material/Typography";


const theme = createTheme();
const AdminProductType = () => {
  const [name, setName] = useState("");
  const [quantityDesc, setQuantityDesc] = useState("");
  const [caseSize, setCaseSize] = useState();
  const [priceTierMin, setPriceTierMin] = useState([1]);

  const addTier = () => {
    setPriceTierMin((prev) => [
      ...prev,
      priceTierMin[priceTierMin.length - 1] + 1,
    ]);
  };

  const removeTier = (index) => {
    setPriceTierMin((current) => current.filter((value, i) => index != i));
  };

  const updateFieldChanged = (index, value) => {
    let newArr = [...priceTierMin];
    newArr[index] = parseInt(value);
    setPriceTierMin(newArr);
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
        priceTierMin,
      }),
    });
    alert(await response.text());
  };

  return (
    <FormControl>
      <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box component="form"
          sx={{
            
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 3
          }}
        >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <IcecreamOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">Add a New Product Type</Typography>
      <br/>
      <Grid container spacing={2}>
      <Grid item xs={12}>
      <TextField
        type="text"
        variant="outlined"
        label="Product Type Name"
        name="name"
        required
        onChange={(e) => setName(e.target.value)}
      />
      </Grid>
      <Grid item xs={12}>
      <TextField
        type="text"
        variant="outlined"
        label="Description of Consumer Sell Quantity"
        name="quantityDesc"
        helperText="Example: Each box contains 5 items"
        required
        onChange={(e) => setQuantityDesc(e.target.value)}
      />
      </Grid>
      <Grid item xs={12}>
      <TextField
        type="number"
        variant="outlined"
        label="Wholesale Case Size"
        name="caseSize"
        required
        onChange={(e) => setCaseSize(e.target.value)}
      />
      
      </Grid>
      <FormLabel>Minimum Values for Pricing Tiers:</FormLabel>
      {priceTierMin.map((tier, index) => (
        <Grid item xs={12}>
        <React.Fragment key={"PricingTier" + index}>
          {index === 0 ? (
            <TextField
              disabled
              type="number"
              variant="outlined"
              label="Tier 1"
              name="priceTierMin"
              defaultValue={priceTierMin[index]}
              onChange={(e) => updateFieldChanged(index, e.target.value)}
              required
            />
          ) : (
      
          
            <TextField
              type="number"
              variant="outlined"
              label={"Tier " + (index + 1)}
              name="priceTierMin"
              defaultValue={priceTierMin[index]}
              onChange={(e) => updateFieldChanged(index, e.target.value)}
              required
              helperText="Specify the minimum number of items sold to get this pricing tier"
            />
           
            
          )}
          {priceTierMin.length > 1 && index != 0 && (
            
            <Button onClick={() => removeTier(index)}>Remove Tier</Button>
          )}
        </React.Fragment> 
        </Grid>
      ))}

      </Grid>
    
      <Button onClick={addTier}
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
      >Add Tier</Button>

      <Button onClick={submitForm}
      type="submit"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
      >Add Product Type</Button>
      </Box>
    </Container> 
    </ThemeProvider>
    </FormControl>
  );
};

export default AdminProductType;
