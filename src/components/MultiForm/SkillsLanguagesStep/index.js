import {
  Grid,
  Fade,
  Box
} from "@mui/material";
import * as React from 'react'
import EducationalLevelSelect from './EducationalLevelSelect'
import LanguagesSelect from './LanguagesSelect'
import Switch from '../../../components/Switch'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { studies, languages } from '../../../helpers/data';
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

  const switchHandler = (e) => {
    setPreparticipation(e.target.checked);
  };


  return (
    <Fade  in={true} mountOnEnter unmountOnExit>
      <Box sx={{ flexGrow: 1, flexWrap: 'wrap',marginTop:{xs:0,md:10} }}>
        <Grid container spacing={0} sx={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
          
          <Grid item>
            <EducationalLevelSelect  
              label={t('talent.stepper.skillslanguagesstep.inputs.studies.title')} 
              noneItem={t('talent.stepper.buttons.none')}
              value={state?.form?.studies || ''}
              options={studies}
              onChange={handleChange}
              t={t}
            />
            <LanguagesSelect t={t} languages={languages}/>
          </Grid>

          <Grid item sx={{justifyContent:{xs:'center',md:"center"},display:'flex'}}>
            <Switch t={t} preparticipation={preparticipation} handleChange={switchHandler}/>
          </Grid>
          {preparticipation &&
            <Fade  in={true} mountOnEnter unmountOnExit>
              <Grid item>
                <Input 
                  required={true}
                  handleChange={handleChange} multiline={true} name ={"summary"} 
                  value = {state.form?.summary} 
                  width={515}
                  label={t('talent.stepper.skillslanguagesstep.inputs.preparticipation.summary')} /> 
              </Grid>
            </Fade>
          }
        </Grid> 
      </Box>
    </Fade>
  )
}

export default SkillsLanguagesStep