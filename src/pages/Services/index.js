import * as React from 'react';
import {Grid, Fade, Typography, Button} from '@mui/material';
import { fetchServices } from '../../redux/thunks';
import { useDispatch } from 'react-redux'
import Carousel from '../../components/Carousel';
import ServiceForm from '../../components/Services';
import Details from '../../components/shared/Details';
import { useTranslation } from 'react-i18next';
import colors from '../../assets/theme/colors';

function Services() {
  const dispatch: Dispatch = useDispatch();
  const [open, setOpen] = React.useState(false)
  const [service, setService ] = React.useState({});
  const [services, setServices ] = React.useState({});
  const [showService, setShowService] = React.useState('root')
  const {t, i18n } = useTranslation();

  const handleChange = (value) => {
    
    setService(value)
    setOpen(!open)
  }
  const onClick = async (value) =>{
    const result = await dispatch(fetchServices())
    setServices(result.payload);
    setShowService(value)
  }




  return (
    <Fade  in={true} mountOnEnter unmountOnExit>
      <Grid item xs={7} sx={{p:0,justifyContent:'center',alignItems:'center',display:'flex',minHeight:'72vh',width:'100%'}}>
        {
          showService==='root' && 
          <>
          <Grid 
          sx={{
            width: 250,
            maxWidth: 250,
            height: 250,
            p:2,
            m:2,
            backgroundColor: colors.hover,
            borderRadius:2,
            alignItems:'center',
            justifyContent:'center',
            display:'flex',
            '&:hover': {
              backgroundColor:colors.hover,
              opacity: [0.9, 0.8, 0.7],
            }
          }}
          
          onClick={()=>onClick("Our")}>
            <Typography sx={{fontSize:20}}>
            {t('service.title')}
            </Typography>
            
          </Grid>
          <Grid 
          
          sx={{
            width: 250,
            maxWidth: 250,
            height: 250,
            m:1,
            p:2,
            backgroundColor: colors.hover,
            borderRadius:2,
            alignItems:'center',
            justifyContent:'center',
            display:'flex',
            boxShadow: '0px 5px 22px rgba(0, 0, 0, 0.04), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.03)',
            '&:hover': {
              backgroundColor:colors.hover,
              opacity: [0.9, 0.8, 0.7],
            }
          }}
          
          onClick={()=>onClick("Third")}>
            <Typography sx={{fontSize:20}}>
            {t('service.form.title')}
            </Typography>
            
          </Grid>
          </>
        }

        {
          showService==='Our' &&
          <Grid container sx={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <Button onClick={()=> onClick("root")} sx={{color:colors.primary}}>{t('service.buttons.back')}</Button>
            <Carousel items={services} onClick={()=>setOpen(!open)} handleChange={handleChange} />
              <Details open={open} handleClose={()=> setOpen(!open)} 
                title={`${service[`title_${i18n.language}`]}`}
                description={service[`description_${i18n.language}`]}
                direction={i18n.dir()}
                img={`${service["img"]}`}
                alt={"service"}
              /> 
          </Grid>
        }
        {
          showService==='Third' &&
          <Grid container sx={{flexDirection:'column',justifyContent:'center',alignItems:'center',minHeight:'60vh'}}>
            <Button onClick={()=> onClick("root")} sx={{color:colors.primary}}> {t('service.buttons.back')}</Button>
            <ServiceForm onClick={onClick}/>
          </Grid>
        }
      </Grid>
    </Fade>
  );
}

export default Services;