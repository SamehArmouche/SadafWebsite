import * as React from 'react';
import {Box, Typography, Grid, Slide, Button, TextField, Checkbox} from '@mui/material';
import { useTranslation } from 'react-i18next';
import colors from '../../assets/theme/colors';
import {validateEmail} from '../../helpers/validations';
import { useNavigate } from "react-router-dom";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useDispatch } from 'react-redux'
import { fetchCategories } from '../../redux/thunks';

function Talent() {
  const state = {
    form: {
      email:'',
  
    }
  }  
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" sx={{opacity:0.9}}/>;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
  const { t, i18n } = useTranslation();
  const [ form, setForm ]= React.useState({});
  const [ error, setError ] = React.useState(false);
  const [ consent, setConsent ] = React.useState(false);
  const navigate = useNavigate(); 
  const dispatch: Dispatch = useDispatch();



  const handleError = (value)=>{
    return (form[value]!==undefined?!validateEmail(form[value]):false)
  }

  const onSubmit = async () => {
    if(Object.values(form).length<1 || !validateEmail(form['email'])){
      setError(true)
    }else{
      state.from={};
      await dispatch(fetchCategories(form.email)).then((res)=>{
        state.categories=res.payload.categories
        state.registeredCategories=res.payload.registered
      });
      state.form.email=form.email;
      setError(false);
      navigate('/talents/register',
        {
          state:state
        }
      )

    }
  }

  return (
    <Box sx={{minHeight:'72vh',alignItems:'center',justifyContent:'center',display:'flex',flexDirection:{xs:'column',md:'row'},width:'100%'}}>
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
          backgroundColor:'black',width:{xs:'80%'},maxWidth:400,height:300,
          borderColor: 'rgba(247, 216, 159, 0.1)', borderWidth: '0.1em',borderRadius:1,
          alignItems:'center',display:'flex',
          justifyContent:'center',
          flexDirection:'column',
          margin:0,
        }}
      >
        <Box sx={{width:'100%',justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'column'
      }}>
        <TextField id="filled-basic" label={t('contact.email')} variant="filled"
          inputProps={{ style: { color: colors.primary } }}
          error={handleError("email") || error}
          onChange={(e) => { setForm({...form,"email": e.target.value}); setError(false); }}
          sx={{backgroundColor:'rgba(247, 216, 159, 0.1)',borderRadius:1, mt:3.5,width:{xs:'80%',md:'70%'},direction:'ltr'}}
          required
          type={"email"}
          autoComplete='nope'
          helperText={handleError("email")?t('contact.errors.email'):""}
        />
        <Box sx={{width:'100%', display:'flex',alignItems:'center',justifyContent:'center'}}>
          <Box sx={{display:'flex',alignItems:'center',width:{xs:'85%',md:'74%'}}}>
        <Checkbox
          sx={{
            '&:hover': { bgcolor: 'transparent' },
          }}
          icon={icon}
          checkedIcon={checkedIcon}
          checked={consent}
          onChange={()=>setConsent(!consent)}
        />
        <Typography textAlign={"left"} sx={{fontSize:13,opacity:0.9}} >
          {t('talent.consent')}
        </Typography>
        </Box>
        </Box>
          <Button variant="contact" onClick={onSubmit} disabled={!consent}>
            {t('button.registerNow')}
          </Button>
        </Box>
      </Box> 
      </Grid>
    </Box>
  );
}

export default Talent;