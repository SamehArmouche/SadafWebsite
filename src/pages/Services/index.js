import * as React from 'react';
import {Grid, Fade} from '@mui/material';
import { fetchServices } from '../../redux/thunks';
import { useDispatch, useSelector } from 'react-redux'
import Carousel from '../../components/Carousel';
import Details from '../../components/shared/Details';
import { useTranslation } from 'react-i18next';

function Services() {
  const dispatch: Dispatch = useDispatch();
  const [open, setOpen] = React.useState(false)
  const [service, setService ] = React.useState({});
  const { i18n } = useTranslation();
  const { services } = useSelector(
    (state) => state.services
  )
  const handleChange = (value) => {
    setService(value)
    setOpen(!open)
 }

  React.useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  return (
    <Fade  in={true} mountOnEnter unmountOnExit>
      <Grid item xs={7} sx={{p:0,justifyContent:'center',alignItems:'center',display:'flex',height:"75%",width:'100%'}}>
      <Carousel items={services} onClick={()=>setOpen(!open)} handleChange={handleChange} />
        <Details open={open} handleClose={()=> setOpen(!open)} 
          title={`${service[`title_${i18n.language}`]}`}
          description={`${service[`description_${i18n.language}`]}`}
          img={`${service["img"]}`}
        />
      </Grid>
    </Fade>
  );
}

export default Services;