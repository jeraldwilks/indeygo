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
import { useNavigate, useParams } from "react-router-dom";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import Typography from "@mui/material/Typography";

const theme = createTheme();

const AdminEditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
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
      setIsActive(data[0].isActive);
      const ind = typeData.findIndex((item) => {
        return item._id === data[0].productType;
      });

      setProductType(typeData[ind]);
    };

    initialLoad();
  }, []);

  const submitForm = async () => {
    const response = await fetch("/api/product/", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: id,
        productType,
        name,
        description,
        isActive,
      }),
    });
    alert(await response.text());
    navigate("/admin-products");
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
