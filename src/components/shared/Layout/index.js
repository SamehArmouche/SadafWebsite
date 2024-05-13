
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
  const style = {
    height: '100vh',
    backgroundColor:'#0A0A0A',
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