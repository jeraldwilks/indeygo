import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
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

const theme = createTheme();

const SalesPage = () => {
  const navigate = useNavigate();

  const [fundraisers, setFundraisers] = useState([]);
  const [fundraiser, setFundraiser] = useState();
  const [sales, setSales] = useState([]);

  const { user } = useAuth();

  useEffect(() => {
    const loadData = async () => {
      const fundraiserResponse = await fetch(
        "/api/fundraiser?isActive=true&user=" + user._id
      );
      const fundraiserData = await fundraiserResponse.json();
      setFundraisers(fundraiserData);
      setFundraiser(fundraiserData[0]);
    };
    loadData();
  }, []);

  useEffect(() => {
    const getSales = async () => {
      const salesResponse = await fetch(
        "/api/sales?fundraiser=" + fundraiser._id
      );
      const salesData = await salesResponse.json();
      setSales(salesData);
    };
    if (fundraiser) {
      getSales();
    }
  }, [fundraiser]);

  const columns = [
    { field: "name", headerName: "Name", width: 150 },
    {
      field: "Edit",
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
            <FormControl fullWidth>
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
                />
              </Box>
              <Button onClick={() => navigate("/add-sale")}>
                Add New Sale
              </Button>
            </FormControl>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default SalesPage;
