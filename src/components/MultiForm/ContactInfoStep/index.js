import {
  Grid,
  Typography,
  Box,
  TextField,
  FormControl
} from "@mui/material";
import * as React from 'react'
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom'
import colors from '../../../assets/theme/colors/'
import CodeCountrySelect from './CodeCountrySelect'

const ContactInfoStep = ({
  handleSubmit
}) => {

  const { state } = useLocation();
  const { t, i18n } = useTranslation();
  const [form, setForm] = React.useState(false);

  const handleChange = (name,value) => {
    state.form[name]=value;
    setForm(!form);
  };


  return (
    <Box sx={{ flexGrow: 1,height:'100%',flexWrap: 'wrap',marginTop:{xs:0,md:10} }}>
      <Grid container spacing={0} sx={{display:'flex',justifyContent:'center'}}>
        <FormControl sx={{borderRadius:1,m:1,height:55,width:{xs:300,md:150}}} required >
          <CodeCountrySelect lang={i18n.language} t={t} onChange={handleChange} value={"nacionality"}/>
        </FormControl>
        <TextField id="filled-basic" label={t('talent.stepper.contactinfostep.inputs.phonenumber')} variant="filled"
            inputProps={{ style: { color: colors.primary }}}
            value={state.form?.phonenumber || ''}
            //error={handleError("companyName")}
            onChange={(e) => handleChange("phonenumber",e.target.value)}
            sx={{backgroundColor:'rgba(247, 216, 159, 0.1)',borderRadius:1,m:1,height:55,width:300, direction:'ltr'}}
            required
            autoComplete='nope'
          />
          <TextField id="filled-basic" label={t('talent.stepper.contactinfostep.inputs.fixnumber')} variant="filled"
            inputProps={{ style: { color: colors.primary } }}
            value={state.form?.fixnumber || ''}
            //error={handleError("companyName")}
            onChange={(e) => handleChange("fixnumber",e.target.value)}
            sx={{backgroundColor:'rgba(247, 216, 159, 0.1)',borderRadius:1,m:1,height:55,width:300, direction:'ltr'}}
            required
            autoComplete='nope'
          />
          <TextField id="filled-basic" label={t('talent.stepper.contactinfostep.inputs.website')} variant="filled"
            inputProps={{ style: { color: colors.primary } }}
            value={state.form?.website || ''}
            //error={handleError("companyName")}
            onChange={(e) => handleChange("website",e.target.value)}
            sx={{backgroundColor:'rgba(247, 216, 159, 0.1)',borderRadius:1,m:1,height:55,width:300, direction:'ltr'}}
            autoComplete='nope'
          />
      </Grid>
    </Box>
  )
}

export default ContactInfoStep