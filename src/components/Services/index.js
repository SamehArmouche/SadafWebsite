import {Grid, Typography, Button, TextField, Divider} from '@mui/material';
import colors from '../../assets/theme/colors/'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import * as React from 'react'


const ServiceForm = () => {
  const { state } = useLocation();
  const { t, i18n } = useTranslation();
  const [form, setForm] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errors, setErrors] = React.useState({});

  const handleChange = (name,value) => {
    //handleError(name, value);
    setForm(!form);
  };
  


  return (
    <Grid container sx={{flexDirection:'column',p:2,justifyContent:'center'}}>
      <Grid container sx={{justifyContent:'center'}}>

        <TextField id="filled-basic" label={t('service.form.firstname')}  variant="filled"
          inputProps={{ style: { color: colors.primary }}}
          sx={{backgroundColor:'rgba(247, 216, 159, 0.1)',borderRadius:1,m:1,minWidth:300}}
        >
        </TextField>
        <TextField id="filled-basic" label={t('service.form.fathername')} variant="filled"
          inputProps={{ style: { color: colors.primary }}}
          sx={{backgroundColor:'rgba(247, 216, 159, 0.1)',borderRadius:1,m:1,minWidth:300}}
        >
        </TextField>
        <TextField id="filled-basic" label={t('service.form.lastname')} variant="filled"
          inputProps={{ style: { color: colors.primary }}}
          sx={{backgroundColor:'rgba(247, 216, 159, 0.1)',borderRadius:1,m:1,minWidth:300}}
        >
        </TextField>
      </Grid>


      <Grid sx={{ display:'flex', m:1,p:0, justifyContent:'center',alignItems:'center'}}>
        <Divider  sx={{width:'70%',height:0}}  />
      </Grid>




      <Grid container sx={{justifyContent:'center'}}>
        <TextField id="filled-basic" label={t('service.form.companyName')} variant="filled"
          inputProps={{ style: { color: colors.primary }}}
          sx={{backgroundColor:'rgba(247, 216, 159, 0.1)',borderRadius:1,m:1,minWidth:300}}
        >
        </TextField>
        <TextField id="filled-basic" label={t('service.form.type')}variant="filled"
          inputProps={{ style: { color: colors.primary }}}
          sx={{backgroundColor:'rgba(247, 216, 159, 0.1)',borderRadius:1,m:1,minWidth:300}}
        >
        </TextField>
      </Grid>
    </Grid>
  )
}


export default ServiceForm