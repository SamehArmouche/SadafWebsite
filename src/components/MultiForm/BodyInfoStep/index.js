import {
  Grid,
  Fade,
  Box
} from "@mui/material";
import * as React from 'react'
import DataSelect from '../../../components/DataSelect'
import Switch from '../../../components/Switch'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { hairColors, eyeColors, skinColors, bodyTypes } from '../../../helpers/data';
import { validateNumber } from '../../../helpers/validations';
import Input from '../../Input'
const BodyInfoStep = ({
  handleSubmit
}) => {

  const { state } = useLocation();
  const { t } = useTranslation();
  const [form, setForm] = React.useState(false);

  const handleChange = (name,value, type) => {
    if(type==='number'&& value!==''){
      if(validateNumber(value)){
        state.form[name]=value;
      }
    }else{
      state.form[name]=value;
    }
    setForm(!form);
  };
  const [diseases, setDiseases] = React.useState(false);
  const [healthcare, setHealthcare] = React.useState(false);


  const switchHandler = (e, field) => {
    if(field==='diseases')
      setDiseases(e.target.checked);
    else
      setHealthcare(e.target.checked);
  };
  
  return (
    <Fade  in={true} mountOnEnter unmountOnExit>
      <Box sx={{ flexGrow: 1, flexWrap: 'wrap',marginTop:{xs:0,md:10} }}>
        <Grid container spacing={0} sx={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
          
        <Grid item sx={{}}>
            <DataSelect  
              label={t('talent.stepper.bodyinfostep.inputs.haircolors.title')} 
              noneItem={t('talent.stepper.buttons.none')}
              value={state?.form?.haircolor || ''}
              options={hairColors}
              onChange={(e)=>handleChange("haircolor",e.target.value)}
              t={t}
            />
            <DataSelect  
              label={t('talent.stepper.bodyinfostep.inputs.eyecolors.title')} 
              noneItem={t('talent.stepper.buttons.none')}
              value={state?.form?.eyecolors || ''}
              options={eyeColors}
              onChange={(e)=>handleChange("eyecolors",e.target.value)}
              t={t}
            />
            <DataSelect  
              label={t('talent.stepper.bodyinfostep.inputs.skincolors.title')} 
              noneItem={t('talent.stepper.buttons.none')}
              value={state?.form?.skincolors || ''}
              options={skinColors}
              onChange={(e)=>handleChange("skincolors",e.target.value)}
              t={t}
            />
          </Grid>
          
          <Grid item sx={{display:'flex',flexWrap:'wrap',justifyContent:{md:'flex-start',xs:'center'}}}>
            <Input 
              required={true}
              handleChange={handleChange} name ={"height"} 
              type={"number"}
              value = {state.form?.height}
              direction={"ltr"}
              width={117}
              label={t('talent.stepper.bodyinfostep.inputs.height')} /> 
            <Input 
              required={true}
              handleChange={handleChange} name ={"weight"} 
              type={"number"}
              value = {state.form?.weight} 
              direction={"ltr"}
              width={117}
              label={t('talent.stepper.bodyinfostep.inputs.weight')} />
            <DataSelect  
              label={t('talent.stepper.bodyinfostep.inputs.bodytypes.title')} 
              noneItem={t('talent.stepper.buttons.none')}
              value={state?.form?.bodyType || ''}
              options={bodyTypes}
              onChange={(e)=>handleChange("bodyType",e.target.value)}
              t={t}
            />
          </Grid>
          <Grid item sx={{justifyContent:"flex-start",display:'flex',pr:{xs:2,md:0},pl:{xs:2,md:0}}}>
            <Switch label={t("talent.stepper.bodyinfostep.inputs.diseases.title")} handleChange={switchHandler} field={"diseases"}/>
          </Grid>

          <Grid item sx={{justifyContent:"flex-start",display:'flex',pr:{xs:2,md:0},pl:{xs:2,md:0}}}>
            <Switch label={t("talent.stepper.bodyinfostep.inputs.healthcare.title")} handleChange={switchHandler} field={"healthcare"}/>
          </Grid>
          {healthcare &&
            <Fade  in={true} mountOnEnter unmountOnExit>
              <Grid item sx={{justifyContent:{xs:'center',md:"flex-start"},display:'flex',pl:{xs:1.5,md:0},pr:{xs:1.5,md:0}}}>
                <Input 
                  required={true}
                  handleChange={handleChange} multiline={true} name ={"details"} 
                  value = {state.form?.details} 
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