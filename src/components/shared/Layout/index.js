
import Container from '@mui/material/Container';
import Header from '../Header';
import Footer from '../Footer';
import Loading from '../../Loading';
import React from "react";
import { Outlet, useLocation } from 'react-router-dom'

function Layout() {
  const location = useLocation();

  const styleHome = {
    height: '100vh',
    p:0,
    m:0,
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
          <source src="https://uploads-ssl.webflow.com/629a2cfb8f581b5d1399061e/629a2cfb8f581b4ee29906e8_%D8%B3%D8%B1%D9%8A%D8%B9%20%D8%B3%D8%B1%D9%8A%D8%B9%2039%20%D8%AB%D8%A7%D9%86%D9%8A%D8%A9-transcode.mp4" data-wf-ignore="true"/>
          <source src="https://uploads-ssl.webflow.com/629a2cfb8f581b5d1399061e/629a2cfb8f581b4ee29906e8_%D8%B3%D8%B1%D9%8A%D8%B9%20%D8%B3%D8%B1%D9%8A%D8%B9%2039%20%D8%AB%D8%A7%D9%86%D9%8A%D8%A9-transcode.webm" data-wf-ignore="true"/>
        </video>
        }

      <React.Suspense fallback={<Loading/>}>
        <Header/>
        <main >
          <Outlet />
        </main>
        <Footer/>
      </React.Suspense>
   </Container>
  );
};

export default Layout;