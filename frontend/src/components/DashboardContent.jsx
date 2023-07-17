import React, { useEffect, useState } from "react";
import GetStarted from "./GetStarted";
import {
  CssBaseline,
  FormControl,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const DashboardContent = () => {
  const [fundraisers, setFundraisers] = useState([]);
  const [fundraiser, setFundraiser] = useState();
  const [sales, setSales] = useState([]);
  const [productTypes, setProductTypes] = useState([]);
  const [topTenSales, setTopTenSales] = useState([]);

  useEffect(() => {
    const initialLoad = async () => {
      const fundraiserResponse = await fetch("/api/fundraiser?isActive=true");
      const fundraiserData = await fundraiserResponse.json();
      if (fundraiserData.length != 0) {
        setFundraisers(fundraiserData);
        setFundraiser(fundraiserData[0]);
      }
    };
    initialLoad();
  }, []);

  useEffect(() => {
    const getSales = async () => {
      const salesResponse = await fetch(
        "/api/sales?fundraiser=" + fundraiser._id
      );
      const salesData = await salesResponse.json();
      for (const sale in salesData) {
        let qty = 0;
        let totalSales = 0;
        for (const product of salesData[sale].products) {
          qty += product.quantity;
          totalSales += product.quantity * product.price;
        }
        salesData[sale].qty = qty;
        salesData[sale].totalSales = totalSales;
      }
      setSales(salesData);
      salesData.sort((a, b) => b.totalSales - a.totalSales);
      let newArray = [];
      for (let i = 0; i < salesData.length && i < 10; i++) {
        newArray.push(salesData[i]);
      }
      setTopTenSales(newArray);

      for (const sale of salesData) {
        for (const product of sale.products) {
        }
      }
    };
    const getSummary = async () => {
      const response = await fetch(
        "/api/productType/summary-by-fundraiser?fundraiser=" + fundraiser._id
      );
    };
    if (fundraiser) {
      getSales();
      getSummary();
    }
  }, [fundraiser]);

  return (
    <div>
      {fundraiser === undefined && <GetStarted />}
      {fundraiser && (
        <>
          <CssBaseline />
          <FormControl>
            <FormGroup>
              <InputLabel id="fundraiser-label">Fundraiser</InputLabel>
              {fundraisers.length > 0 && (
                <Select
                  labelId="fundraiser-label"
                  id="Fundraiser"
                  value={fundraiser}
                  label="Fundraiser"
                  onChange={(e) => {
                    setFundraiser(e.target.value);
                  }}
                  required
                >
                  {fundraisers.map((fundraiser) => (
                    <MenuItem key={fundraiser.name} value={fundraiser}>
                      {fundraiser.name}
                    </MenuItem>
                  ))}
                </Select>
              )}
            </FormGroup>
          </FormControl>
          <h2>{fundraiser.organization.name}</h2>
          <h3>Top Ten Sales</h3>
          <ol>
            {topTenSales.map((sale, index) => (
              <li key={sale._id}>
                {index + 1}. {sale.name} - {sale.qty} items - ${sale.totalSales}
              </li>
            ))}
          </ol>
        </>
      )}
    </div>
  );
};

export default DashboardContent;
