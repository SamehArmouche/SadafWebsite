import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import myImg from '../../assets/images/404.png';
import colors from '../../assets/theme/colors';
import { useTranslation } from 'react-i18next';

function NotFound() {
  const { t } = useTranslation();
  return (
    <Box sx={{height:'75.5%',alignItems:'center',justifyContent:'center',display:'flex',flexDirection:'column'}}>
      <img src = {myImg}  alt={"notfound.png"} style={{width: 420,height:420}}></img>  
      <h1 style={{color:colors.primary}}>{t('msg.404')}</h1>
    </Box>
  );
}

export default NotFound;