

import {
  Grid
} from "@mui/material";
import { validateSizeFile, validateExtensionFile } from '../../../../helpers/validations'
import { useLocation } from 'react-router-dom'
import React from 'react';
import ImagePicker from '../../../ImagePicker'
import { useTranslation } from 'react-i18next';
import convertImageToBase64 from '../../../../helpers/convertImageToBase64'

const ImagesPicker = ({ errors, handleError, error}) => {


  const { t, i18n } = useTranslation();
  const { state } = useLocation();
  const [images, setImages] = React.useState({});
  const [errorsFile, setErrorsFile] = React.useState({});

  const handleOnChangeImage = async (event, field) => {

    const newImage = event.target?.files?.[0];
    if (newImage) {
      const ext = `.${event.target.files[0].name.split('.').pop()}`;
      var value = field;
      if(!validateSizeFile(newImage)){
        state.form[field]= '';
        setErrorsFile({...errorsFile, [value]: 'fileSize'})
        setImages({...images, [field]: ''});

      }
      else if(!validateExtensionFile(ext,"images")){
        state.form[field]= '';
        setErrorsFile({...errorsFile, [value]: 'imageextension'})
        setImages({...images, [field]: ''});
      }
      else{
        state.form[field]= {localUrl:URL.createObjectURL(newImage),file:{data:await convertImageToBase64(event.target),ext:ext}};
        handleError(field, newImage)
        setImages({...images, [field]: URL.createObjectURL(newImage)});
        setErrorsFile({...errorsFile, [value]: ''});
      }
    }

  };


  return (
    <Grid item sx={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
    <ImagePicker 
      i={1}
      errorEmpty={errors?.image1?.error} error={errorsFile.image1} 
      errorMsg={errorsFile.image1?t(`talent.stepper.otherinfostep.inputs.errors.${errorsFile.image1.toLowerCase()}`):''}
      label={t("talent.stepper.otherinfostep.inputs.image1")+" *"} handleOnChange={handleOnChangeImage} 
      image={state?.form?.image1?.localUrl} field={"image1"} align={i18n.dir()==="rtl"?"right":"left"}
    />
    <ImagePicker 
      i={2}
      errorEmpty={errors?.image2?.error} error={errorsFile.image2} 
      errorMsg={errorsFile.image2?t(`talent.stepper.otherinfostep.inputs.errors.${errorsFile.image2.toLowerCase()}`):''}
      label={t("talent.stepper.otherinfostep.inputs.image2")+" *"} handleOnChange={handleOnChangeImage}
      image={state?.form?.image2?.localUrl} field={"image2"} align={i18n.dir()==="rtl"?"right":"left"}
    />
    <ImagePicker 
      i={3}
      errorEmpty={errors?.image3?.error} error={errorsFile.image3} 
      errorMsg={errorsFile.image3?t(`talent.stepper.otherinfostep.inputs.errors.${errorsFile.image3.toLowerCase()}`):''}
      label={t("talent.stepper.otherinfostep.inputs.image3")+" *"} handleOnChange={handleOnChangeImage}
      image={state?.form?.image3?.localUrl} field={"image3"} align={i18n.dir()==="rtl"?"right":"left"}
    />
  </Grid>
  )

}

export default ImagesPicker