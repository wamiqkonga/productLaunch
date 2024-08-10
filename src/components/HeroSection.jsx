import { Box, Stack, Typography } from '@mui/material'
import React from 'react';
import Shoes from "../assets/shoe1.png";

const HeroSection = () => {
  return (
    <Box sx={{backgroundColor:"#FFD552", padding :"0px" , height:"32rem" }}> <Typography variant='h1' component="h1" sx={{fontFamily:"Big Shoulders Inline Display" , fontWeight:"1000" , fontSize:"rem" }}>Super Run 90</Typography>
    <Stack sx={{marginLeft:"250px",marginTop:"15px"}} alignItems = "center" direction= "row">
      <Typography variant ="h6" component="h6" sx={{backgroundColor:"#E5201F" , color :"white",padding :"8px", borderRadius:"20px" , fontSize:"15px",fontWeight:"550",fontFamily:"Big Shoulders Inline Display" }}>Starting Price at $100</Typography> <img src={Shoes} alt="shoes" />
      <Typography variant ="h6" component="h6" sx={{backgroundColor:"#E5201F" , padding :"8px" , borderRadius:"20px" , fontSize:"15px",fontWeight:"550", fontFamily:"Big Shoulders Inline Display" , color :"white" }}>Light Weight</Typography> 
    </Stack>
    </Box>
  )
}

export default HeroSection