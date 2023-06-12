import {
  FormControl,
  FormLabel,
  MenuItem,
  TextField,
  InputLabel,
  Select,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const AdminProduct = () => {
  const [productType, setProductType] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantityDesc, setQuantityDesc] = useState("");
  const [sellPrice, setSellPrice] = useState(1);
  const [wholesalePrices, setWholesalePrices] = useState([]);
  const [availableProductTypes, setAvailableProductTypes] = useState([]);

  useEffect(() => {
    const getProductTypes = async () => {
      const response = await fetch("api/productType");
      setAvailableProductTypes(await response.json());
    };
    getProductTypes();
  }, []);

  return (
    <>
      <FormControl>
        <FormLabel>Add a New Product</FormLabel>
        <br />
        <InputLabel id="ProductType-label">Product Type</InputLabel>
        <Select
          labelId="ProductType-label"
          id="ProductType"
          value={productType}
          // label="Product Type"
          onChange={(e) => {
            setProductType(e.target.value);
          }}
        >
          {availableProductTypes.map((availableProductType) => (
            <MenuItem
              key={availableProductType.name}
              value={availableProductType._id}
            >
              {availableProductType.name}
            </MenuItem>
          ))}
        </Select>
        <TextField
          type="text"
          variant="outlined"
          label="Product Name"
          name="name"
          required
          onChange={(e) => setName(e.target.value)}
        />

        <Button onClick={() => console.log(productType)}>Click</Button>
      </FormControl>
    </>
  );
};

export default AdminProduct;
