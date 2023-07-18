import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import StarsIcon from "@mui/icons-material/Stars";
import { Button } from "@mui/material";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

// Custom styles for the button
const DownloadButton = styled(Button)({
  border: "2px solid #0B4D83", // Replace #000 with your desired border color
  padding: "10px 20px",
  fontSize: "16px",
  fontWeight: "bold",
  fontPalette: "#0B4D83",
  marginTop: "30px",
});

// download pdf button here

const BeefJerkyInfo = () => {
  const handleDownloadPDF = () => {
    const pdfPath = "../pdfs/BeefJerky2022.pdf";
    window.open(pdfPath, "_blank");
  };

  return (
    <>
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
      <div style={{ position: "relative" }}>
        <img
          src="../images/productbeefjerky.jpeg"
          alt="Beef Jerky Image"
          style={{
            width: "1000px",
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

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          // minHeight: "100vh",
        }}
      >
        <Box sx={{ width: "100%", position: "relative", ml: 30 }}>
          <Stack spacing={4}>
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="../images/BeefJerkyFrontPage.jpeg"
            alt="Beef Jerky Image"
            style={{
              width: "50%",
              height: "150%", // Adjust the height as needed
              objectFit: "cover",
            }}
          />
          <DownloadButton onClick={handleDownloadPDF}>
            Download Brochure
          </DownloadButton>
        </div>
      </div>
      </Box>
    </>
  );
};

export default BeefJerkyInfo;
