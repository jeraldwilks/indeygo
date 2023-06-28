//Original

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  Typography,
} from "@mui/material";
import EditSharpIcon from "@mui/icons-material/EditSharp";

const theme = createTheme();

const AdminEditProductType = () => {
  const { id } = useParams();
  const _id = id;
  const [name, setName] = useState("");
  const [caseSize, setCaseSize] = useState("");
  const [quantityDesc, setQuantityDesc] = useState("");
  const [priceTierMin, setPriceTierMin] = useState([]);

  // const [availableProductTypes, setAvailableProductTypes] = useState([]);
  // const [productType, setProductType] = useState("");

  useEffect(() => {
    const initialLoad = async () => {
      const typeResponse = await fetch("/api/productType?_id=" +id);
      const typeData = await typeResponse.json();
      console.log(typeData);
      console.log("typedata");


     

      setName(typeData[0].name);
      setCaseSize(typeData[0].caseSize);
      setQuantityDesc(typeData[0].quantityDesc);
      setPriceTierMin(typeData[0].priceTierMin);

    };

    initialLoad();
  }, []);

  const updateFieldChanged = (index, value) => {
    let newArr = [...priceTierMin];
    newArr[index] = parseFloat(value);
    setPriceTierMin(newArr);
  };

  const submitForm = async () => {
    const response = await fetch("/api/productType/", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id,
        name,
        caseSize,
        quantityDesc,
        priceTierMin,
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
              {priceTierMin &&
                priceTierMin.map((priceTier, index) => (
                  <>
                    <br />
                    <TextField
                      key={"tier" + index}
                      type="number"
                      variant="outlined"
                      value={priceTierMin[index]}
                      label={"Tier " + (index + 1) + " Price"}
                      helperText={
                        index + 1 === priceTierMin.length
                          ? priceTier + " or more"
                          : "Up to " +
                            (priceTierMin[index + 1] -
                              caseSize)
                      }
                      onChange={(e) =>
                        updateFieldChanged(index, e.target.value)
                      }
                    />
                  </>
                ))}

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
