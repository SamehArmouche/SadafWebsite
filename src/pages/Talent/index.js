import * as React from 'react';
import {Box, Typography, Grid, Slide, Button, TextField} from '@mui/material';
import { useTranslation } from 'react-i18next';
import colors from '../../assets/theme/colors';
import {validateEmail} from '../../helpers/validations';
import { useNavigate } from "react-router-dom";

const state = {
  form: {
    email:'',

  }
}


function Talent() {
  const { t, i18n } = useTranslation();
  const [ form, setForm ]= React.useState({});
  const [ error, setError ] = React.useState(false);
  const navigate = useNavigate(); 

  const handleError = (value)=>{
    return (form[value]!==undefined?!validateEmail(form[value]):false)
  }

  const onSubmit = async () => {
    if(Object.values(form).length<1 || !validateEmail(form['email'])){
      setError(true)
    }else{
      state.form.email=form.email;
      state.form.diseases='لا';
      state.form.healthcare='لا';
      state.form.preparticipation='لا'
      state.form.cantravel='لا'
      setError(false)
      navigate('/talents/register',
        {
          state:state
        }
      )

    }
  }

  return (
    <Box sx={{minHeight:'72vh',alignItems:'center',justifyContent:'center',display:'flex',flexDirection:{xs:'column',md:'row'}}}>
      <Grid container sx={{margin:0,mt:{xs:5,md:0},marginBottom:5 ,justifyContent:'center'}}>
        <Slide direction={i18n.language==="ar"?"left":"right"} in={true}  mountOnEnter unmountOnExit>
          <Grid item sx={{p:0,width:{xs:'90%',md:500}}}>
            <Typography textAlign={"justify"} sx={{fontSize:{xs:18,md:25},pl:2,pr:2}}>
              {t('talent.title')}
            </Typography>
          </Grid>
        </Slide>
      </Grid>
      
      <Grid container sx={{margin:0,p:{xs:0,md:0} ,justifyContent:'center'}}>
      <Box 
        border={1} 
        sx={{
          backgroundColor:'black',width:{xs:'80%'},maxWidth:400,height:280,
          borderColor: 'rgba(247, 216, 159, 0.1)', borderWidth: '0.1em',borderRadius:1,
          alignItems:'center',display:'flex',
          justifyContent:'center',
          flexDirection:'column',
          margin:2,
        }}
      >
        <Box sx={{width:'100%',justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'column'
      }}>
        <TextField id="filled-basic" label={t('contact.email')} variant="filled"
          inputProps={{ style: { color: colors.primary } }}
          error={handleError("email")}
          onChange={(e) => { setForm({...form,"email": e.target.value}) }}
          sx={{backgroundColor:'rgba(247, 216, 159, 0.1)',borderRadius:1, mt:3.5,width:{xs:'80%',md:'70%'},direction:'ltr'}}
          required
          autoComplete='nope'
          helperText={handleError("email")?t('contact.errors.email'):""}
        />
        <Box sx={{height:24,width:'100%',justifyContent:'center',display:'flex'}}>
          {error &&
          <Typography textAlign={"left"} sx={{fontSize:{xs:14,sm:16,color:colors.error},m:1}} >
            {t('contact.errors.onsubmit')}
          </Typography>
        }
        </Box>
          <Button variant="contact" onClick={onSubmit}>
            {t('button.registerNow')}
          </Button>
        </Box>
      </Box> 
      </Grid>
    </Box>
  );
}

export default Talent;