import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Box, Typography, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux'
import colors from '../../assets/theme/colors';
import { sendContactForm } from '../../redux/thunks';
function ContactUs() {
  const dispatch: Dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const [ form, setForm ] = React.useState({});
  const [ error, setError ] = React.useState(false);
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
  }

  const onSubmit = () => {
    if(Object.values(form).length<5 || !validateEmail(form['email'])){
      setError(true)
    }else{
      setError(false)
      dispatch(sendContactForm(form));
    }
  }

  const handleError = (value)=>{
    if(value==="email")
      return !validateEmail(form[value]);
    return !form[value]?.length>0
  }

  return (
    <Grid item xs={7} sx={{p:0,justifyContent:'center',alignItems:'center',display:'flex',minHeight:"75%",width:'100%'}}>
      <Box 
      border={1} 
      sx={{
        backgroundColor:'black',width:{xs:'90%'},height:'76%',maxWidth:500,
        borderColor: 'rgba(247, 216, 159, 0.1)', borderWidth: '0.1em',borderRadius:1,
        alignItems:'center',display:'flex',
        flexDirection:'column'
      }}
      
      >
        <Typography textAlign={i18n.dir()==="rtl"?"right":"left"} sx={{fontSize:{xs:18,sm:20},m:4}} >
          {t('contact.title')}
        </Typography>
        <TextField id="filled-basic" label={t('contact.fullname')} variant="filled"
          inputProps={{ style: { color: colors.primary } }}
          error={handleError("fullname")}
          onChange={(e) => {onChange({name:"fullname",value:e.target.value})}}
          sx={{backgroundColor:'rgba(247, 216, 159, 0.1)',borderRadius:1, m:1,width:{xs:'80%',md:'70%',direction:'ltr'}}}
          required
          autoComplete='nope'
        
        />
        <TextField id="filled-basic" label={t('contact.companyName')} variant="filled"
          inputProps={{ style: { color: colors.primary } }}
          
          error={handleError("companyName")}
          onChange={(e) => {onChange({name:"companyName",value:e.target.value})}}
          sx={{backgroundColor:'rgba(247, 216, 159, 0.1)',borderRadius:1, m:1,width:{xs:'80%',md:'70%'}}}
          required
          autoComplete='nope'
        />
        
        <TextField id="filled-basic" label={t('contact.city')} variant="filled"
          inputProps={{ style: { color: colors.primary } }}
          error={handleError("city")}
          onChange={(e) => {onChange({name:"city",value:e.target.value})}}
          sx={{backgroundColor:'rgba(247, 216, 159, 0.1)',borderRadius:1, m:1,width:{xs:'80%',md:'70%'}}}
          autoComplete='nope'
        />
        <TextField id="filled-basic" label={t('contact.email')} variant="filled"
          inputProps={{ style: { color: colors.primary } }}
          onChange={(e) => {onChange({name:"email",value:e.target.value})}}
          sx={{backgroundColor:'rgba(247, 216, 159, 0.1)',borderRadius:1, m:1,width:{xs:'80%',md:'70%'}}}
          required
          error={handleError("email")}
          autoComplete='nope'
        />
        <TextField id="filled-basic" label={t('contact.msg')} variant="filled"
          inputProps={{ style: { color: colors.primary } }}
          multiline
          maxRows={4}
          error={handleError("messageBody")}
          onChange={(e) => {onChange({name:"messageBody",value:e.target.value})}}
          sx={{backgroundColor:'rgba(247, 216, 159, 0.1)',borderRadius:1, m:1,width:{xs:'80%',md:'70%'}}}
          required
          autoComplete='nope'
        />
        <Box sx={{height:24,width:'100%',justifyContent:'center',display:'flex'}}>
          {error &&
          <Typography textAlign={"left"} sx={{fontSize:{xs:14,sm:16,color:colors.error}}} >
            {t('contact.errors.onsubmit')}
          </Typography>
          }
        </Box>
        <Button variant="contact" onClick={onSubmit}>
          {t('button.sendMsg')}
        </Button>
      </Box> 
    </Grid>
  );
}

export default ContactUs;