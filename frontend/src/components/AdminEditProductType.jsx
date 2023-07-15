//Original

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FormControl,
  FormControlLabel,
  Avatar,
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
  TextField,
  Button,
  Checkbox,
  Typography,
} from "@mui/material";
import EditSharpIcon from "@mui/icons-material/EditSharp";

const theme = createTheme();

const AdminEditProductType = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [caseSize, setCaseSize] = useState("");
  const [quantityDesc, setQuantityDesc] = useState("");
  const [wholesalePrices, setWholesalePrices] = useState([]);
  const [sellPrice, setSellPrice] = useState("");
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const initialLoad = async () => {
      const typeResponse = await fetch("/api/productType?_id=" + id);
      const typeData = await typeResponse.json();

      setName(typeData[0].name);
      setCaseSize(typeData[0].caseSize);
      setQuantityDesc(typeData[0].quantityDesc);
      setIsActive(typeData[0].isActive);
      setWholesalePrices(typeData[0].wholesalePrices);
      setSellPrice(typeData[0].sellPrice);
    };

    initialLoad();
  }, []);

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
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: id,
        name,
        caseSize,
        quantityDesc,
        wholesalePrices,
        sellPrice,
        isActive,
      }),
    });
    alert(await response.text());
    navigate("/admin-product-types");
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <EditSharpIcon />
            </Avatar>
            <FormControl sx={{ width: "50ch" }}>
              <Typography component="h1" variant="h5">
                Edit Product Type
              </Typography>
              <br />

              <TextField
                type="text"
                variant="outlined"
                label="Product Type"
                name="name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <TextField
                type="text"
                variant="outlined"
                label="Case Size"
                name="caseSize"
                value={caseSize}
                required
                onChange={(e) => setCaseSize(e.target.value)}
              />
              <br />
              <TextField
                type="text"
                variant="outlined"
                label="Quantity Description"
                name="quantityDesc"
                required
                value={quantityDesc}
                onChange={(e) => setQuantityDesc(e.target.value)}
              />
              <br />

              {wholesalePrices &&
                wholesalePrices.map((tier, index) => (
                  <React.Fragment key={"PricingTier" + index}>
                    <br />
                    <TextField
                      type="number"
                      variant="outlined"
                      value={wholesalePrices[index].tierMin}
                      label={"Tier " + (index + 1) + " Minimum Quantity"}
                      helperText="Minimum number of items sold to get this pricing tier"
                      onChange={(e) =>
                        updateTierQuantity(index, e.target.value)
                      }
                    />
                    <br />
                    <TextField
                      type="number"
                      variant="outlined"
                      value={wholesalePrices[index].price}
                      label={"Tier " + (index + 1) + " Price"}
                      helperText={
                        index + 1 === wholesalePrices.length
                          ? wholesalePrices[index].tierMin + " or more"
                          : "Up to " +
                            (wholesalePrices[index + 1].tierMin - caseSize)
                      }
                      onChange={(e) => updateTierPrice(index, e.target.value)}
                    />
                  </React.Fragment>
                ))}

              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(e) => setIsActive(e.target.checked)}
                    checked={isActive}
                  />
                }
                label="Active Product"
              />
              <br />

              <Button
                onClick={submitForm}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Update Product Type
              </Button>
            </FormControl>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default AdminEditProductType;
