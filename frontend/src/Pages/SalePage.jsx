import React, { useState, useEffect } from "react";
import { useAuth } from "../providers/AuthProvider";
import { FormControl, InputLabel, Select, Typography } from "@mui/material";

const SalePage = () => {
  const { user } = useAuth();
  const [fundraisers, setFundraisers] = useState([]);
  const [productTypes, setProductTypes] = useState([]);
  const [availableProducts, setAvailableProducts] = useState([]);

  const [fundraiser, setFundraiser] = useState();
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [products, setProducts] = useState();
  const [quantities, setQuantities] = useState();

  //   useEffect(() => {
  //     const getFundraisers = async () => {
  //       const response = await fetch("api/fundraiser", {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           user,
  //         }),
  //       });
  //       setFundraisers(await response.json());
  //       setFundraiser(fundraisers[0]);
  //     };
  //     getFundraisers();
  //   }, []);

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
          value={fundraiser.name}
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
    </FormControl>
  );
};

export default SalePage;
