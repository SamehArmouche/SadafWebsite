import * as React from 'react';
import {Grid, Fade} from '@mui/material';
import { fetchSuccess } from '../../redux/thunks';
import { useDispatch, useSelector } from 'react-redux'
import Carousel from '../../components/Carousel';
import Details from '../../components/shared/Details';
import { useTranslation } from 'react-i18next';

function Success() {
  const dispatch: Dispatch = useDispatch();
  const [open, setOpen] = React.useState(false)
  const [s, setS ] = React.useState({});
  const { i18n } = useTranslation();
  const { success } = useSelector(
    (state) => state.success
  )
  const handleChange = (value) => {
    setS(value)
    setOpen(!open)
 }
  React.useEffect(() => {
    dispatch(fetchSuccess());
  }, [dispatch]);

  return (
    <Fade  in={true} mountOnEnter unmountOnExit>
      <Grid item xs={7} sx={{p:0,justifyContent:'center',alignItems:'center',display:'flex',height:"75%",width:'100%'}}>
      <Carousel items={success} onClick={()=>setOpen(!open)} handleChange={handleChange} />
        <Details open={open} handleClose={()=> setOpen(!open)} 
          title={`${s[`title_${i18n.language}`]}`}
          description={`${s[`description_${i18n.language}`]}`}
        />
      </Grid>
    </Fade>
  );
}

export default Success;