import * as React from 'react';
import {Grid, Fade, Typography} from '@mui/material';
import { useTranslation } from 'react-i18next';
import QouteCEO from '../../components/AboutUs/QouteCEO';
function AboutUs() {
  const { t, i18n } = useTranslation();
  return (
    <Fade  in={true} mountOnEnter unmountOnExit>
      <Grid item sx={{p:0,justifyContent:{xs:'center',md:'flex-start'},alignItems:'center',display:'flex',minHeight:'72vh',width:'80%',maxWidth:1150,flexDirection:'column'}}>
        <Grid item sx={{height:'100%',display:'flex',justifyContent:'space-evenly',flexDirection:'column',


          backgroundColor:'transparent'
        }}>
          <Grid item sx={{justifyContent:{xs:'center',md:'flex-start'},display:'flex',opacity:1,alignItems:'center',pb:{md:3,xs:8},width:'100%',
        
            backgroundColor:'transparent'
            }}>
            {/*--<img src = {"/images/logo.png"}  alt={"sadaf logo"} style={{height:100}}></img>*/} 
            <Typography textAlign={i18n.dir()==="rtl"?"right":"left"}
           sx={{fontSize:{md:20,xs:16},color:'white'}}>{t("aboutus.title")}</Typography>
          </Grid>

          <Grid item sx={{justifyContent:{xs:'center',md:'flex-start'},display:'flex',opacity:1,alignItems:'center',pb:{md:0,xs:8},width:'100%',
        
        backgroundColor:'trasnparent'
        }}>
        {/*--<img src = {"/images/logo.png"}  alt={"sadaf logo"} style={{height:100}}></img>*/} 
        <QouteCEO i18n={i18n} t={t}/>
      </Grid>

        
        </Grid>
      </Grid>
    </Fade>
  );
}

export default AboutUs;