import {
  Grid,
  Fade,
  Typography,
  Box
} from "@mui/material";
import ImageIcon from '@mui/icons-material/Image';
import React from 'react';
import { useLocation } from 'react-router-dom'
import ImagePicker from '../../ImagePicker'
import { useTranslation } from 'react-i18next';
import Input from '../../Input'
import { validateSizeFile } from '../../../helpers/validations'
import colors from '../../../assets/theme/colors/'
import ErrorIcon from '@mui/icons-material/Error';

const OtherInfoStep = ({
  handleSubmit, errors,
  handleError, error,
  errorMsg
}) => {

  const { state } = useLocation();
  const { t, i18n } = useTranslation();
  const [images, setImages] = React.useState({});
  const [form, setForm] = React.useState(false);
  const [errorsFile, setErrorsFile] = React.useState({});
  const handleOnChangeImage = (event, field) => {
    console.log(field)
    const newImage = event.target?.files?.[0];
    if (newImage) {
      var value = field;
      if(validateSizeFile(newImage)){
        state.form[field]= URL.createObjectURL(newImage);
        handleError(field, newImage)
        setImages({...images, [field]: URL.createObjectURL(newImage)});
        setErrorsFile({...errorsFile, [value]: ''})
      }else{
        state.form[field]= '';
        setErrorsFile({...errorsFile, [value]: 'fileSize'})
        setImages({...images, [field]: ''});
      }
    }

  };

  console.log(errorsFile.image1==='fileSize')
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
          
          <Grid item sx={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
            <ImagePicker 
              errorEmpty={errors?.image1?.error} error={errorsFile.image1==='fileSize'} 
              errorMsg={t("talent.stepper.otherinfostep.inputs.errors.filesize")}
              label={t("talent.stepper.otherinfostep.inputs.image1")} handleOnChange={handleOnChangeImage} 
              image={state?.form?.image1} field={"image1"} align={i18n.dir()==="rtl"?"right":"left"}
            />
            <ImagePicker 
              errorEmpty={errors?.image2?.error} error={errorsFile.image2==='fileSize'}
              errorMsg={t("talent.stepper.otherinfostep.inputs.errors.filesize")} 
              label={t("talent.stepper.otherinfostep.inputs.image2")} handleOnChange={handleOnChangeImage}
              image={state?.form?.image2} field={"image2"} align={i18n.dir()==="rtl"?"right":"left"}
            />
            <ImagePicker 
              errorEmpty={errors?.image3?.error} error={errorsFile.image3==='fileSize'}
              errorMsg={t("talent.stepper.otherinfostep.inputs.errors.filesize")}
              label={t("talent.stepper.otherinfostep.inputs.image3")} handleOnChange={handleOnChangeImage}
              image={state?.form?.image3} field={"image3"} align={i18n.dir()==="rtl"?"right":"left"}
            />
          </Grid>

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
          <Input 
            handleChange={handleChange}
            name ={"about"} 
            multiline={true}
            width={'100%'}
            value = {state.form?.about}
            label={t('talent.stepper.otherinfostep.inputs.about')} />
          </Grid>
        </Grid>
      </Box>
    </Fade>
  )
}

export default OtherInfoStep