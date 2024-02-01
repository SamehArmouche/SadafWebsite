import * as React from 'react';
import Box from '@mui/material/Box';
import colors from '../../assets/theme/colors';
import { useTranslation } from 'react-i18next';

function NotFound() {
  const { t } = useTranslation();
  return (
    <Box sx={{minHeight:'72vh',alignItems:'center',justifyContent:'center',display:'flex',flexDirection:'column'}}>
      <img src = {'/images/404.png'}  alt={"notfound.png"} style={{width: 420,height:420}}></img>  
      <h1 style={{color:colors.primary}}>{t('msg.404')}</h1>
    </Box>
  );
}

export default NotFound;