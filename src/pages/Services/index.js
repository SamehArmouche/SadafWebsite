import * as React from 'react';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'react-i18next';
import { fetchServices } from '../../redux/thunks';
import { useDispatch, useSelector } from 'react-redux'
import Carousel from '../../components/Carousel';

function Services() {
  const dispatch: Dispatch = useDispatch();
  const { services } = useSelector(
    (state) => state.services
  )

  React.useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  return (
    <Grid item xs={7} sx={{p:0,justifyContent:'center',alignItems:'center',display:'flex',height:"75%",width:'100%'}}>
      <Carousel items={services}/>
    </Grid>
  );
}

export default Services;