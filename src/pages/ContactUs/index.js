import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Box, Typography, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux'


function ContactUs() {
  const dispatch: Dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  
  React.useEffect(() => {

  }, [dispatch]);

  return (
    <Grid item xs={7} sx={{p:0,justifyContent:'center',alignItems:'center',display:'flex',height:"75%",width:'100%'}}>
      <Box 
      border={1} 
      sx={{
        backgroundColor:'black',width:{xs:'90%'},height:'76%',maxWidth:500,
        borderColor: 'rgba(247, 216, 159, 0.1)', borderWidth: '0.1em',borderRadius:1,
        alignItems:'center',display:'flex',
        flexDirection:'column'
      }}
      
      >
        <Typography textAlign={i18n.dir()==="rtl"?"right":"left"} sx={{fontSize:{xs:18,sm:30},m:4}} >
          {t('contact.title')}
        </Typography>
        <TextField id="filled-basic" label={t('contact.name')} variant="filled"
        sx={{backgroundColor:'rgba(247, 216, 159, 0.1)',borderRadius:1, m:1,width:{xs:'80%',md:'70%'}}}
        
        />
        <TextField id="filled-basic" label={t('contact.companyName')} variant="filled"
        sx={{backgroundColor:'rgba(247, 216, 159, 0.1)',borderRadius:1, m:1,width:{xs:'80%',md:'70%'}}}
        
        />
        
        <TextField id="filled-basic" label={t('contact.city')} variant="filled"
        sx={{backgroundColor:'rgba(247, 216, 159, 0.1)',borderRadius:1, m:1,width:{xs:'80%',md:'70%'}}}
        
        />
        <TextField id="filled-basic" label={t('contact.email')} variant="filled"
        sx={{backgroundColor:'rgba(247, 216, 159, 0.1)',borderRadius:1, m:1,width:{xs:'80%',md:'70%'}}}
        
        />
        <Button variant="contact"
        >
          {t('button.sendMsg')}
        </Button>
        
      </Box> 
    </Grid>
  );
}

export default ContactUs;