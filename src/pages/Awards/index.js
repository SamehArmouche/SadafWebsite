import * as React from 'react';
import {Grid, Fade} from '@mui/material';
import { fetchAwards } from '../../redux/thunks';
import { useDispatch, useSelector } from 'react-redux'
import Carousel from '../../components/Carousel';

function Awards() {
  const dispatch: Dispatch = useDispatch();
  const { awards } = useSelector(
    (state) => state.awards
  )

  React.useEffect(() => {
    dispatch(fetchAwards());
  }, [dispatch]);

  return (
    <Fade  in={true} mountOnEnter unmountOnExit>
      <Grid item xs={7} sx={{p:0,justifyContent:'center',alignItems:'center',display:'flex',height:"75%",width:'100%'}}>
        <Carousel items={awards}/>
      </Grid>
    </Fade>
  );
}

export default Awards;