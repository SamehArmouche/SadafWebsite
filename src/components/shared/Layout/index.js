
import myImg from '../../../assets/images/home.jpg';
import Container from '@mui/material/Container';
import Header from '../Header';
import { Outlet } from 'react-router-dom'
function Layout(home) {
  return (
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
  );
}

export default Layout;