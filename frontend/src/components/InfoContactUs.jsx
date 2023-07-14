import React from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

const InfoContactUs = () => {
  return (
    <>
    <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
    >
        <Box
          sx={{
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "16px",
            marginBottom: "16px",
            marginTop: "50px",
            maxWidth: "500Px",
            alignItems: "center",
          }}
        >
    
      <h2>Contact Us</h2>
      <p>
        Contact Indeygo to request your order forms. Keep it simple – choose one
        or two product types from our awesome lineup. Ask us about free shipping
        to your area.
      </p>
      <p>Phone: 1-877-463-3946</p>
      <p>Email: info@indeygo.com</p>
      <p>Fill out one of our online forms</p>
      <div style={{ display: "flex", gap: "10px" }}>
      <Button variant="contained" style={{ backgroundColor: "#0B4D83" }}>I Need More Info</Button>
      <Button variant="contained" style={{ backgroundColor: "#0B4D83" }}>I'm Ready To Book My Fundraiser</Button>
      </div>
      </Box>
    </div>
    </>
  );
};

export default InfoContactUs;
