import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material';
import image from "../assets/price.png"

function Pricing() {
  const product = {
    name: 'Super Run 90',
    description: 'Experience the ultimate comfort and style with the Super Run 90, designed for everyday wear and all-day support.',
    price: 150,
    imageUrl: [image], 
  };

  return (
    <Grid container spacing={4} justifyContent="center" style={{ marginTop: '50px' }}>
      <Grid item xs={12} sm={8} md={6}>
        <Card sx={{ maxWidth: 800, margin: '0 auto' }}>
          <CardMedia
            component="img"
            alt={product.name}
            height="300px"
            width="700px"
            image={product.imageUrl}
            title={product.name}
          />
          <CardContent>
            <Typography variant="h4" component="div" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ marginBottom: 2 }}>
              {product.description}
            </Typography>
            <Typography variant="h5" color="text.primary" sx={{ marginBottom: 3 }}>
              ${product.price}
            </Typography>
            <Button variant="contained" color="primary" size="large">
              Buy Now
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Pricing;
