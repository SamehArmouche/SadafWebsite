import {
  Grid,
  Fade,
  Box,
  Typography,
  Divider
} from "@mui/material";
import * as React from 'react'
import DataSelect from '../../../components/DataSelect'
import Switch from '../../../components/Switch'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { hairColors, eyeColors, skinColors, bodyTypes } from '../../../helpers/data';
import { validateNumber } from '../../../helpers/validations';
import Input from '../../Input'
import colors from '../../../assets/theme/colors/'

const BodyInfoStep = ({
  handleSubmit, errors, handleError, error, errorMsg
}) => {

  const { state } = useLocation();
  const { t } = useTranslation();
  const [form, setForm] = React.useState(false);

  const handleChange = (name,value, type) => {
    if(type==='number'&& value!==''){
      if(validateNumber(value)){
        handleError(name, value)
        state.form[name]=value;
      }
    }else{
      handleError(name, value)
      state.form[name]=value;
    }
    setForm(!form);
  };
  const [, setDiseases] = React.useState(state?.form?.diseases==="نعم");
  const [healthcare, setHealthcare] = React.useState(state?.form?.healthcare==="نعم");


  const switchHandler = (e, field) => {
    var value = (field,e.target.checked?"نعم":"لا");
    handleChange(field, value)
    if(field==='diseases')
      setDiseases(e.target.checked);
    else
      {
        if(value==='لا')
          handleChange("healthcareDetails", '')
        setHealthcare(e.target.checked);
      }
  };
  console.log(state.form)
  
  return (
    <Fade  in={true} mountOnEnter unmountOnExit>
      <Box sx={{ flexGrow: 1, flexWrap: 'wrap' }}>
          <Grid sx={{display:'flex',width:'100%',justifyContent:'center',height:40}}>
            {error && <Typography sx={{color:colors.error}}> {errorMsg} </Typography>}
          </Grid>
        <Grid container spacing={0} sx={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
          
        <Grid item sx={{}}>
            <DataSelect  
              label={t('talent.stepper.bodyinfostep.inputs.haircolors.title')} 
              noneItem={t('talent.stepper.buttons.none')}
              value={state?.form?.haircolor || ''}
              options={hairColors}
              error={errors?.haircolor?.error}
              onChange={(e)=>handleChange("haircolor",e.target.value)}
              t={t}
            />
            <DataSelect  
              label={t('talent.stepper.bodyinfostep.inputs.eyecolors.title')} 
              noneItem={t('talent.stepper.buttons.none')}
              value={state?.form?.eyecolor || ''}
              options={eyeColors}
              error={errors?.eyecolor?.error}
              onChange={(e)=>handleChange("eyecolor",e.target.value)}
              t={t}
            />
            <DataSelect  
              label={t('talent.stepper.bodyinfostep.inputs.skincolors.title')} 
              noneItem={t('talent.stepper.buttons.none')}
              value={state?.form?.skincolor || ''}
              options={skinColors}
              error={errors?.skincolor?.error}
              onChange={(e)=>handleChange("skincolor",e.target.value)}
              t={t}
            />
          </Grid>
          
          <Grid item sx={{display:'flex',flexWrap:'wrap',justifyContent:{md:'flex-start',xs:'center'}}}>
            <Input 
              required={true}
              handleChange={handleChange} name ={"height"} 
              type={"number"}
              value = {state.form?.height}
              error={errors?.height?.error}
              direction={"ltr"}
              width={117}
              label={t('talent.stepper.bodyinfostep.inputs.height')} /> 
            <Input 
              required={true}
              handleChange={handleChange} name ={"weight"} 
              type={"number"}
              value = {state.form?.weight} 
              error={errors?.weight?.error}
              direction={"ltr"}
              width={117}
              label={t('talent.stepper.bodyinfostep.inputs.weight')} />
            <DataSelect  
              label={t('talent.stepper.bodyinfostep.inputs.bodytypes.title')} 
              noneItem={t('talent.stepper.buttons.none')}
              value={state?.form?.bodytype || ''}
              options={bodyTypes}
              error={errors?.bodytype?.error}
              onChange={(e)=>handleChange("bodytype",e.target.value)}
              t={t}
            />
          </Grid>
          <Grid item sx={{ display:'flex', justifyContent:'center',m:1,alignItems:'center'}}>
            <Divider  sx={{width:{xs:'80%',md:'60%'}}}  />
          </Grid>
          <Grid item sx={{display:'flex',flexDirection:'column',alignItems:{xs:'center',md:"flex-start"}}}>
            <Switch label={t("talent.stepper.bodyinfostep.inputs.diseases.title")} handleChange={switchHandler} field={"diseases"} checked={state?.form?.diseases==="نعم"}/>
            <Switch label={t("talent.stepper.bodyinfostep.inputs.healthcare.title")} handleChange={switchHandler} field={"healthcare"} checked={state?.form?.healthcare==="نعم"}/>
          </Grid>
          {healthcare &&
            <Fade  in={true} mountOnEnter unmountOnExit>
              <Grid item sx={{justifyContent:{xs:'center',md:"flex-start"},display:'flex',pl:{xs:0.5,md:0},pr:{xs:0.5,md:0}}}>
                <Input 
                  handleChange={handleChange} multiline={true} name ={"healthcareDetails"} 
                  value = {state.form?.healthcareDetails}
                  width={'100%'}
                  label={t('talent.stepper.bodyinfostep.inputs.healthcare.details')} /> 
              </Grid>
            </Fade>
          }
        </Grid> 
      </Box>
    </Fade>
  )
}

export default BodyInfoStep