import * as React from 'react';
import {Grid, Fade, Typography} from '@mui/material';
import { useTranslation } from 'react-i18next';

function AboutUs() {
  const { t, i18n } = useTranslation();
  return (
    <Fade  in={true} mountOnEnter unmountOnExit>
      <Grid item sx={{p:0,justifyContent:{xs:'center',md:'flex-start'},alignItems:'center',display:'flex',minHeight:'72vh',width:'80%',maxWidth:1050,flexDirection:'column'}}>
        <Grid item sx={{height:'80%',alignItems:'center',display:'flex',justifyContent:'space-evenly',flexDirection:'column'}}>

          <Grid item sx={{justifyContent:{xs:'center',md:'flex-start'},display:'flex',opacity:1,alignItems:'center',pb:{md:0,xs:8},width:'100%'}}>
            <img src = {"/images/logo.png"}  alt={"sadaf logo"} style={{height:100}}></img> 
          </Grid>
          <Typography sx={{fontSize:{md:20,xs:16},textAlign:i18n.language==='ar'?'right':'left'}}>{t("aboutus.title")}</Typography>
        
        </Grid>
      </Grid>
    </Fade>
  );
}

export default AboutUs;