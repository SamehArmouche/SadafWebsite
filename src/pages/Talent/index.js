import * as React from 'react';
import {Box, Typography, Grid, Slide, Button, TextField} from '@mui/material';
import { useTranslation } from 'react-i18next';
import colors from '../../assets/theme/colors';
import {validateEmail} from '../../helpers/validations';
import { useNavigate } from "react-router-dom";

function Talent() {
  const { t, i18n } = useTranslation();
  const [ form, setForm ]= React.useState({email:''});
  const [ error, setError ] = React.useState(false);
  const navigate = useNavigate(); 

  const handleError = (value)=>{
    if(value==="email")
      return !validateEmail(form[value]);
    return !form[value]?.length>0
  }

  const onSubmit = async () => {
    if(Object.values(form).length<1 || !validateEmail(form['email'])){
      setError(true)
    }else{
      setError(false)
      navigate('/talents/register',
        {
          state: {
            form:form
          }
        }
      )

    }
  }

  return (
    <Box sx={{height:'75.5%',alignItems:'center',justifyContent:'center',display:'flex',flexDirection:{xs:'column',md:'row'}}}>

      <Grid container sx={{margin:0,p:{xs:0,md:0},marginBottom:5 ,justifyContent:'center'}}>
        <Slide direction={i18n.language==="ar"?"left":"right"} in={true}  mountOnEnter unmountOnExit>
          <Grid item sx={{p:0,width:{xs:'90%',md:500}}}>
            <Typography textAlign={i18n.dir()==="rtl"?"right":"left"} sx={{fontSize:{xs:18,md:30}}}>
              {t('talent.title')}
            </Typography>
          </Grid>
        </Slide>
      </Grid>
      
      <Grid container sx={{margin:0,p:{xs:0,md:0} ,justifyContent:'center'}}>
      <Box 
        border={1} 
        sx={{
          backgroundColor:'black',width:{xs:'90%'},maxWidth:400,height:200,
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