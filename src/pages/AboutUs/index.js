import * as React from 'react';
import {Grid, Fade, Typography} from '@mui/material';
import { useTranslation } from 'react-i18next';

function AboutUs() {
  const { t, i18n } = useTranslation();
  return (
    <Fade  in={true} mountOnEnter unmountOnExit>
      <Grid item xs={7} sx={{p:0,justifyContent:'center',alignItems:'center',display:'flex',minHeight:'72vh',width:'80%',maxWidth:1050}}>
        <Typography sx={{fontSize:20,textAlign:i18n.language==='ar'?'right':'left'}}>{t("aboutus.title")}</Typography>
      </Grid>
    </Fade>
  );
}

export default AboutUs;