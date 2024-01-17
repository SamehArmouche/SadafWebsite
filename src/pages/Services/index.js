import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';
import { fetchServices } from '../../redux/thunks';
import { useDispatch, useSelector } from 'react-redux'

function Services() {
  const { t } = useTranslation();
  const dispatch: Dispatch = useDispatch()
  const { services, error } = useSelector(
    (state) => state.services
  )

  React.useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);


  return (
    <Box sx={{height:'75.5%',alignItems:'center',justifyContent:'center',display:'flex'}}>
    </Box>
  );
}

export default Services;