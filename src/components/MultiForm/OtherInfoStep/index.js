import {
  Grid,
  Fade,
  Button,
  Typography,
  Box
} from "@mui/material";
import ImageIcon from '@mui/icons-material/Image';
import React from 'react';
import { useLocation } from 'react-router-dom'
import ImagePicker from '../../ImagePicker'
import { useTranslation } from 'react-i18next';
import Input from '../../Input'

const OtherInfoStep = ({
  handleSubmit
}) => {

  const { state } = useLocation();
  const { t, i18n } = useTranslation();
  const [images, setImages] = React.useState({});
  const [form, setForm] = React.useState(false);
  const handleOnChangeImage = (event, field) => {
    const newImage = event.target?.files?.[0];
    if (newImage) {
      state.form[field]= URL.createObjectURL(newImage);
      setImages({...images, [field]: URL.createObjectURL(newImage)});
    }
  };

  const handleChange = (name,value) => {
    state.form[name]=value;
    setForm(!form);
  };


  return (
    <Fade  in={true} mountOnEnter unmountOnExit>
      <Box sx={{ flexGrow: 1, flexWrap: 'wrap',marginTop:{xs:0,md:10} }}>
        <Grid container spacing={0} sx={{display:'flex',justifyContent:'center',flexDirection:'column',flexWrap:'wrap'}}>
          <Grid item sx={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
            <ImagePicker label={t("talent.stepper.otherinfostep.inputs.image1")} handleOnChange={handleOnChangeImage} image={state?.form?.image1} field={"image1"} align={i18n.dir()==="rtl"?"right":"left"}/>
            <ImagePicker label={t("talent.stepper.otherinfostep.inputs.image2")} handleOnChange={handleOnChangeImage} image={state?.form?.image2} field={"image2"} align={i18n.dir()==="rtl"?"right":"left"}/>
            <ImagePicker label={t("talent.stepper.otherinfostep.inputs.image3")} handleOnChange={handleOnChangeImage} image={state?.form?.image3} field={"image3"} align={i18n.dir()==="rtl"?"right":"left"} />
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