import * as React from 'react';
import {Grid, Fade} from '@mui/material';
import { fetchAwards } from '../../redux/thunks';
import { useDispatch, useSelector } from 'react-redux'
import Carousel from '../../components/Carousel';
import Details from '../../components/shared/Details';
import { useTranslation } from 'react-i18next';

function Awards() {
  const dispatch: Dispatch = useDispatch();
  const [open, setOpen] = React.useState(false)
  const [award, setAward] = React.useState({});
  const { i18n } = useTranslation();
  const { awards } = useSelector(
    (state) => state.awards
  )
  const handleChange = (value) => {
    setAward(value)
    setOpen(!open)
 }


  React.useEffect(() => {
    dispatch(fetchAwards());
  }, [dispatch]);

  return (
    <Fade  in={true} mountOnEnter unmountOnExit>
      <Grid item xs={7} sx={{p:0,justifyContent:'center',alignItems:'center',display:'flex',minHeight:'72vh',width:'100%'}}>
        <Carousel items={awards} onClick={()=>setOpen(!open)} handleChange={handleChange} />
        <Details open={open} handleClose={()=> setOpen(!open)} 
          title={`${award[`title_${i18n.language}`]}`}
          description={`${award[`description_${i18n.language}`]}`}
          img={`${award["img"]}`}
        />
      </Grid>
    </Fade>
  );
}

export default Awards;