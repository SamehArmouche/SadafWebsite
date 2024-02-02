import {
  Grid,
  Fade,
  Typography,
  Box
} from "@mui/material";
import React from 'react';
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import Input from '../../Input'
import colors from '../../../assets/theme/colors/'
import ErrorIcon from '@mui/icons-material/Error';
import ImagesPicker from './ImagesPicker'
import {checkVisibility} from './FieldsVisibilty'

const OtherInfoStep = ({
  handleSubmit, errors,
  handleError, error,
  errorMsg
}) => {

  const { state } = useLocation();
  const { t } = useTranslation();
  const [form, setForm] = React.useState(false);

  const handleChange = (name,value) => {
    state.form[name]=value;
    setForm(!form);
  };


  return (
    <Fade  in={true} mountOnEnter unmountOnExit>
      <Box sx={{ flexGrow: 1, flexWrap: 'wrap' }}>
        <Grid sx={{display:'flex',width:'100%',justifyContent:'center',height:40}}>
          {error && 
            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
              <Typography sx={{color:colors.error,m:1}}> {errorMsg}</Typography>
              <ErrorIcon sx={{color:colors.error,fontSize:17}}/>
            </Box>
          }
        </Grid>
        <Grid container spacing={0} sx={{display:'flex',justifyContent:'center',flexDirection:'column',flexWrap:'wrap'}}>
          
          {
            checkVisibility(state.form.category, "imagesPicker") &&
            <ImagesPicker errors={errors} handleError={handleError} />
          }
          <Grid item sx={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
            <Grid sx={{width:'100%',display:'flex',flexWrap:'wrap',justifyContent:{xs:'center',md:'flex-start'}}}>
              <Input 
                handleChange={handleChange}
                name ={"video"} 
                width={400}
                mb={5}
                direction={'ltr'}
                value = {state.form?.video}
                helperText={t('talent.stepper.otherinfostep.inputs.video.title')}
                label={t('talent.stepper.otherinfostep.inputs.video.url')} />
                
              <Input 
                handleChange={handleChange}
                name ={"videoPassword"} 
                width={299}
                mb={4}
                direction={'ltr'}
                value = {state.form?.videoPassword}
                helperText={t('talent.stepper.otherinfostep.inputs.video.titlepass')}
                label={t('talent.stepper.otherinfostep.inputs.video.password')} />
            </Grid>
            {
            checkVisibility(state.form.category, "about") &&
              <Grid sx={{width:'100%',display:'flex',flexWrap:'wrap',justifyContent:{xs:'center',md:'flex-start'}}}>
                <Input 
                  handleChange={handleChange}
                  name ={"about"} 
                  multiline={true}
                  width={'100%'}
                  value = {state.form?.about}
                  label={t('talent.stepper.otherinfostep.inputs.about')} />
              </Grid>
          }
          </Grid>
        </Grid>
      </Box>
    </Fade>
  )
}

export default OtherInfoStep