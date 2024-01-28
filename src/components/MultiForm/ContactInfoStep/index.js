import {
  Grid,
  Box,
  FormControl,
  Divider
} from "@mui/material";
import * as React from 'react'
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom'
import CodeCountrySelect from './CodeCountrySelect'
import ComunicationTypeSelect from './ComunicationTypeSelect'
import SocialNetworksList from './SocialNetworksList'
import Input from '../../Input'



const ContactInfoStep = ({ handleSubmit }) => {

  const { state } = useLocation();
  const { t, i18n } = useTranslation();
  const [form, setForm] = React.useState(false);

  const handleChange = (name,value) => {
    state.form[name]=value;
    setForm(!form);
  };
  const options = [
    {
      value:"mobile",
      label:t('talent.stepper.contactinfostep.inputs.communicationType.mobile')
    },
    {
      value:"email",
      label:t('talent.stepper.contactinfostep.inputs.communicationType.email')
    },
    {
      value:"whatsapp",
      label:t('talent.stepper.contactinfostep.inputs.communicationType.whatsapp')
    }
  ]

  return (
    <Box sx={{ flexGrow: 1, flexWrap: 'wrap',marginTop:{xs:0,md:10} }}>
      <Grid container spacing={0} sx={{display:'flex',justifyContent:'center'}}>
        <FormControl sx={{borderRadius:1,m:1,height:55,width:{xs:300,md:150}}} required >
          <CodeCountrySelect lang={i18n.language} t={t} onChange={handleChange} value={"phoneCode"}/>
        </FormControl>
        <Input direction={"ltr"} required={true} handleChange={handleChange} name ={"phonenumber"} value = {state.form?.phonenumber} label={t('talent.stepper.contactinfostep.inputs.phonenumber')} />
        <Input direction={"ltr"} required={true} handleChange={handleChange} name ={"fixnumber"} value = {state.form?.fixnumber} label={t('talent.stepper.contactinfostep.inputs.fixnumber')} />
        <Input direction={"ltr"} handleChange={handleChange} name ={"website"} value = {state.form?.website} label={t('talent.stepper.contactinfostep.inputs.website')} />
 
        <ComunicationTypeSelect  
          label={t('talent.stepper.contactinfostep.inputs.communicationType.title')} 
          noneItem={t('talent.stepper.buttons.none')}
          value={state?.form?.communicationtype || ''}
          options={options}
          onChange={handleChange}
        />
      </Grid>
      <Grid sx={{ display:'flex', m:1, justifyContent:'center'}}>
        <Divider  sx={{width:{xs:'80%',md:'70%'}}}  />
      </Grid>
      
      <Grid container spacing={0} sx={{display:'flex',justifyContent:'center'}}>
        <SocialNetworksList/>
      </Grid>
    </Box>
  )
}

export default ContactInfoStep