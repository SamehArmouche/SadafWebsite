import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';

function Talent() {
  const { t, i18n } = useTranslation();

  return (
    <Box sx={{height:'75.5%',alignItems:'center',justifyContent:'center',display:'flex'}}>
      <Grid container sx={{margin:0,p:{xs:0,md:0},width:"80%"}}>
        <Grid item xs={7} sx={{p:0}}>
          <Typography textAlign={i18n.dir()==="rtl"?"right":"left"} sx={{fontSize:{xs:18,md:30}}}>
          {t('talent.title')}
          </Typography>
        </Grid>
        <Grid item xs={8} sx={{p:0}}>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Talent;