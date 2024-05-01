import * as React from 'react';
import {Box, Typography, Grid, Slide, Button} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import Ads from '../../components/Ads'
function Home() {
  
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  return (
    <Box sx={{minHeight:'72vh',alignItems:'center',justifyContent:'space-between',display:'flex',flexDirection:'column',width:'80%'}}>
      <Grid sx={{display:'block',minHeight:150,width:'100%'}}>
      
      </Grid>

      <Slide direction={i18n.language==="ar"?"left":"right"} in={true} mountOnEnter unmountOnExit>
      <Grid container sx={{p:{xs:0,md:0},width:"100%",minHeight:150}}>
        <Grid item sx={{p:0}}>
          <Typography textAlign={i18n.language!=="ar"?"left":"right"} sx={{fontSize:{xs:18,md:25}}}>
            {t('home.title')}
          </Typography>
        </Grid>
        <Grid item xs={8} sx={{p:0}}>
          <Button variant="home" onClick={()=> {navigate("/talents")}}>
            {t('button.joinUs')}
          </Button>
        </Grid>
      </Grid>
      </Slide>

      <Grid container sx={{p:{xs:0,md:0},width:"100%",minHeight:150,alignItems:'center'}}>
        <Ads t={t} i18n={i18n}/>
      </Grid>
    
    </Box>
  );
}

export default Home;