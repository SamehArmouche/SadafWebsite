import {
  Grid,
  Box,
  FormControl,
  Divider,
  Fade,
  Typography
} from "@mui/material";
import * as React from 'react'
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom'
import CodeCountrySelect from './CodeCountrySelect'
import ComunicationTypeSelect from './ComunicationTypeSelect'
import SocialNetworksList from './SocialNetworksList'
import Input from '../../Input'
import {options} from '../../../helpers/data';
import { validatePhoneNumber } from '../../../helpers/validations';
import colors from '../../../assets/theme/colors/'
const ContactInfoStep = ({ handleSubmit, errors, handleError, error, errorMsg }) => {

  const { state } = useLocation();
  const { t, i18n } = useTranslation();
  const [form, setForm] = React.useState(false);

  const handleChange = (name,value, type) => {
    if(type==='tel'&& value!==''){
      if(validatePhoneNumber(value)){
        handleError(name, value)
        state.form[name]=value;
      }
    }else{
      state.form[name]=value;
    }
    setForm(!form);
  };
  

  return (
    <Fade  in={true} mountOnEnter unmountOnExit>
      <Box sx={{ flexGrow: 1, flexWrap: 'wrap' }}>
          <Grid sx={{display:'flex',width:'100%',justifyContent:'center',height:40}}>
            {error && <Typography sx={{color:colors.error}}> {errorMsg} </Typography>}
          </Grid>
        <Grid container spacing={0} sx={{display:'flex',justifyContent:'center',flexDirection:'column'}}>

        <Grid item sx={{justifyContent:{xs:"center",md:"flex-start"},display:'flex',pr:{xs:2,md:0},pl:{xs:2,md:0},flexWrap:'wrap'}}>
            <FormControl sx={{borderRadius:1,m:1,height:55,width:{xs:300,md:150}}} required >
              <CodeCountrySelect  error={errors?.phoneCode?.error} lang={i18n.language} t={t} onChange={handleChange} value={"phoneCode"} defaultValue={state.form.phoneCode}/>
            </FormControl>
            <Input direction={"ltr"} type ={'tel'} preValue={state.form.phoneCode} error={errors?.phonenumber?.error} required={true} handleChange={handleChange} name ={"phonenumber"} value = {state.form?.phonenumber} label={t('talent.stepper.contactinfostep.inputs.phonenumber')} />
            <Input direction={"ltr"} type ={'tel'} preValue={state.form.phoneCode} error={errors?.fixnumber?.error} handleChange={handleChange} name ={"fixnumber"} value = {state.form?.fixnumber} label={t('talent.stepper.contactinfostep.inputs.fixnumber')} /> 
          </Grid>

          <Grid sx={{ display:'flex', m:1, justifyContent:'center'}}>
            <Divider  sx={{width:{xs:'80%',md:'58%'}}}  />
          </Grid>

          <Grid item sx={{justifyContent:{xs:"center",md:"flex-start"},display:'flex',pr:{xs:2,md:0},pl:{xs:2,md:0},flexWrap:'wrap'}}>
            <Input direction={"ltr"} handleChange={handleChange}  name ={"website"} value = {state.form?.website} label={t('talent.stepper.contactinfostep.inputs.website')} />
            <ComunicationTypeSelect  
              label={t('talent.stepper.contactinfostep.inputs.communicationType.title')} 
              noneItem={t('talent.stepper.buttons.none')}
              value={state?.form?.communicationtype || ''}
              options={options}
              onChange={handleChange}
              t={t}
            />
            <SocialNetworksList/>
          </Grid>
        
      </Grid>
    </Box>
  </Fade>
  )
}

export default ContactInfoStep