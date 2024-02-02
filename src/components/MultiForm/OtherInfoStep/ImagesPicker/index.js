

import {
  Grid
} from "@mui/material";
import { validateSizeFile } from '../../../../helpers/validations'
import { useLocation } from 'react-router-dom'
import React from 'react';
import ImagePicker from '../../../ImagePicker'
import { useTranslation } from 'react-i18next';

const ImagesPicker = ({ errors, handleError, error}) => {


  const { t, i18n } = useTranslation();
  const { state } = useLocation();
  const [images, setImages] = React.useState({});
  const [errorsFile, setErrorsFile] = React.useState({});

  const handleOnChangeImage = (event, field) => {

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


  return (
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
  )

}

export default ImagesPicker