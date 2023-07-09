
import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';

const products = [
  {
    id: 1,
    name: 'Cookie Dough',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'https://indeygo.com/wp-content/uploads/2019/02/cookie-dough-img-2-600x616.jpg',
  },
  {
    id: 2,
    name: 'Muffin Dough',
    description: 'Praesent sagittis ex id purus lobortis varius.',
    imageUrl: 'https://indeygo.com/wp-content/uploads/2019/02/muffin-dough-img-2-600x616.jpg',
  },
  {
    id: 3,
    name: 'Cinnamon & Sticky Bun',
    description: 'Nulla ullamcorper ante a tristique semper.',
    imageUrl: 'https://indeygo.com/wp-content/uploads/2019/02/cinnamon-buns.img_-2-600x616.jpg',
  },
  {
    id: 4,
    name: 'Coffee & Tea',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'https://indeygo.com/wp-content/uploads/2019/02/coffee-tea-img-1-600x616.jpg',
  },
  {
    id: 5,
    name: 'Beef Jerky',
    description: 'Praesent sagittis ex id purus lobortis varius.',
    imageUrl: 'https://indeygo.com/wp-content/uploads/2019/02/beef-jerky-img-3-600x616.jpg',
  },
  {
    id: 6,
    name: 'Harvest Bundle',
    description: 'Nulla ullamcorper ante a tristique semper.',
    imageUrl: 'https://indeygo.com/wp-content/uploads/2019/02/Harvest-Bundle-Veggies-img-1-600x616.jpg',
  },
  {
    id: 7,
    name: 'Spring Planters & Herbs',
    description: 'Praesent sagittis ex id purus lobortis varius.',
    imageUrl: 'https://indeygo.com/wp-content/uploads/2019/02/Spring-Planters-and-Herbs-img-1-600x616.jpg',
  },
  {
    id: 8,
    name: 'Doggie Dough',
    description: 'Nulla ullamcorper ante a tristique semper.',
    imageUrl: 'https://indeygo.com/wp-content/uploads/2021/07/Untitled-1-768x768.png',
  },
  // Add more products as needed
];

const ProductDisplay = () => {
  return (
    <Box sx={{  flexGrow: 1,
        fontFamily: "monospace",
        fontWeight: 700,
        letterSpacing: ".9rem",
        color: "inherit",
        textDecoration: "none",
        marginLeft: "3rem",
        display: "flex",
        alignItems: "center", }}>
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <CardMedia
              component="img"
              image={product.imageUrl}
              alt={product.name}
              height="200"
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

