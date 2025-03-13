import * as React from 'react';
import {Typography, Grid, Button} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import Ads from '../../components/Ads';
import TopFive from '../../components/TopFiveV2';
import { fetchProjects, fetchServices } from '../../redux/thunks';
import { useDispatch, useSelector } from 'react-redux';
import Clients from '../../components/ClientsV2';
import ContactUs from '../../components/Contact/ContactUs';
import MyCarousel from '../../components/Services/Carousel';
import { useLocation } from 'react-router-dom';
import colors from '../../assets/theme/colors';

const items = [ 
  {
    logo_url:"https://storage.googleapis.com/sadaf-website-content/clients/MBC_1.png",
    url:"https://www.mbc.net/"
  },
  {
    logo_url:"https://storage.googleapis.com/sadaf-website-content/clients/marken.jpg",
    url:"https://www.marken.com/"
  },
  {
    logo_url:"https://storage.googleapis.com/sadaf-website-content/clients/netflix.png",
    url:"https://www.netflix.com"
  },
  {
    logo_url:"https://storage.googleapis.com/sadaf-website-content/clients/shahid.jpg",
    url:"https://shahid.mbc.net"
  },
  {
    logo_url:"https://storage.googleapis.com/sadaf-website-content/clients/netflix.png",
    url:"https://www.netflix.com"
  },
  {
    logo_url:"https://storage.googleapis.com/sadaf-website-content/clients/shahid.jpg",
    url:"https://shahid.mbc.net"
  }
]





function Home() {
  
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const contactRef = React.useRef(null);
  const { ref } = location.state || {}; // Accede al estado enviado
  const { projects } = useSelector(
    (state) => state.projects
  )
  const { services } = useSelector(
    (state) => state.services
  )
  
  React.useEffect(() => {
    dispatch(fetchProjects());
    dispatch(fetchServices());
    if(ref){
      contactRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }else{
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }

  }, [dispatch, location.state]);

  return (
      <Grid container sx={{
        margin:"0px",
        minHeight:"100vh",
        padding:"0px",alignItems:'center',display:'flex',
        width:'100%',
        maxWidth:'1150px',flexDirection:{xs:'column',md:'row'},
        
        }}
        
        >
          
      <Grid container sx={{
        height:'90vh',
        backgroundColor:'transparent',p:0, flexDirection:'row',alignContent:'center',justifyContent:'center'}}>
        <Grid item sx={{p:0,
          backgroundColor:'transparent',
          justifyContent:'center',
          alignContent:'center',
          padding:2,
          width:{md:'50%',xs:'100%'}
        }}>
          <Typography textAlign={i18n.language!=="ar"?"left":"right"} sx={{
            fontSize:{md:55,xs:28}, fontWeight:'bold',color:'white'}}>
            {t('home.title')}
          </Typography>
          <Typography textAlign={i18n.language!=="ar"?"left":"right"} sx={{fontSize:{md:24,xs:15},color:'white', fontWeight:'bold'}}>
            {t('home.subtitle')}
          </Typography>
          <Grid item  sx={{p:0}}>
            <Button variant="serviceRequest"                 
                  sx={{
                    mb:2,
                    mt:{md:8,xs:2},
                    fontSize:{xs:16,md:22},
                    backgroundColor:colors.primary,
                    color:'black',
                    width:{md:220,xs:160},
                    borderRadius:10,
                    '&:hover': {
                      backgroundColor:colors.hover
                    }
                    //background:`linear-gradient(to top, rgba(247, 216, 159, 1) 0%,rgba(247, 216, 159, 1) 100%)`
                  }}onClick={()=> {navigate("/talents")}} 
                  //sx={{fontSize:{xs:16,md:22},width:{md:220,xs:160}}}
                  >
            {t('button.joinUs')}
            </Button> 
          </Grid>
        </Grid>

        <Grid item sx={{p:0,backgroundColor:'transparent',width:{md:'50%',xs:'100%'}}}>
          <Ads/>
        </Grid>
      </Grid>
  
        <Grid container sx={{p:0,backgroundColor:'rgba(0, 0, 0, 0)',width:'100%',
          borderRadius:2,
          minHeight:'20vh'
        }}>
          <Typography textAlign={i18n.language==="ar"?"right":"left"} sx={{
            fontWeight:'bold',
            color:'white',
            width:'100%',
            m:2,
            fontSize:{xs:10,md:18}}}>
            {t('home.top5')}
          </Typography>
          <TopFive items={projects}/>
        </Grid>
        <Grid container sx={{backgroundColor:'rgba(0, 0, 0, 0)',width:'100%',
          borderRadius:2,
          pb:3,
          minHeight:'20vh'
        }}>
          <Typography textAlign={i18n.language==="ar"?"right":"left"} sx={{
            fontWeight:'bold',
            color:'white',
            width:'100%',
            m:2,
            fontSize:{xs:10,md:18}}}>
            {t('home.services')}
          </Typography>
          <MyCarousel items={services}  onClick={()=>navigate("/services")}/>
        </Grid>

        <Grid container sx={{p:0,backgroundColor:'rgba(0, 0, 0, 0)',width:'100%',
          borderRadius:2,
          minHeight:'15vh'
        }}>
          <Typography textAlign={i18n.language==="ar"?"right":"left"}sx={{
            fontWeight:'bold',
            color:'white',
            width:'100%',
            m:2,
            fontSize:{xs:10,md:18}}}>
            {t('home.clients')}
          </Typography>
          <Clients items={items}/>
        </Grid>

        {<Grid container ref={contactRef} sx={{p:0,backgroundColor:'rgba(0, 0, 0, 0)',width:'100%',
          borderRadius:2, justifyContent:'center',minHeight:'15vh'
        }}>
          <ContactUs  />
        </Grid>
        }
    </Grid>
  );
}

export default Home;