
import myImg from '../../../assets/images/home.jpg';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Header from '../Header';
import Footer from '../Footer';
import React from "react";
import { Outlet, useLocation } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';

function Layout() {
  const location = useLocation();


  const styleHome = {
    backgroundImage:`url(${myImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    p:0,
    m:0
  }
  const style = {
    width: '100vw',
    height: '100vh',
    p:0,
    m:0
  }

  return (
  <React.Suspense fallback={
    <Box sx={{ display: 'flex',height:"100vh",backgroundColor:'transparent',justifyContent:'center',alignItems:'center' }}>
        <CircularProgress color="inherit" />
    </Box>
  }>
    <Container         
      sx={location.pathname==="/"?styleHome:style} maxWidth="false">
        <Header/>
        <Outlet />
        <Footer/>
      </Container>
  </React.Suspense>
  );
};

export default Layout;