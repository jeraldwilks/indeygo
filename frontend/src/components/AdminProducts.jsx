import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  Box,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

const AdminProducts = () => {
  const navigate = useNavigate();

  const [availableProductTypes, setAvailableProductTypes] = useState([]);
  const [productType, setProductType] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductTypes = async () => {
      const response = await fetch("/api/productType");
      const data = await response.json();
      setProductType(data[0]);
      setAvailableProductTypes(data);

      const productURL = "/api/product?productType=" + data[0]._id;
      const productResponse = await fetch(productURL);
      const productData = await productResponse.json();
      setProducts(productData);
    };

    getProductTypes();
  }, []);

  const updateProductType = async (prodType) => {
    setProductType(prodType);
    const productURL = "api/product?productType=" + prodType._id;
    const productResponse = await fetch(productURL);
    const productData = await productResponse.json();
    setProducts(productData);
  };

  const columns = [
    { field: "name", headerName: "Name", width: 150 },
    {
      field: "description",
      headerName: "Description",
      width: 300,
    },
    {
      field: "sellPrice",
      headerName: "Price",
      width: 40,
    },
    {
      field: "Edit",
      renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              editProduct(cellValues);
            }}
          >
            Edit
          </Button>
        );
      },
    },
  ];

  const editProduct = (product) => {
    navigate("/admin-edit-product/" + product.id);
  };
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="ProductType-label">Product Type</InputLabel>
        {availableProductTypes.length > 0 && (
          <Select
            labelId="ProductType-label"
            id="ProductType"
            value={productType}
            label="Product Type"
            onChange={(e) => {
              updateProductType(e.target.value);
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
        )}
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            getRowId={(row) => row._id}
            rows={products}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
          />
        </Box>
        <Button onClick={() => navigate("/admin-add-product")}>
          Add New Product
        </Button>
      </FormControl>
    </div>
  );
};

export default AdminProducts;
