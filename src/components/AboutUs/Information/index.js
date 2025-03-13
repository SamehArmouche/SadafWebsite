import {Grow, Grid, CardActionArea, Typography} from '@mui/material';
import React, { useState } from  'react';
import { AnimatedCounter } from  'react-animated-counter';
import { useIsVisible } from '../../../helpers/usIsInvisible'
import AnimatedNumber from '../AnimatedNumber';

const informations = [{
  title_en:"Talent",
  title_ar:"موهبة",
  counter:29
},{
  title_en:"Country",
  title_ar:"دولة",
  counter:939
},{
  title_en:"Project",
  title_ar:"عمل",
  counter:129
},{
  title_en:"Services",
  title_ar:"خدمة لوجستية",
  counter:2229
},{
  title_en:"Locations",
  title_ar:"المواقع",
  counter:19
},{
  title_en:"Since",
  title_ar:"سنة التأسيس",
  counter:2003
}]

const Information = ({items, i18n}) =>{
  const ref = React.useRef();
  const isVisible = useIsVisible(ref);

  return (
    <Grid ref={ref} container sx={{mt:3, justifyContent:'center'}}>
      {isVisible && 
      informations.map((item,i)=>{
        return(
          <Grid key = {i} sx={{
            backgroundColor:'rgba(0,0,0,0.2)',
            minHeight:{md:170,xs:85},width:{md:170,xs:85},
            borderRadius:2,p:2,m:2,alignItems:'center',justifyContent:'center'
            
            
            ,display:'flex',flexDirection:'column'}}>
              <AnimatedNumber index={item.counter} style={{fontSize:{md:60,xs:30}}}></AnimatedNumber>
            {/* <AnimatedCounter 
            
            fontSize="40px"
            containerStyles={{justifyContent:'center',padding:0,backgroundColor:'transparent',margin:0,direction:'ltr'}}  includeDecimals={false} value={item.counter} color="white" decrementColor="white" incrementColor="white"/> */}
            <Typography textAlign={'center'} sx={{fontSize:{md:18,xs:12},display:'flex',
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
  );
}


export default Information