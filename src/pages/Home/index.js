import * as React from 'react';
import {Box, Typography, Grid, Slide, Button} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";

function Home() {
  
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  return (
    <Box sx={{minHeight:'72vh',alignItems:'center',justifyContent:'center',display:'flex',flexDirection:'column',width:'80%'}}>


      <Slide direction={i18n.language==="ar"?"left":"right"} in={true} mountOnEnter unmountOnExit>
      <Grid container sx={{p:2,width:"100%",height:'60%',m:2,justifyContent:'flex-end',flexDirection:'column'}}>
        <Grid item sx={{p:0,width:"100%"}}>
          <Typography textAlign={i18n.language!=="ar"?"left":"right"} sx={{fontSize:{xs:18,md:25}}}>
            {t('home.title')}
          </Typography>
          <Typography textAlign={i18n.language!=="ar"?"left":"right"} sx={{fontSize:{xs:13,md:20}}}>
            {t('home.subtitle')}
          </Typography>
        </Grid>
        <Grid item  sx={{p:0}}>
          <Button variant="home" onClick={()=> {navigate("/talents")}} sx={{fontSize:{xs:16,md:22},width:{md:220,xs:160}}}>
            {t('button.joinUs')}
          </Button>
        </Grid>
      </Grid>
      </Slide>    
    </Box>
  );
}

export default Home;