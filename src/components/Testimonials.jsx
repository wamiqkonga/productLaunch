import React from 'react';
import { Card, CardContent, Typography, Grid, Avatar, Box ,Rating} from '@mui/material';

const testimonials = [
  {
    name: 'Jane Doe',
    role: 'Software Engineer',
    testimonial: 'This product has completely transformed my workflow. I can’t imagine going back to the old way of doing things!',
    avatarUrl: 'https://via.placeholder.com/150', 
    rating: 5,
  },
  {
    name: 'John Smith',
    role: 'Product Manager',
    testimonial: 'Amazing experience! The team was very supportive and the product exceeded my expectations.',
    avatarUrl: 'https://via.placeholder.com/150', 
    rating: 5,
  },
  {
    name: 'John Smith',
    role: 'Product Manager',
    testimonial: 'Amazing experience! The team was very supportive and the product exceeded my expectations.',
    avatarUrl: 'https://via.placeholder.com/150', 
    rating: 5,
  },
  {
    name: 'John Smith',
    role: 'Product Manager',
    testimonial: 'Amazing experience! The team was very supportive and the product exceeded my expectations.',
    avatarUrl: 'https://via.placeholder.com/150', 
    rating: 5,
  },
  
  // Add more testimonials as needed
];

function TestimonialCard({ name, role, testimonial, avatarUrl ,rating}) {
  return (
    
    <Card sx={{ maxWidth: 345, margin: '10px auto 40px', backgroundColor:"black", borderRadius:"20px" }}>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar src={avatarUrl} alt={name} />
          </Grid>
          <Grid item>
            <Typography variant="h6" component="div" color="white">
              {name}
            </Typography>
            <Typography variant="body2" color="white">
              {role}
            </Typography>
            <Rating name="read-only" value={rating} readOnly />
          </Grid>
        </Grid>
        <Typography variant="body1" component="p" color="white" sx={{ marginTop: 2 }}>
          "{testimonial}"
        </Typography>
      </CardContent>
    </Card>
    
  );
}

function Testimonials() {
  return (
    <Box sx={{backgroundColor:"#FFD552", marginBottom:"0.35rem"}}>
    <Grid container spacing={4} justifyContent="center">
      {testimonials.map((testimonial, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <TestimonialCard {...testimonial} />
        </Grid>
      ))}
    </Grid>
    </Box>
  );
}

export default Testimonials;
