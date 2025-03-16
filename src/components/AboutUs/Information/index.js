import {Grow, Grid, CardActionArea, Typography} from '@mui/material';
import React, { useState } from  'react';
import { useIsVisible } from '../../../helpers/usIsInvisible'
import {EmojiEvents, Public, VideoLibrary, MiscellaneousServices, LocationOn, Flag} from '@mui/icons-material';
import AnimatedNumber from '../AnimatedNumber';



const informations = [{
  title_en:"Talent",
  title_ar:"موهبة",
  counter:29,
  icon:<EmojiEvents sx={{fontSize:{md:40,xs:20}}}/>
},{
  title_en:"Country",
  title_ar:"دولة",
  counter:939,
  icon:<Public sx={{fontSize:{md:40,xs:20}}}/>
},{
  title_en:"Project",
  title_ar:"عمل",
  counter:129,
  icon:<VideoLibrary sx={{fontSize:{md:40,xs:20}}}/>
},{
  title_en:"Services",
  title_ar:"خدمة لوجستية",
  counter:2229,
  icon:<MiscellaneousServices sx={{fontSize:{md:40,xs:20}}}/>
},{
  title_en:"Locations",
  title_ar:"المواقع",
  counter:19,
  icon:<LocationOn sx={{fontSize:{md:40,xs:20}}}/>
},{
  title_en:"Since",
  title_ar:"سنة التأسيس",
  counter:2003,
  icon:<Flag sx={{fontSize:{md:40,xs:20}}}/>
}]

const Information = ({items, i18n}) =>{
  const ref = React.useRef();
  const isVisible = useIsVisible(ref);

  return (
    <Grid ref={ref} container sx={{mt:0, justifyContent:{md:'space-between',xs:'center'}, backgroundColor:'trasnparent',
    width:'100%', minHeight:200}}>
      <Grid sx={{backgroundColor:'trasnparent', fontWeight:'bold', width:300, justifyContent:'center',textAlign:'start',alignItems:'center',
        alignContent:'center',
        p:0,
      }}>
        <Typography sx={{fontSize:{md:30,xs:20},fontWeight:'bold'}}> Let's talk</Typography>
        <Typography sx={{fontSize:{md:20,xs:13},fontWeight:'bold'}}>  Numbers</Typography>
      </Grid>

      <Grid container sx={{backgroundColor:'trasnparent', fontWeight:'bold', width:'70%',maxWidth:900, justifyContent:{md:'end',xs:'center'}}}>
      {isVisible && 
      informations.map((item,i)=>{
        return(
          <Grid key = {i} sx={{
            backgroundColor:'rgba(0,0,0,0.2)',
            minHeight:{md:120,xs:50},width:{md:150,xs:50},
            borderRadius:2,p:2,m:0,alignItems:'center',justifyContent:'center'
            ,display:'flex',flexDirection:'column'}}>
              {item.icon}
              <AnimatedNumber index={item.counter} style={{fontSize:{md:20,xs:10}}}></AnimatedNumber>
              <Typography textAlign={'center'} sx={{fontSize:{md:15,xs:10},display:'flex',
                mr:0,
                ml:0,
                p:0,
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