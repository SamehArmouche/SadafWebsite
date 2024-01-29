import {
  Grid,
  Fade,
  Box
} from "@mui/material";
import * as React from 'react'
import EducationalLevelSelect from './EducationalLevelSelect'
import LanguagesSelect from './LanguagesSelect'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { studies } from '../../../helpers/data';
import { languages } from '../../../helpers/data';

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
  return (
    <Fade  in={true} mountOnEnter unmountOnExit>
      <Box sx={{ flexGrow: 1, flexWrap: 'wrap',marginTop:{xs:0,md:10} }}>
        <Grid container spacing={0} sx={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
          <Grid item sx={{}}>

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
        </Grid> 
      </Box>
    </Fade>
  )
}

export default SkillsLanguagesStep