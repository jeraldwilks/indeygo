import {
  FormControl,
  Avatar,
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
  TextField,
  Button,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import Typography from "@mui/material/Typography";

const theme = createTheme();

const AdminEditProduct = () => {
  const { id } = useParams();
  const _id = id;
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [sellPrice, setSellPrice] = useState(1);
  const [wholesalePrices, setWholesalePrices] = useState([]);
  const [isActive, setIsActive] = useState(true);
  const [availableProductTypes, setAvailableProductTypes] = useState([]);
  const [productType, setProductType] = useState("");

  useEffect(() => {
    const initialLoad = async () => {
      const typeResponse = await fetch("/api/productType");
      const typeData = await typeResponse.json();
      setAvailableProductTypes(typeData);

      const url = "/api/product?_id=" + id;
      const response = await fetch(url);
      const data = await response.json();
      setName(data[0].name);
      setDescription(data[0].description);
      setSellPrice(data[0].sellPrice);
      setWholesalePrices(data[0].wholesalePrices);
      setIsActive(data[0].isActive);
      const ind = typeData.findIndex((item) => {
        return item._id === data[0].productType;
      });

      setProductType(typeData[ind]);
    };

    initialLoad();
  }, []);

  const updateFieldChanged = (index, value) => {
    let newArr = [...wholesalePrices];
    newArr[index] = parseFloat(value);
    setWholesalePrices(newArr);
  };

  const submitForm = async () => {
    const response = await fetch("/api/product/", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id,
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
                Edit Product
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
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <TextField
                type="text"
                variant="outlined"
                label="Product Description"
                name="description"
                value={description}
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
                value={sellPrice}
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
                      value={wholesalePrices[index]}
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
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(e) => setIsActive(e.target.checked)}
                    checked={isActive}
                  />
                }
                label="Active Product"
              />

              <Button
                onClick={submitForm}
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

export default AdminEditProduct;
