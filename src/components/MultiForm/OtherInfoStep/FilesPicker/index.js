

import {
  Grid
} from "@mui/material";
import { validateSizeFile, validateExtensionFile } from '../../../../helpers/validations'
import { useLocation } from 'react-router-dom'
import React from 'react';
import FilePicker from '../../../FilePicker'
import { useTranslation } from 'react-i18next';
import convertImageToBase64 from '../../../../helpers/convertImageToBase64'

const FilesPicker = ({ errors, handleError, error}) => {


  const { t, i18n } = useTranslation();
  const { state } = useLocation();
  const [files, setFiles] = React.useState({});
  const [errorsFile, setErrorsFile] = React.useState({});

  const handleOnChangeImage = async (event, field) => {

    const newFile = event.target?.files?.[0];
    if (newFile) {
      var value = field;
      const fileName = event.target.files[0].name;
      const ext = `.${fileName.split('.').pop()}`;
      if(!validateSizeFile(newFile)){
        state.form[field]= '';
        setErrorsFile({...errorsFile, [value]: 'fileSize'})
        setFiles({...files, [field]: ''});
      }
      else if(!validateExtensionFile(ext, "file")){
        state.form[field]= '';
        setErrorsFile({...errorsFile, [value]: 'fileextension'})
        setFiles({...files, [field]: ''});
      }
      else{
        state.form[field]= {localUrl:URL.createObjectURL(newFile),file:{data:await convertImageToBase64(event.target),ext:ext,fileName:fileName}};
        handleError(field, newFile)
        setFiles({...files, [field]: URL.createObjectURL(newFile)});
        setErrorsFile({...errorsFile, [value]: ''})
      }
    }

  };


  return (
    <Grid item sx={{display:'flex',flexWrap:'wrap',justifyContent:{md:'flex-start',xs:'center'}}}>
      <FilePicker 
        errorEmpty={errors?.file?.error} error={errorsFile.file} 
        errorMsg={errorsFile.file?t(`talent.stepper.otherinfostep.inputs.errors.${errorsFile.file.toLowerCase()}`):''}
        label={t(`talent.stepper.otherinfostep.inputs.file.${state.form.category.parent}.title`)+" *"} 
        description=
        {
          !state.form?.file?.file?.fileName?
          t(`talent.stepper.otherinfostep.inputs.file.${state.form.category.parent}.description`)
          :state.form?.file?.file?.fileName
        }
        handleOnChange={handleOnChangeImage} 
        image={state?.form?.file?.localUrl} field={"file"} align={i18n.dir()==="rtl"?"right":"left"}
      />
    </Grid>
  )
}

export default FilesPicker