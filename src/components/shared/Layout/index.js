
import myImg from '../../../assets/images/home.jpg';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Header from '../Header';
import React from "react";
import { Outlet } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';

function Layout(home) {
  return (
  <React.Suspense fallback={
    <Box sx={{ display: 'flex',height:"100vh",backgroundColor:'transparent',justifyContent:'center',alignItems:'center' }}>
        <CircularProgress color="inherit" />
    </Box>
  }>
    <Container         
      sx={{
        backgroundImage:`url(${myImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        p:0,
        m:0
      }} maxWidth="false">
        <Header/>
        <Outlet />
      </Container>
  </React.Suspense>
  );
};

export default Layout;