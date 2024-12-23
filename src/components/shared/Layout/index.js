
import Container from '@mui/material/Container';
import Header from '../Header';
import Footer from '../Footer';
import Loading from '../../Loading';
import React from "react";
import { Outlet, useLocation } from 'react-router-dom'
//import video from '../../../../public/background.mp4'
function Layout() {
  const location = useLocation();

  const styleHome = {
    height: '100vh',
    p:0,
    m:0,
    borderColor:'red',
    borderWidth:20,
    
    justifyContent:'center'
  }
  const styleTalent = {
    backgroundImage:`url(/images/talent.jpg)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    p:0,
    m:0,
  }

  const styleService = {
    backgroundImage:`url(/images/services.png)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    p:0,
    m:0,
  }

  const style = {
    height: '100vh',
    backgroundColor:'#1A1917',
    p:0,
    m:0
  }
  const getBackground = () =>{


    switch (location.pathname) {
      case "/":
        return styleHome;
      case "/services":
        return styleService;
      case "/talents":
        return styleTalent;
      default:
        return style;
    }
  }

  return (
    <Container         
      sx={getBackground} maxWidth="false">
        {
          location.pathname==="/" &&
        <video id="background-video" playsInline loop autoPlay muted autobuffer={"true"}>
          <source src="/background.mp4" data-wf-ignore="true"/>
        </video>
        }

      <React.Suspense fallback={<Loading/>}>
        <Header/>
        <main style={{justifyContent:'center',display:'flex'}} >
          <Outlet />
        </main>
        <Footer/>
      </React.Suspense>
   </Container>
  );
};

export default Layout;