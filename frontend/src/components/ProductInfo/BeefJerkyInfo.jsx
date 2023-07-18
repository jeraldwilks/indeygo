import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import StarsIcon from "@mui/icons-material/Stars";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

const BeefJerkyInfo = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Box sx={{ width: "850px", position: "relative" }}>
          <div style={{ position: "relative" }}>
            <img
              src="../images/productbeefjerky.jpeg"
              alt="Beef Jerky Image"
              style={{
                width: "100%",
                height: "250px", // Adjust the height as needed
                objectFit: "cover",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#fff",
                fontSize: "32px",
                fontWeight: "bold",
              }}
            >
              Beef Jerky Fundraiser
            </div>
          </div>

          <Stack spacing={2}>
            <Item>
              <StarsIcon /> Make 30% Profit per bag
            </Item>
            <Item>
              <StarsIcon /> A delicious and convenient snack-high in protein and
              low in fat
            </Item>
            <Item>
              <StarsIcon /> Perfect fundraising product for sports teams and
              clubs
            </Item>
            <Item>
              <StarsIcon /> Fundraise with brochures or sell directly to your
              supporters by pre-ordering what you want to sell
            </Item>
            <Item>
              <StarsIcon /> Made fresh to order with 100% Canadian Beef
            </Item>
            <Item>
              <StarsIcon /> Each bag contains 200 grams ** Beef Jerky only
              available in Alberta
            </Item>
          </Stack>
        </Box>
      </div>
    </>
  );
};

export default BeefJerkyInfo;
