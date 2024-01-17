import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';

function NotFound() {
  const { t } = useTranslation();
  return (
    <Box sx={{height:'75.5%',alignItems:'center',justifyContent:'center',display:'flex'}}>
    </Box>
  );
}

export default NotFound;