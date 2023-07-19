import React, { useState } from "react";
import { Link } from "react-router-dom";
import CookieDoughInfo from "./ProductInfo/CookieDoughInfo";
import MuffinDoughInfo from "./ProductInfo/MuffinDoughInfo";
import CinnamonAndStickyBunInfo from "./ProductInfo/CinnamonAndStickyBunInfo";

import { Box, Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import CoffeeAndTeaInfo from "./ProductInfo/CoffeeAndTeaInfo";
import BeefJerkyInfo from "./ProductInfo/BeefJerkyInfo";
import HarvestBundleInfo from "./ProductInfo/HarvestBundleInfo";

const ProductDisplay = () => {
  const [showCookieDoughInfo, setShowCookieDoughInfo] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleImageClick = (product) => {
    setSelectedProduct(product);
    setShowCookieDoughInfo(true);
  };

  const handleCloseCookieDoughInfo = () => {
    setSelectedProduct(null);
    setShowCookieDoughInfo(false);
  };

  return (
<>
<Box
      sx={{
        flexGrow: 1,
        fontFamily: "sans-serif",
        fontWeight: 700,
        letterSpacing: ".9rem",
        color: "inherit",
        textDecoration: "none",
        marginLeft: "3rem",
        display: "flex",
        alignItems: "center",
        padding: "8px",
        maxWidth: "900px", // Set the maximum width here
        margin: "0 auto", // Center the container horizontally
      }}
    >
<Grid container spacing={1} justifyContent="space-between">
  <Grid item>
    <CookieDoughInfo/>
  </Grid>
  <Grid item>
    <MuffinDoughInfo/>
    </Grid>
  <Grid item>
    <CinnamonAndStickyBunInfo/>
    </Grid>
  <Grid item>
    <CoffeeAndTeaInfo/>
    </Grid>
  <Grid item>
    <BeefJerkyInfo/>
    </Grid>
  <Grid item>
    <HarvestBundleInfo/>
    </Grid>
  <Grid item>
    <CookieDoughInfo/>
    </Grid>
  <Grid item>
    <CookieDoughInfo/>
    </Grid>
    </Grid>
</Box>

  
    </>
  );
};

export default ProductDisplay;











//I will delete this code later : Rini




// import React from "react";
// import { Link } from "react-router-dom";
// import CookieDoughInfo from "./ProductInfo/CookieDoughInfo";

// import {
//   Box,
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
//   Grid,
// } from "@mui/material";

// // const products = [
//   // {
//   //   id: "cd",
//   //   name: "Cookie Dough",
//   //   imageUrl: "../images/productcookiedough.jpeg",
//   // },
//   // {
//   //   id: "md",
//   //   name: "Muffin Dough",
//   //   imageUrl: "../images/productmuffindough.jpeg",
//   // },
//   // {
//   //   id: "csb",
//   //   name: "Cinnamon & Sticky Bun",
//   //   imageUrl: "../images/productcinnamonstickybun.jpeg",
//   // },
//   // {
//   //   id: "ct",
//   //   name: "Coffee & Tea",
//   //   imageUrl: "../images/productcoffeetea.jpeg",
//   // },
//   // {
//   //   id: "bj",
//   //   name: "Beef Jerky",
//   //   imageUrl: "../images/productbeefjerky.jpeg",
//   // },
//   // {
//   //   id: "hb",
//   //   name: "Harvest Bundle",
//   //   imageUrl: "../images/productharvestbundle.jpeg",
//   // },
//   // {
//   //   id: "sph",
//   //   name: "Spring Planters & Herbs",
//   //   imageUrl: "../images/productspringplanter.jpeg",
//   // },
//   // {
//   //   id: "dd",
//   //   name: "Doggie Dough",
//   //   imageUrl: "../images/productdoggiedough.jpeg",
//   // },
//   // Add more products as needed
// // ];

// const ProductDisplay = () => {
//   return (
//     <>
//       <Box
//         sx={{
//           flexGrow: 1,
//           fontFamily: "sans-serif",
//           fontWeight: 700,
//           letterSpacing: ".9rem",
//           color: "inherit",
//           textDecoration: "none",
//           marginLeft: "3rem",
//           display: "flex",
//           alignItems: "center",
//         }}
//       >
//         <Grid container spacing={2}>
//           <Card
//             sx={{ display: "flex", flexDirection: "column", height: "100%" }}
//           >
//             <CardContent sx={{ flexGrow: 2 }}>
//               <CookieDoughInfo />
//               <CookieDoughInfo />
//               <CookieDoughInfo />
//               <CookieDoughInfo />
//               <CookieDoughInfo />
//               <CookieDoughInfo />
//               <CookieDoughInfo />
//               <CookieDoughInfo />
//             </CardContent>
//           </Card>

      
//         </Grid>
//       </Box>
//     </>
//   );
// };

// export default ProductDisplay;










// {products.map((product) => (
//   <Grid item xs={12} sm={6} md={4} key={product.id}>
//     {/* <Link to={`/products/${product.id}`}> */}
//     <Card
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         height: "100%",
//       }}
//     >
//       {/* <CardMedia
//       component="img"
//       image={product.imageUrl}
//       alt={product.name}
//       height="350"
//     /> */}

//       <CardContent sx={{ flexGrow: 1 }}>
//         <Typography variant="h6" component="div" gutterBottom>
//           {/* {product.name} */}
//         </Typography>
//       </CardContent>
//     </Card>
//     {/* </Link> */}
//   </Grid>
// ))}