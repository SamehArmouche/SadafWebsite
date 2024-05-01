import {
  Typography,
  Grid,
  Fade,
  Box
} from '@mui/material';
import colors from '../../../assets/theme/colors/'
import { useTranslation } from 'react-i18next';
import ErrorIcon from '@mui/icons-material/Error';
import reviewAnimated from "../../../assets/reviewAnimated.json";
import Lottie from "lottie-react";


const ReviewInfo = () => {
  const { t, i18n} = useTranslation();

  return (
    <Fade  in={true} mountOnEnter unmountOnExit>
      <Grid container sx={{width:'100%',display:'flex',justifyContent:'center',flexDirection:'column',pt:5}}>
        {/*
          <Grid container sx={{width:'90%',backgroundColor:'black',m:{xs:1,md:4}}}>
            {Object.keys(state.form).map(element=> item(element))}
          </Grid>
          */
        }
        <Fade  in={true} mountOnEnter unmountOnExit>
          <Box sx={{
            display:'flex',justifyContent:'center',
            flexDirection:'row',backgroundColor:colors.hover
            ,borderRadius:2,p:2,maxWidth:'100%',
            
            }}>
              <Box>
              <Typography sx={{m:1,textAlign:i18n.dir()!=='ltr'?'right':'left',fontSize:16}}> {t('talent.stepper.review.msg')}</Typography>
              </Box>
              <Box>
                <ErrorIcon sx={{fontSize:17,mt:1.8}}/>
              </Box>
          </Box>
        </Fade>
        <Grid container sx={{
          justifyContent:'center',
          width:'100%'
        }}>
          <Lottie animationData={reviewAnimated} loop={true} style={{width:350,opacity:0.2}} />
        </Grid>
      </Grid>
    </Fade>
  )
}

export default ReviewInfo

/**
 *   const item = (label) =>{
    let arrayAsString = state.form[label];
    if(Array.isArray(state.form[label])){
      arrayAsString = (state.form[label].map(e => e.value).toString().replaceAll(","," - "))
    }
    if(!label.includes('image'))
      return (
        <Grid 
          key={label}
          item
          sx={{
          justifyContent:'start-flex',
          display:'flex',
          p:1,
          m:0.2,
          width:200,
          
          flexWrap:'wrap',
          direction:'ltr'
          }}>
            <Typography variant="overline" sx={{color:colors.secondary,width:'100%'}}textAlign={"left"}>{label.toUpperCase()} : </Typography>
            <Typography variant="overline" sx={{}} textAlign={"left"}>{ arrayAsString }</Typography>
        </Grid>
      )
  }
 */