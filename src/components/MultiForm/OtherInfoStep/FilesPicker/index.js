

import {
  Grid
} from "@mui/material";
import { validateSizeFile } from '../../../../helpers/validations'
import { useLocation } from 'react-router-dom'
import React from 'react';
import FilePicker from '../../../FilePicker'
import { useTranslation } from 'react-i18next';

const FilesPicker = ({ errors, handleError, error}) => {


  const { t, i18n } = useTranslation();
  const { state } = useLocation();
  const [files, setFiles] = React.useState({});
  const [errorsFile, setErrorsFile] = React.useState({});

  const handleOnChangeImage = (event, field) => {

    const newFile = event.target?.files?.[0];
    if (newFile) {
      var value = field;
      if(validateSizeFile(newFile)){
        state.form[field]= {localUrl:URL.createObjectURL(newFile),file:event.target.files[0]};
        handleError(field, newFile)
        setFiles({...files, [field]: URL.createObjectURL(newFile)});
        setErrorsFile({...errorsFile, [value]: ''})
      }else{
        state.form[field]= '';
        setErrorsFile({...errorsFile, [value]: 'fileSize'})
        setFiles({...files, [field]: ''});
      }
    }

  };


  return (
    <Grid item sx={{display:'flex',flexWrap:'wrap',justifyContent:{md:'flex-start',xs:'center'}}}>
      <FilePicker 
        errorEmpty={errors?.file?.error} error={errorsFile.file==='fileSize'} 
        errorMsg={t("talent.stepper.otherinfostep.inputs.errors.filesize")}
        label={t(`talent.stepper.otherinfostep.inputs.file.${state.form.category.parent}.title`)+" *"} 
        description={t(`talent.stepper.otherinfostep.inputs.file.${state.form.category.parent}.description`)}
        handleOnChange={handleOnChangeImage} 
        image={state?.form?.file?.localUrl} field={"file"} align={i18n.dir()==="rtl"?"right":"left"}
      />
    </Grid>
  )
}

export default FilesPicker