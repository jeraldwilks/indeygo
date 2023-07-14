import React from "react";
import Box from "@mui/material/Box";

const InfoCountCash = () => {
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
          <h2>Count Your Cash</h2>
   

            <ul>Cookie Dough and Muffin Dough (tubs)</ul> 
            Make up to 36%or $7.75/tub 
            <ul>Cookie dough Pre-portioned</ul> 
            Make up to 25% or $5.75/box
            <ul>Cinnamon and Sticky Buns </ul>
            Make up to 30% or $4.25/pack 
            <ul>Coffee/Tea</ul>
            Make up to 30% or $6/bag 
            <ul>Beef Jerky</ul>
            Make up to 30% or $6/pack Spring
            <ul>Planters and Herbs</ul>
            Make up to 30% or $8/basket 
            <ul>* only available in
            Edmonton, Red Deer, Calgary and surrounding areas</ul> 
            <ul>Harvest Veggie</ul>
            Bundles Make up to 30% or $6/bundle 
            <ul>* only available in Edmonton,
            Red Deer, Calgary and surrounding areas</ul>
      
        </Box>
      </div>
    </>
  );
};

export default InfoCountCash;
