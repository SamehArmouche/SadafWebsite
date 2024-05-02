import {
  Grid,
  Fade,
  Box,
  Typography,
  Divider
} from "@mui/material";
import * as React from 'react'
import DataSelect from '../../../components/DataSelect'
import MultipleSelect from './MultipleSelect'
import Switch from '../../../components/Switch'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { studies, languages, dialects } from '../../../helpers/data';
import Input from '../../Input'
import colors from '../../../assets/theme/colors/'
import ErrorIcon from '@mui/icons-material/Error';
import {checkVisibility} from '../../../helpers/FieldsVisibilty'

const SkillsLanguagesStep = ({
  handleSubmit,
  errors,
  error,
  errorMsg,
  handleError
}) => {

  const { state } = useLocation();
  const { t } = useTranslation();
  const [form, setForm] = React.useState(false);
  const handleChange = (name,value, i,j) => {
    state.form[name]=value;
    handleError(name,value)
    setForm(!form);
  };



  const [preparticipation, setPreparticipation] = React.useState(state?.form?.preparticipation==="نعم");

  const switchHandler = (e, field) => {
    var value = (field,e.target.checked?"نعم":"لا");
    handleChange(field, value)
    if(field==='preparticipation'){
      if(value==='لا')
        handleChange("preparticipationDetails", '')
      setPreparticipation(e.target.checked);
    }
  };

  return (
    <Fade  in={true} mountOnEnter unmountOnExit>
      <Box sx={{ flexGrow: 1, flexWrap: 'wrap' }}>
        <Grid sx={{display:'flex',width:'100%',justifyContent:'center',height:20}}>
            {error && 
              <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                <Typography sx={{color:colors.error,m:1}}> {errorMsg}</Typography>
                <ErrorIcon sx={{color:colors.error,fontSize:17}}/>
              </Box>
            }
          </Grid>
        <Grid container spacing={0} sx={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
          
          <Grid item>
            <DataSelect  
              label={t('talent.stepper.skillslanguagesstep.inputs.studies.title')} 
              noneItem={t('talent.stepper.buttons.none')}
              value={state?.form?.studies || ''}
              options={studies}
              error={errors?.studies?.error} 
              onChange={(e)=>handleChange("studies",e.target.value)}
              t={t}/>
            <MultipleSelect error={errors?.languages?.error} t={t} onChange={handleChange} label={"talent.stepper.skillslanguagesstep.inputs.languages.title"} name={"languages"}  items={languages} currentValues={state?.form?.languages}/>
            <MultipleSelect error={errors?.dialects?.error} t={t} onChange={handleChange} label={"talent.stepper.skillslanguagesstep.inputs.dialects.title"}  name={"dialects"} items={dialects} currentValues={state?.form?.dialects}/>
            <Input 
                  handleChange={handleChange} name ={"work"} 
                  value = {state.form?.work} 
                  required={true}
                  label={t('talent.stepper.skillslanguagesstep.inputs.work')} /> 
          </Grid>
        
          <Grid item sx={{ display:'flex', justifyContent:'center',m:1,alignItems:'center'}}>
            <Divider  sx={{width:{xs:'80%',md:'60%'}}}  />
          </Grid>

          <Grid item sx={{display:'flex',flexDirection:'column',alignItems:{xs:'center',sm:'flex-start',md:"flex-start"}}}>
          {
            checkVisibility(state.form.category, "canTravel") &&
            <Switch label={t("talent.stepper.skillslanguagesstep.inputs.cantravel.title")} handleChange={switchHandler} field={"cantravel"}  checked={state?.form?.cantravel==="نعم"}/>
          }
            <Switch label={t("talent.stepper.skillslanguagesstep.inputs.preparticipation.title")} handleChange={switchHandler} field={"preparticipation"}  checked={state?.form?.preparticipation==="نعم"}/>
          </Grid>
          
          {preparticipation &&
            <Fade  in={true} mountOnEnter unmountOnExit>
              <Grid item sx={{justifyContent:{xs:'center',md:"flex-start"},display:'flex',pl:{xs:0.5,md:0},pr:{xs:0.5,md:0}}}>
                <Input 
                  handleChange={handleChange} multiline={true} name ={"preparticipationDetails"} 
                  value = {state.form?.preparticipationDetails} 
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