import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
  Fade
} from '@mui/material';
import colors from '../../../assets/theme/colors/'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

const ReviewInfo = () => {
  const { state } = useLocation();
  const { t, i18n } = useTranslation();

  const item = (label) =>{
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


  return (
    <Fade  in={true} mountOnEnter unmountOnExit>
      <Grid container sx={{height:'100%',width:'100%',display:'flex',justifyContent:'center',flexDirection:'row'}}>
        {
          <Grid container sx={{width:'90%',backgroundColor:'black',m:{xs:1,md:4}}}>
            {Object.keys(state.form).map(element=> item(element))}
          </Grid>
        }
      </Grid>
    </Fade>
  )
}

export default ReviewInfo