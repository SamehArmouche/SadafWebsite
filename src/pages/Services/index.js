import * as React from 'react';
import {Grid, Fade} from '@mui/material';
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
    <Fade  in={true} mountOnEnter unmountOnExit>
      <Grid item xs={7} sx={{p:0,justifyContent:'center',alignItems:'center',display:'flex',height:"75%",width:'100%'}}>
        <Carousel items={services}/>
      </Grid>
    </Fade>
  );
}

export default Services;