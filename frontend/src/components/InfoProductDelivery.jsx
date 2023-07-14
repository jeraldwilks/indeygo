import React from "react";
import Box from "@mui/material/Box";

const InfoProductDelivery = () => {
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
    
    
      <h2>Deliver Product</h2>
      
      <ul>
        When delivery day arrives, make sure you have a few volunteers to help
        sort and distribute the order using the original order forms. Count
        everything upon delivery, ensure nothing is damaged or dented. Mark any
        discrepancies or damage on the waybill. Sort and send the product home
        with your happy participants and customers.
      </ul>
      
      </Box>
    </div>
    </>
  );
};

export default InfoProductDelivery;
