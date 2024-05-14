import {
  Grid,
  Fade,
  Typography,
  Box
} from "@mui/material";
import Category from '../../Category'
import { useLocation } from 'react-router-dom'
import colors from '../../../assets/theme/colors/';
import ErrorIcon from '@mui/icons-material/Error';
import { useTranslation } from 'react-i18next';
import * as React from 'react';

const CategoryStep = ({
  handleSubmit,
  error,
  errorMsg
}) => {

  const [form, setForm] = React.useState(false);
  const { state } = useLocation();
  const { t, i18n } = useTranslation();

  const handleChange = (name,value) => {
    state.form[name]=value;
    setForm(!form);
  };

  return (
    <Fade  in={true} mountOnEnter unmountOnExit>
      <Grid
        container
        sx={{
          height:'100%',
          display:'flex',
          width:'100%',
          justifyContent:'flex-start',
          alignItems:'center',
          flexDirection:'column'
        }}>
          



        <Grid sx={{display:'flex',width:'100%',justifyContent:'center',height:20}}>
            {error && 
              <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                <Typography sx={{color:colors.error,m:1}}> {errorMsg}</Typography>
                <ErrorIcon sx={{color:colors.error,fontSize:17}}/>
              </Box>
            }
          </Grid>

          <Grid sx={{display:'flex',width:'100%',flexWrap:'wrap',justifyContent:'center'}}>
          {

          state?.categories?.map((c, i)=>{
            return (
              <Category handleSubmit={handleSubmit} key={i} i={i} category={c.name} currentCat={state?.form?.category} sub={c.sub_categroies} handleChange={handleChange}/>
              )
            })
          }
          </Grid>

        <Grid sx={{display:'flex',width:'80%',flexWrap:'wrap',justifyContent:'flex-start',maxWidth:'90%',opacity:0.6}}>
          <Typography sx={{textAlign:i18n.dir()!=='ltr'?'right':'left',p:1}} >{t("talent.stepper.category.registered")}</Typography>
          <Grid sx={{display:'flex'}}>
            {
              state?.registeredCategories?.map((c, i)=>{
                return (
                  <Typography sx={{textAlign:i18n.dir()!=='ltr'?'right':'left',mr:0.5,ml:0.5,p:1,backgroundColor:colors.hover,borderRadius:2}} key={i} >{t(`talent.stepper.category.types.${c.key}.title`)}</Typography>
                )
              })
            }
          </Grid>
        </Grid>
      </Grid>
    </Fade>
  )
}

export default CategoryStep