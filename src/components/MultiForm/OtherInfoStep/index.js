import {
  Grid,
  Fade,
  Typography,
  Box,
  Divider
} from "@mui/material";
import React from 'react';
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import Input from '../../Input'
import colors from '../../../assets/theme/colors/'
import ErrorIcon from '@mui/icons-material/Error';
import ImagesPicker from './ImagesPicker'
import FilesPicker from './FilesPicker'
import {checkVisibility} from '../../../helpers/FieldsVisibilty'

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
        <Grid sx={{display:'flex',width:'100%',justifyContent:'center',height:20}}>
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
            
            {
              checkVisibility(state.form.category, "videoUrl") &&
                <Grid sx={{width:'100%',display:'flex',flexWrap:'wrap',justifyContent:{xs:'center',md:'flex-start'}}}>
                  <Input 
                    handleChange={handleChange}
                    name ={"video"} 
                    width={400}
                    mb={5}
                    required={true}
                    direction={'ltr'}
                    value = {state.form?.video}
                    helperText={t('talent.stepper.otherinfostep.inputs.video.title')}
                    label={t('talent.stepper.otherinfostep.inputs.video.url')} />
                    
                  <Input 
                    handleChange={handleChange}
                    name ={"video_pass"} 
                    width={299}
                    mb={4}
                    direction={'ltr'}
                    value = {state.form?.video_pass}
                    helperText={t('talent.stepper.otherinfostep.inputs.video.titlepass')}
                    label={t('talent.stepper.otherinfostep.inputs.video.password')} />
              </Grid>
            }
              <Divider  sx={{width:{xs:'80%',md:'60%'},m:2}}  />
                {
                checkVisibility(state.form.category, "paragraph") &&
                  <Grid sx={{width:'100%',display:'flex',flexWrap:'wrap',justifyContent:{xs:'center',md:'flex-start'}}}>
                    <Input 
                      handleChange={handleChange}
                      name ={"about"} 
                      multiline={true}
                      width={'100%'}
                      required={true}
                      value = {state.form?.about}
                      label={t('talent.stepper.otherinfostep.inputs.about')} />
                  </Grid>
                }

          </Grid>
          <Grid>
            {
            checkVisibility(state.form.category, "paragraph") &&
              <Grid sx={{width:'100%',display:'flex',flexWrap:'wrap',justifyContent:{xs:'center',md:'flex-start'}}}>
              <Input 
              handleChange={handleChange}
              name ={"paragraph"} 
              multiline={true}
              width={'100%'}
              required={true}
              value = {state.form?.paragraph}
              label ={t("talent.stepper.otherinfostep.inputs.paragraph.title")}
              helperText={t(`talent.stepper.otherinfostep.inputs.paragraph.${state.form.category.parent}`)}
              />
              </Grid>
            }
            {
              checkVisibility(state.form.category, "file") && <FilesPicker  errors={errors} handleError={handleError}/>
            }
          </Grid>

        </Grid>
      </Box>
    </Fade>
  )
}

export default OtherInfoStep