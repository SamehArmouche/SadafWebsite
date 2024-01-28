
import homeImg from '../../../assets/images/home.jpg';
import talentImg from '../../../assets/images/talent.jpg';
import Container from '@mui/material/Container';
import Header from '../Header';
import Footer from '../Footer';
import Loading from '../../Loading';
import React from "react";
import { Outlet, useLocation } from 'react-router-dom'

function Layout() {
  const location = useLocation();

  const styleHome = {
    backgroundImage:`url(${homeImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    p:0,
    m:0,
  }
  const styleTalent = {
    backgroundImage:`url(${talentImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    p:0,
    m:0,
  }
  const style = {
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
    <Container         
      sx={getBackground} maxWidth="false">
      <React.Suspense fallback={<Loading/>}>
        <Header/>
        <main style={{minHeight:'72vh'}}>
          <Outlet />
        </main>
        <Footer/>
      </React.Suspense>
   </Container>
  );
};

export default Layout;