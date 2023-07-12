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
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import InventorySharpIcon from "@mui/icons-material/InventorySharp";
import { DataGrid } from "@mui/x-data-grid";

const theme = createTheme();

const OrganizationsPage = () => {
  const navigate = useNavigate();
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const organizationResponse = await fetch("/api/organization");
      const organizationData = await organizationResponse.json();
      setOrganizations(organizationData);
    };
    loadData();
  }, []);

  const columns = [
    { field: "name", headerName: "Name", width: 200 },
    {
      field: "groupType",
      headerName: "Type of Group",
      width: 150,
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
              editOrganization(cellValues);
            }}
          >
            Edit
          </Button>
        );
      },
    },
  ];

  const editOrganization = (organization) => {
    navigate("/edit-organization/" + organization.id);
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
              Organizations
            </Typography>
            <FormControl fullWidth>
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
                  sortModel={[{ field: "isActive", sort: "desc" }]}
                  getRowId={(row) => row._id}
                  rows={organizations}
                  columns={columns}
                  style={{ flex: 1 }}
                />
              </Box>
              <Button onClick={() => navigate("/add-organization")}>
                Add New Organization
              </Button>
            </FormControl>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default OrganizationsPage;
