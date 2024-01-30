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
import { hairColors, eyeColors, skinColors } from '../../../helpers/data';
import Input from '../../Input'
const BodyInfoStep = ({
  handleSubmit
}) => {

  const { state } = useLocation();
  const { t } = useTranslation();
  const [form, setForm] = React.useState(false);

  const handleChange = (name,value) => {
    state.form[name]=value;
    setForm(!form);
  };
  const [preparticipation, setPreparticipation] = React.useState(false);

  const switchHandler = (e) => {
    setPreparticipation(e.target.checked);
  };


  return (
    <Fade  in={true} mountOnEnter unmountOnExit>
      <Box sx={{ flexGrow: 1, flexWrap: 'wrap',marginTop:{xs:0,md:10} }}>
        <Grid container spacing={0} sx={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
          
          <Grid item>
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
        </Grid> 
      </Box>
    </Fade>
  )
}

export default BodyInfoStep