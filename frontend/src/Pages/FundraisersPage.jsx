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

const theme = createTheme();

const FundraisersPage = () => {
  const navigate = useNavigate();

  const [organizations, setOrganizations] = useState([]);
  const [organization, setOrganization] = useState();
  const [fundraisers, setFundraisers] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const organizationResponse = await fetch(
        "/api/organization?isActive=true"
      );
      const organizationData = await organizationResponse.json();
      setOrganizations(organizationData);
      setOrganization(organizationData[0]);
    };
    loadData();
  }, []);

  useEffect(() => {
    const getFundraisers = async () => {
      const fundraiserResponse = await fetch(
        "/api/fundraiser?isActive=true&organization=" + organization._id
      );
      const fundraiserData = await fundraiserResponse.json();
      setFundraisers(fundraiserData);
    };
    if (organization) {
      getFundraisers();
    }
  }, [organization]);

  const columns = [
    { field: "name", headerName: "Name", width: 200 },
    {
      field: "fundraiserTarget",
      headerName: "Target",
      width: 100,
      valueFormatter: (params) => `$${params.value}`,
    },
    {
      field: "startDate",
      headerName: "Start Date",
      width: 100,
      valueFormatter: (params) => new Date(params?.value).toLocaleDateString(),
    },
    {
      field: "endDate",
      headerName: "End Date",
      width: 100,
      valueFormatter: (params) => new Date(params?.value).toLocaleDateString(),
    },
    {
      field: "orderDate",
      headerName: "Order Date",
      width: 100,
      valueFormatter: (params) => new Date(params?.value).toLocaleDateString(),
    },
    {
      field: "deliveryDate",
      headerName: "Delivery Date",
      width: 100,
      valueFormatter: (params) => new Date(params?.value).toLocaleDateString(),
    },
    {
      field: "isActive",
      headerName: "Active",
      width: 100,
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
              editFundraiser(cellValues);
            }}
          >
            Edit
          </Button>
        );
      },
    },
  ];

  const editFundraiser = (fundraiser) => {
    navigate("/edit-fundraiser/" + fundraiser.id);
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
              Fundraisers
            </Typography>
            <FormControl>
              <InputLabel id="organization-label">Organization</InputLabel>
              {organizations.length > 0 && (
                <Select
                  labelId="organization-label"
                  id="Organization"
                  value={organization}
                  label="Organization"
                  onChange={(e) => {
                    setOrganization(e.target.value);
                  }}
                  required
                >
                  {organizations.map((org) => (
                    <MenuItem key={org.name} value={org}>
                      {org.name}
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
                  columnVisibilityModel={{ isActive: false }}
                  sortModel={[{ field: "isActive", sort: "desc" }]}
                  getRowId={(row) => row._id}
                  rows={fundraisers}
                  columns={columns}
                  style={{ flex: 1 }}
                />
              </Box>
              <Button
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => navigate("/add-fundraiser")}
              >
                Start New Fundraiser
              </Button>
            </FormControl>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default FundraisersPage;
