import * as React from 'react';
import {Typography, Grid, Button} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import Ads from '../../components/Ads';
import TopFive from '../../components/TopFive';
import { fetchProjects } from '../../redux/thunks';
import { useDispatch, useSelector } from 'react-redux';
import Clients from '../../components/Clients';
import ContactUs from '../../components/Contact/ContactUs';
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
  const { projects } = useSelector(
    (state) => state.projects
  )
  
  React.useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
      <Grid container sx={{
        margin:"0px",
        minHeight:"100vh",
        padding:"0px",alignItems:'center',display:'flex',
        width:'100%',
        maxWidth:'1150px',flexDirection:{xs:'column',md:'row'},
        }}>
          
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
          <Typography textAlign={i18n.language!=="ar"?"left":"right"} sx={{fontSize:{xs:18,md:25}, fontWeight:'bold'}}>
            {t('home.title')}
          </Typography>
          <Typography textAlign={i18n.language!=="ar"?"left":"right"} sx={{fontSize:{xs:13,md:20}, fontWeight:'bold'}}>
            {t('home.subtitle')}
          </Typography>
          <Grid item  sx={{p:0}}>
            <Button variant="home" onClick={()=> {navigate("/talents")}} sx={{fontSize:{xs:16,md:22},width:{md:220,xs:160}}}>
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
          <Typography textAlign={i18n.language!=="ar"?"left":"right"} sx={{
            fontWeight:'bold',
            color:'white',
            m:2,
            fontSize:{xs:10,md:15}}}>
            {t('home.top5')}
          </Typography>
          <TopFive items={projects}/>
        </Grid>

        <Grid container sx={{p:0,backgroundColor:'rgba(0, 0, 0, 0)',width:'100%',
          borderRadius:2,
          minHeight:'15vh'
        }}>
          <Typography textAlign={i18n.language!=="ar"?"left":"right"} sx={{
            fontWeight:'bold',
            color:'white',
            m:2,
            fontSize:{xs:10,md:15}}}>
            {t('home.clients')}
          </Typography>
          <Clients items={items}/>
        </Grid>
        <Grid container sx={{p:0,backgroundColor:'rgba(0, 0, 0, 0)',width:'100%',
          borderRadius:2, justifyContent:'center'
        }}>
          <ContactUs/>
        </Grid>

    </Grid>
  );
}

export default Home;