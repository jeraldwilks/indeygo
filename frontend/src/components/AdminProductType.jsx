//Original

import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import InventorySharpIcon from "@mui/icons-material/InventorySharp";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  Box,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

const AdminProductType = () => {
  const navigate = useNavigate();

  const [availableProductTypes, setAvailableProductTypes] = useState([]);
  const [productType, setProductType] = useState("");
  const [products, setProducts] = useState([]);



useEffect(() => {
    const getProductTypes = async () => {
      const response = await fetch("/api/productType");
      const data = await response.json();

      const formattedProductTypes = data.map((productType) => ({
        id: productType._id,
        ...productType,
      }));

      setAvailableProductTypes(formattedProductTypes);
    };
    getProductTypes();
  }, []);




  const columns = [
    { field: "name", 
    headerName: "Product Type", 
    width: 150 },
    {
      field: "caseSize",
      headerName: "Case Size",
      width: 100,
    },
    {
      field: "quantityDesc",
      headerName: "Quantity Description",
      width: 300,
    },
    {
        field: "isActive",
        headerName: "Product Active",
        width: 100,
      },

    {
      field: "Edit",
      renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            color="primary"
            width= "40"
            onClick={() => {
              editProductType(cellValues);
              
            }}
          >
            Edit
          </Button>
        );
      },
    },
  ];

  const editProductType = (productType) => {
    navigate("/admin-edit-product-type/" + productType.id);
  };

  return (

<>
<div>
      <Container component="main" maxWidth="string">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Product Types
          </Typography>
          <Box sx={{ height: 300, width: "100%" }}>
            <DataGrid
              rows={availableProductTypes}
              columns={columns}
              pageSize={5}
              autoHeight
              disableSelectionOnClick
            />
          </Box>
         
        </Box>
      </Container>
      
    <Box sx={{ m: 20, display: "flex", justifyContent: "center" }}>
        <Button
        
        onClick={() => navigate("/admin-add-product-type")}>
                Add New Product
              </Button>
              </Box>
    </div>
    </>
  );
};


export default AdminProductType;
