import {Grow, Grid, CardActionArea, Typography} from '@mui/material';
import React, { useState } from  'react';
import { useIsVisible } from '../../../helpers/usIsInvisible'
import {EmojiEvents, Public, VideoLibrary, MiscellaneousServices, LocationOn, Flag} from '@mui/icons-material';
import AnimatedNumber from '../AnimatedNumber';



const informations = [{
  title_en:"Talent",
  title_ar:"موهبة",
  counter:29,
  icon:<EmojiEvents sx={{fontSize:{md:45,xs:30, color:'white'}}}/>
},{
  title_en:"Country",
  title_ar:"دولة",
  counter:939,
  icon:<Public sx={{fontSize:{md:45,xs:30}, color:'white'}}/>
},{
  title_en:"Project",
  title_ar:"عمل",
  counter:129,
  icon:<VideoLibrary sx={{fontSize:{md:45,xs:30}, color:'white'}}/>
},{
  title_en:"Services",
  title_ar:"خدمة لوجستية",
  counter:2229,
  icon:<MiscellaneousServices sx={{fontSize:{md:45,xs:30}, color:'white'}}/>
},{
  title_en:"Locations",
  title_ar:"المواقع",
  counter:19,
  icon:<LocationOn sx={{fontSize:{md:45,xs:30}, color:'white'}}/>
},{
  title_en:"Since",
  title_ar:"سنة التأسيس",
  counter:2003,
  icon:<Flag sx={{fontSize:{md:45,xs:30}, color:'white'}}/>
}]

const Information = ({items, i18n, t}) =>{
  const ref = React.useRef();
  const isVisible = useIsVisible(ref);

  return (
    <Grid ref={ref}  
    sx={{
      mt:0, 
      display:'flex',
      justifyContent:{md:'center',xs:'center'},
      flexDirection:{md:'row',xs:'column'},
      width:'100%',
      borderRadius:2,
      backgroundColor:'rgba(0,0,0,0)',
      }}>
      <Grid container sx={{
        height:'100%',p:2, width:'100%',justifyContent:'flex-start',
        alignContent:'flex-start',
        flexDirection:'column'
      }}>
        <Typography sx={{fontSize:{md:22,xs:15,textAlign:'start', color:'white'}}}> {t("aboutus.lets_talk")}</Typography>
        <Typography sx={{fontSize:{md:35,xs:25},fontWeight:'bold',textAlign:'start', color:'white'}}>  {t("aboutus.numbers")}</Typography>
      </Grid>

      <Grid container sx={{backgroundColor:'rgba(22,33,220,0)',height:'100%',p:0,justifyContent:{md:'end',sm:'center',xs:'center'}}}>
      {isVisible && 
        informations.map((item,i)=>{
          return(
            <Grid item key = {i} sx={{
              backgroundColor:'rgba(0,0,0,0)',
              width:{md:135,xs:90},
              borderRadius:2,p:2,m:0.5,alignItems:'end',justifyContent:'center'
              ,display:'flex',flexDirection:'column'}}>
              {item.icon}
              <AnimatedNumber i18n={i18n} index={item.counter} style={{fontSize:{md:30,xs:20}}}></AnimatedNumber>
              <Typography textAlign={'left'} sx={{fontSize:{md:15,xs:10},display:'flex',
                mr:0,
                ml:0,
                pr:0.5,
                pl:0.5,
                color:'rgba(255,255,255,0.9)',
                alignItems:'center',fontWeight:'light',
              }}>{`${item[`title_${i18n.language}`]}`}</Typography>
            </Grid>
          )
        })   
      }
      </Grid>
    </Grid>
  );
}


export default Information