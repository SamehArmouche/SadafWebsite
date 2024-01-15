
import myImg from '../../assets/images/home.jpg';
import Container from '@mui/material/Container';
import Header from '../../components/shared/Header';

function Home() {
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
    }} 
    maxWidth="false">
      <div style={{backgroundColor:'red',height:20}}>
        <Header/>
        </div>

      </Container>
  );
}

export default Home;