import React, { useEffect, useState } from "react";
import GetStarted from "./GetStarted";

const DashboardContent = () => {
  const [fundraisers, setFundraisers] = useState([]);
  const [fundraiser, setFundraiser] = useState();
  const [sales, setSales] = useState([]);

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
    };
    if (fundraiser) {
      getSales();
    }
  }, [fundraiser]);

  return <div> {fundraiser === undefined && <GetStarted />}</div>;
};

export default DashboardContent;
