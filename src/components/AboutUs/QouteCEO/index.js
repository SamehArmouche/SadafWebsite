import {Grow, Grid, CardActionArea, Typography} from '@mui/material';
import * as React from 'react';
import { useIsVisible } from '../../../helpers/usIsInvisible';


const info = {
    title_en:"CEO Message",
    title_ar:"رسالة الرئيس التنفيذي",
    body_en:"A Saudi production company established in 1988. It is one of the most important arms of the MBC Group, and specializes in audio and visual production and the creation of creative dramatic content. Its productions include the series (Between You and Me, Al-Maqtar, Relatives and Foxes, Perfume).",
    body_ar:"شركة إنتاج سعودية تم تأسيسها في عام 1988، وهي إحدى أهم أذرع مجموعة MBC، وتختص بالإنتاج الصوتي والمرئي وصناعة المحتوى الدرامي الإبداعي.من إنتاجاتها مسلسلات (بيني وبينك، المقطار، أقارب وثعالب، عطر).",
    footer_en:"Hassan Assiri",
    footer_ar:"حسن عسيري",
    
    img_url:"https://storage.googleapis.com/sadaf-website-content/information/hassan1.png"
}

const QouteCEO = ({t, i18n}) =>{
  const ref = React.useRef();
  const isVisible = useIsVisible(ref);
  
  return(
<Grow
  mountOnEnter
  unmountOnExit
  in={true}
  style={{ transformOrigin: '0 0 0' }}
  {...{ timeout: (500) }}
  >
    <Grid 
    container
    ref={ref}
    sx={{width:'100%',p:0, flexDirection:'row',alignItems:'center',justifyContent:{md:'flex-end',xs:'center'}
    
    ,background:`linear-gradient(${i18n.dir()==='rtl'?'to right':'to left'}, rgba(255,255,255,0.9) 0%,rgba(247, 216, 159, 1) 80%)`,
    

    borderRadius:2
    
    }}>
      <Grid 
      container
        sx={{
          mb:1,mt:1, width:'100%',
          //ml:10,
          //borderTopLeftRadius: 20,
         // borderBottomLeftRadius: 20,
         justifyContent:{md:'flex-start',xs:'center'},
         


        }}>
        <Grid
          component="img"
          sx={{
            // width:{md:'320px',xs:"200px"},
            // height:{md:'320px',xs:"200px"},
            width:'100%',
            maxWidth:{md:400,xs:'60%'},
            objectFit:'cover',
            pl:{md:2,xs:0},
            pr:{md:2,xs:0},
            borderRadius:2,
            content: {
              xs: `url(${info.img_url})`, //img src from xs up to md
              md: `url(${info.img_url})`,  //img src from md and up
            }
          }}
          alt="CEO"
        />


        <Grid sx={{backgroundColor:'transparent'
          ,display:'flex',maxWidth:{md:"60%",xs:"100%"},flexDirection:'column'}}>
          <Typography textAlign={i18n.dir()==="rtl"?"right":"left"} sx={{
            color:"black",
            //background:`-webkit-linear-gradient(425deg, rgba(0,0,0,1) 0%,rgba(247, 216, 159, 1) 40%)`,
            //background: "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            //WebkitBackgroundClip: "text",
            //WebkitTextFillColor: "transparent",
            fontSize:{md:25,xs:22},
            m:1,
            fontWeight:'bold',
            height:'30%',

          }}> {`${info[`title_${i18n.language}`]}`}</Typography>

        <Typography textAlign={i18n.dir()==="rtl"?"justify":"justify"} sx={{
          color:"black",
          m:1,
          fontSize:{md:18,xs:12},
          maxWidth:'700px',
          height:'55%',
          }}> {`${info[`body_${i18n.language}`]}`}</Typography>



        <Typography textAlign={i18n.dir()==="rtl"?"justify":"justify"} sx={{
          color:"black",
          m:1,
          fontSize:{md:16,xs:10},
          maxWidth:'700px'

          }}> {`${info[`footer_${i18n.language}`]}`}</Typography>
        </Grid>


        


      </Grid>





    </Grid>
    </Grow>
  )
}


export default QouteCEO