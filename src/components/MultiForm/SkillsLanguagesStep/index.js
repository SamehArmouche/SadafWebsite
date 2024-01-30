import {
  Grid,
  Fade,
  Box
} from "@mui/material";
import * as React from 'react'
import DataSelect from '../../../components/DataSelect'
import MultipleSelect from './MultipleSelect'
import Switch from '../../../components/Switch'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { studies, languages, talents } from '../../../helpers/data';
import Input from '../../Input'
const SkillsLanguagesStep = ({
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

  const switchHandler = (e, field) => {
    if(field==='preparticipation')
      setPreparticipation(e.target.checked);
  };


  return (
    <Fade  in={true} mountOnEnter unmountOnExit>
      <Box sx={{ flexGrow: 1, flexWrap: 'wrap',marginTop:{xs:0,md:10} }}>
        <Grid container spacing={0} sx={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
          
          <Grid item>

            <DataSelect  
              label={t('talent.stepper.skillslanguagesstep.inputs.studies.title')} 
              noneItem={t('talent.stepper.buttons.none')}
              value={state?.form?.studies || ''}
              options={studies}
              onChange={(e)=>handleChange("studies",e.target.value)}
              t={t}
            />
            <MultipleSelect t={t} label={"talent.stepper.skillslanguagesstep.inputs.languages.title"}  items={languages}/>
            <MultipleSelect t={t} label={"talent.stepper.skillslanguagesstep.inputs.talents.title"} items={talents}/>
          </Grid>

          <Grid item sx={{justifyContent:"flex-start",display:'flex',pr:{xs:2,md:0},pl:{xs:2,md:0}}}>
            <Switch label={t("talent.stepper.skillslanguagesstep.inputs.cantravel.title")} handleChange={switchHandler} field={"cantravel"}/>
          </Grid>
          
          <Grid item sx={{justifyContent:"flex-start",display:'flex',pr:{xs:2,md:0},pl:{xs:2,md:0}}}>
            <Switch label={t("talent.stepper.skillslanguagesstep.inputs.preparticipation.title")} handleChange={switchHandler} field={"preparticipation"}/>
          </Grid>
          {preparticipation &&
            <Fade  in={true} mountOnEnter unmountOnExit>
              <Grid item sx={{justifyContent:{xs:'center',md:"flex-start"},display:'flex',pl:{xs:1.5,md:0},pr:{xs:1.5,md:0}}}>
                <Input 
                  required={true}
                  handleChange={handleChange} multiline={true} name ={"details"} 
                  value = {state.form?.details} 
                  width={'100%'}
                  label={t('talent.stepper.skillslanguagesstep.inputs.preparticipation.details')} /> 
              </Grid>
            </Fade>
          }
        </Grid> 
      </Box>
    </Fade>
  )
}

export default SkillsLanguagesStep