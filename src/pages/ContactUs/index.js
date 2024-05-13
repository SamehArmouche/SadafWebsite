import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Box, Typography, TextField, FormControl} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux'
import colors from '../../assets/theme/colors';
import { sendContactForm } from '../../redux/thunks';
import { useSnackbar } from 'notistack';
import { useNavigate } from "react-router-dom";
import {validateEmail} from '../../helpers/validations';
import CountrySelect from '../../components/Contact/Country';

function ContactUs() {
  const dispatch: Dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const [ form, setForm ] = React.useState({});
  const [ error, setError ] = React.useState(false);
  const [ errors, setErrors ] = React.useState({});
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();  

  const handleClickVariant = (msg, variant) => {
    enqueueSnackbar(msg, { variant });
  };
  
  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
    setErrors({...errors, [name]: handleError(value)});
  }

  const onSubmit = async () => {
    if(Object.values(form).length<5 || Object.values(form).includes("") || !validateEmail(form['email'])){
      setError(true)
    }else{
      setError(false)
      const response = await dispatch(sendContactForm(form));
      if(!response.error){
        handleClickVariant(t('contact.response.200'),'success');
        setForm({});
        navigate("/")
      }else{
        handleClickVariant(t('contact.response.400'),'error')
      }
    }
  }

  const handleError = (value)=>{
    if(form[value]!==undefined){
      if(value==='email')
        return !validateEmail(form[value]);
      return !form[value]?.length>0
    }
  }

  return (
    <Grid item xs={7} sx={{p:0,justifyContent:'center',alignItems:'center',display:'flex',minHeight:'72vh',width:'100%'}}>
      <Box 
      border={1} 
      sx={{
        backgroundColor:'black',width:{xs:'80%'},mt:3,maxWidth:500,
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
          //helperText={handleError("fullname")?t('contact.errors.empty'):""}
          onChange={(e) => {onChange({name:"fullname",value:e.target.value})}}
          sx={{backgroundColor:'rgba(247, 216, 159, 0.1)',borderRadius:1, m:1,width:{xs:'80%',md:'70%'}}}
          required
          autoComplete='nope'
        
        />
        <TextField id="filled-basic" label={t('contact.companyName')} variant="filled"
          inputProps={{ style: { color: colors.primary } }}
          
          error={handleError("companyName")}
          onChange={(e) => {onChange({name:"companyName",value:e.target.value})}}
          sx={{backgroundColor:'rgba(247, 216, 159, 0.1)',borderRadius:1, m:1,width:{xs:'80%',md:'70%'}}}
          required
          //helperText={handleError("companyName")?t('contact.errors.empty'):""}
          autoComplete='nope'
        />
      
        <FormControl sx={{borderRadius:1,m:1,height:55,width:{xs:'80%',md:350}}} required >
          <CountrySelect error={handleError("country")} lang={i18n.language} t={t} onChange={onChange} value={"country"} defaultValue={form.country}/>
        </FormControl>
        <TextField id="filled-basic" label={t('contact.email')} variant="filled"
          inputProps={{ style: { color: colors.primary } }}
          onChange={(e) => {onChange({name:"email",value:e.target.value})}}
          sx={{backgroundColor:'rgba(247, 216, 159, 0.1)',borderRadius:1, m:1,width:{xs:'80%',md:'70%'}, direction:'ltr'}}
          required
          error={handleError("email")}
          helperText={handleError("email")?t('contact.errors.email'):""}
          autoComplete='nope'
        />
        <TextField id="filled-basic" label={t('contact.msg')} variant="filled"
          inputProps={{ style: { color: colors.primary } }}
          multiline
          error={handleError("messageBody")}
          onChange={(e) => {onChange({name:"messageBody",value:e.target.value})}}
          sx={{backgroundColor:'rgba(247, 216, 159, 0.1)',borderRadius:1, m:1,width:{xs:'80%',md:'70%'}}}
          //helperText={errors.messageBody?t('contact.errors.empty'):""}
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