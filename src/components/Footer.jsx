import React from 'react';
import { Container, Typography, Link, Grid } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f5f5f5', padding: '20px 0', marginTop: '20px' }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="textSecondary">
              We are a company dedicated to providing high-quality products and services. 
              Our mission is to ensure customer satisfaction through innovation and excellence.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2">
              Email: <Link href="wamiqkongwani@gmail.co">wamiqkongwani@gmail</Link>
            </Typography>
            <Typography variant="body2">
              Phone: <Link href="tel:+1234567890">+1 (9149) 586-004</Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://facebook.com" target="_blank" rel="noopener" color="inherit">
              Facebook
            </Link>
            <br />
            <Link href="https://twitter.com" target="_blank" rel="noopener" color="inherit">
              Twitter
            </Link>
            <br />
            <Link href="https://instagram.com" target="_blank" rel="noopener" color="inherit">
              Instagram
            </Link>
          </Grid>
        </Grid>
        <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: '20px' }}>
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
