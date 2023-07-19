import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import InventorySharpIcon from "@mui/icons-material/InventorySharp";
import { DataGrid } from "@mui/x-data-grid";
import { PDFDownloadLink } from "@react-pdf/renderer";
import DistributionReport from "../components/DistributionReport";
// import DistributionReport from "../components/DistributionReport";

const theme = createTheme();

const SalesPage = () => {
  const navigate = useNavigate();

  const [fundraisers, setFundraisers] = useState([]);
  const [fundraiser, setFundraiser] = useState();
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const fundraiserResponse = await fetch("/api/fundraiser?isActive=true");
      const fundraiserData = await fundraiserResponse.json();
      setFundraisers(fundraiserData);
      setFundraiser(fundraiserData[0]);
    };
    loadData();
  }, []);

  useEffect(() => {
    const getSales = async () => {
      const salesResponse = await fetch(
        "/api/sales/expanded?fundraiser=" + fundraiser._id
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

  const columns = [
    { field: "name", headerName: "Name", width: 200 },
    { field: "phoneNumber", headerName: "Phone Number", width: 200 },
    { field: "qty", headerName: "Items Sold", width: 100 },
    {
      field: "totalSales",
      headerName: "Total Sold",
      width: 100,
      valueFormatter: (params) => `$${params.value}`,
    },
    {
      field: "Edit",
      width: 100,
      renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              editSale(cellValues);
            }}
          >
            Edit
          </Button>
        );
      },
    },
  ];

  const editSale = (sale) => {
    navigate("/edit-sale/" + sale.id);
  };
  return (
    sales && (
      <div>
        <ThemeProvider theme={theme}>
          <Container component="main" sx={{ width: "75%" }}>
            <CssBaseline />
            <Box
              sx={{
                marginTop: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <InventorySharpIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sales
              </Typography>
              <FormControl>
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
                <Box
                  sx={{
                    display: "flex",
                    height: 400,
                    width: "100%",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <DataGrid
                    getRowId={(row) => row._id}
                    rows={sales}
                    columns={columns}
                    style={{ flex: 1 }}
                  />
                </Box>
                <Button onClick={() => navigate("/add-sale")}>
                  Add New Sale
                </Button>
                <PDFDownloadLink
                  document={
                    <DistributionReport sales={sales} fundraiser={fundraiser} />
                  }
                  fileName="DistributionReport"
                >
                  {({ loading }) =>
                    loading ? (
                      <Button>Loading Report...</Button>
                    ) : (
                      <Button>Download Distribution Report</Button>
                    )
                  }
                </PDFDownloadLink>
                <Button onClick={() => console.log(sales)}>Test</Button>
              </FormControl>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    )
  );
};

export default SalesPage;
