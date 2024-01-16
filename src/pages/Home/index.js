import { motion } from "framer-motion"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function Home() {
  return (
    <Box sx={{height:'75.5%',alignItems:'center',justifyContent:'center',display:'flex'}}>
      <Grid container sx={{margin:0,p:{xs:0,md:0},width:"80%"}}>
        <Grid item xs={8} sx={{p:0}}>
          <Typography textAlign="left" sx={{fontSize:{xs:18,sm:30}}}>
              {"Be the star of the future, Talent Road."}
          </Typography>
          <Typography textAlign="left" sx={{fontSize:{xs:18,sm:30}}}>
              {"The largest Arab project to discover actresses and actors"}
          </Typography>
        </Grid>
        <Grid item xs={8} sx={{p:0}}>
        <Button variant="home"
              >
            {"Join us"}
        </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;