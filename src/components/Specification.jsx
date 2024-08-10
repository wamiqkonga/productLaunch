import { Box, Typography,Stack, ListItem , List, ListItemText,ListItemIcon} from '@mui/material'
import React from 'react'
import Spec from "../assets/spec.png";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


const Specification = () => {
  return (
    <>
    <Box sx={{display:"flex"}}>
      <Stack>
      <Typography variant='h3' component="h3" align='left'
      sx={{
        marginTop:"5rem",
        marginLeft:"2rem"
      }}>
        Rule The World With <br />pair of New Run 90
        </Typography>

        <Typography marginTop="13rem" marginLeft="5rem" marginBottom="4rem" variant='h6' component="h6">
          WhereEver you are, WhenEver you want.
          <br />
          Experience the double cusioned foam
          <br />
          with super tracker to measure all the health measurements.
          <br />

        </Typography>
        </Stack>
        
        <Stack sx={{marginLeft:"15rem"}}>
        <img align="right" src={Spec} alt="specImage" />
        <Typography>
          <List>
          <ListItem>
        <ListItemIcon sx={{ minWidth: '20px' }}>
          <FiberManualRecordIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Fitness tracking with its self-lacing technology" />
      </ListItem>
      <ListItem>
        <ListItemIcon sx={{ minWidth: '20px' }}>
          <FiberManualRecordIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="A top choice for racing" />
      </ListItem>
      <ListItem>
        <ListItemIcon sx={{ minWidth: '20px' }}>
          <FiberManualRecordIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="This shoe is equipped with cutting-edge carbon plate technology" />
      </ListItem>
            </List>
            </Typography>
            
        </Stack>
        
    </Box>
    <hr />
    </>
  )
}

export default Specification