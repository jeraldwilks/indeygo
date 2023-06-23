import React, { useState, useEffect } from "react";
import { useAuth } from "../providers/AuthProvider";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const SalePage = () => {
  const { user } = useAuth();
  const [fundraisers, setFundraisers] = useState([]);
  const [productTypes, setProductTypes] = useState([]);
  const [availableProducts, setAvailableProducts] = useState([]);

  const [fundraiser, setFundraiser] = useState();
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState([]);

  useEffect(() => {
    const getFundraisers = async () => {
      const url = "api/fundraiser?isActive=true&user=" + user._id;
      const response = await fetch(url);
      const data = await response.json();
      if (data.length === 0) {
        alert("Please create a fundraiser first.");
        navigate("/Fundraiser");
      } else {
        setFundraisers(data);
        setFundraiser(data[0]);
        for (const prodType of data[0].productTypes) {
          const url = "api/product?isActive=true&productType=" + prodType;
          const response = await fetch(url);
          const productData = await response.json();
          for (const prod of productData) {
            setProducts((prevArray) => [...prevArray, productData]);
            setQuantities((prevArray) => [...prevArray, 0]);
          }
        }
      }
    };

    // const getProducts = async () => {
    //   const url = "api/products?isActive=true&"
    // }
    getFundraisers();
  }, []);

  //   useEffect(() => {
  //     const getProducts = async () => {
  //       setProductTypes(fundraiser.productTypes);
  //       const response = await fetch("api/product", {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           productTypes,
  //         }),
  //       });
  //       setAvailableProducts(await response.json());
  //     };
  //     getProducts();
  //   }, [fundraiser]);

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
        quantities,
      }),
    });
    alert(await response.text());
  };

  return (
    <FormControl>
      <Typography>Add a New Sale</Typography>
      <FormControl>
        <InputLabel>Fundraiser:</InputLabel>
        <Select
          labelId="Fundraiser-label"
          id="Fundraiser"
          value={fundraiser}
          label="Fundraiser"
          onChange={(e) => {
            setFundraiser(e.target.value);
          }}
          required
        >
          {fundraisers.map((selectedFundraiser) => (
            <MenuItem key={selectedFundraiser.name} value={selectedFundraiser}>
              {selectedFundraiser.name}
            </MenuItem>
          ))}
        </Select>
        <br />
        <TextField
          type="text"
          variant="outlined"
          label="Seller's Name"
          name="name"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <TextField
          type="text"
          variant="outlined"
          label="Seller's Phone Number"
          name="phoneNumber"
          required
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </FormControl>
      <br />
      <Button onClick={() => console.log(products)}>Press</Button>
    </FormControl>
  );
};

export default SalePage;
