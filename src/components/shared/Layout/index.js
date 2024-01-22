
import homeImg from '../../../assets/images/home.jpg';
import talentImg from '../../../assets/images/talent.jpg';
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
    backgroundImage:`url(${homeImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    p:0,
    m:0,
  }
  const styleTalent = {
    backgroundImage:`url(${talentImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
    p:0,
    m:0,
  }
  const style = {
    width: '100vw',
    height: '100vh',
    p:0,
    m:0
  }
  const getBackground = () =>{
    if(location.pathname==="/"){
      return styleHome;
    }else if(location.pathname==="/talents"){
      return styleTalent
    }else{
      return style;
    }
  }

  return (
  <React.Suspense fallback={
    <Box sx={{ display: 'flex',height:"100vh",backgroundColor:'transparent',justifyContent:'center',alignItems:'center' }}>
        <CircularProgress color="inherit" />
    </Box>
  }>
    <Container         
      sx={getBackground} maxWidth="false">
        <Header/>
        <Outlet />
        <Footer/>
      </Container>
  </React.Suspense>
  );
};

export default Layout;