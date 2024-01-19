import * as React from 'react';
import {Grid, Fade} from '@mui/material';
import { fetchSuccess } from '../../redux/thunks';
import { useDispatch, useSelector } from 'react-redux'
import Carousel from '../../components/Carousel';

function Success() {
  const dispatch: Dispatch = useDispatch();
  const { success } = useSelector(
    (state) => state.success
  )

  React.useEffect(() => {
    dispatch(fetchSuccess());
  }, [dispatch]);

  return (
    <Fade  in={true} mountOnEnter unmountOnExit>
      <Grid item xs={7} sx={{p:0,justifyContent:'center',alignItems:'center',display:'flex',height:"75%",width:'100%'}}>
        <Carousel items={success}/>
      </Grid>
    </Fade>
  );
}

export default Success;