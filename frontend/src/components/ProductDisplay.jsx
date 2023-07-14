import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";

const products = [
  {
    id: 1,
    name: "Cookie Dough",

    imageUrl:
      "../images/productcookiedough.jpeg",
  },
  {
    id: 2,
    name: "Muffin Dough",

    imageUrl:
    "../images/productmuffindough.jpeg",
  },
  {
    id: 3,
    name: "Cinnamon & Sticky Bun",

    imageUrl:
    "../images/productcinnamonstickybun.jpeg",
  },
  {
    id: 4,
    name: "Coffee & Tea",

    imageUrl:
    "../images/productcoffeetea.jpeg",
  },
  {
    id: 5,
    name: "Beef Jerky",

    imageUrl:
    "../images/productbeefjerky.jpeg",
  },
  {
    id: 6,
    name: "Harvest Bundle",

    imageUrl:
    "../images/productharvestbundle.jpeg",
  },
  {
    id: 7,
    name: "Spring Planters & Herbs",

    imageUrl:
    "../images/productspringplanter.jpeg",
  },
  {
    id: 8,
    name: "Doggie Dough",

    imageUrl:
    "../images/productdoggiedough.jpeg",
  },
  // Add more products as needed
];

const ProductDisplay = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        fontFamily: "monospace",
        fontWeight: 700,
        letterSpacing: ".9rem",
        color: "inherit",
        textDecoration: "none",
        marginLeft: "3rem",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card
              sx={{ display: "flex", flexDirection: "column", height: "100%" }}
            >
              <CardMedia
                component="img"
                image={product.imageUrl}
                alt={product.name}
                height="350"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="div" gutterBottom>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductDisplay;
