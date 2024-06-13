import * as React from 'react';
import {Grid, Fade, Typography } from '@mui/material';
import { fetchServices } from '../../redux/thunks';
import { useDispatch } from 'react-redux'
import Carousel from '../../components/Carousel';
import ServiceForm from '../../components/Services';
import Details from '../../components/shared/Details';
import { useTranslation } from 'react-i18next';
import colors from '../../assets/theme/colors';
import Loading from '../../components/Loading'

function Services() {
  const dispatch: Dispatch = useDispatch();
  const [open, setOpen] = React.useState(false)
  const [service, setService ] = React.useState({});
  const [services, setServices ] = React.useState({});
  const [showService, setShowService] = React.useState('Our');
  const [loading, setLoading] = React.useState(false)
  const {t, i18n } = useTranslation();

  const handleChange = (value) => {
    
    setService(value)
    setOpen(!open)
  }
  const onClick = async (value) =>{
    setShowService(value)
  }


  React.useEffect(() => {
    setLoading(true);
    dispatch(fetchServices()).then((r)=>{setServices(r.payload); setLoading(false);})
  }, [dispatch]);




  return (
    <Fade  in={true} mountOnEnter unmountOnExit>
      <Grid item sx={{
        pt:5,justifyContent:'cesnter',alignItems:'center',display:'flex',
        minHeight:'72vh',width:'100%',flexDirection:{xs:'column',md:'column'}
        }}>
        {
          
          <Grid container sx={{justifyContent:'center'}}>
          <Grid 
          sx={{
            width: 230,
            height: 50,
            p:2,
            m:1,
            backgroundColor: showService==='Our'?colors.hover:colors.background,
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
            <Typography sx={{}}>
            {t('service.title')}
            </Typography>
            
          </Grid>
          <Grid 
          
          sx={{
            width: 230,
            height: 50,
            m:1,
            p:2,
            backgroundColor: showService==='Third'?colors.hover:colors.background,
            borderRadius:2,
            alignItems:'center',
            justifyContent:'center',
            display:'flex',
            '&:hover': {
              backgroundColor:colors.hover,
              opacity: [0.9, 0.8, 0.7],
            }
          }}
          
          onClick={()=>onClick("Third")}>
            <Typography sx={{fontSize:12}}>
            {t('service.form.title')}
            </Typography>
            
          </Grid>
          </Grid>
        }

          <Grid container sx={{height:'100%',justifyContent:'center',alignItems:'center',width:showService==='Our'?'80%':'100%'}}>
            {loading && <Loading style={{color: colors.primary}}/>}
            {
              showService==='Our' && !loading &&
              <>
                <Carousel items={services?services:[]} onClick={()=>setOpen(!open)} handleChange={handleChange} />
                  <Details open={open} handleClose={()=> setOpen(!open)} 
                    title={`${service[`title_${i18n.language}`]}`}
                    description={service[`description_${i18n.language}`]}
                    direction={i18n.dir()}
                    img={`${service["img"]}`}
                    alt={"service"}
                  /> 
              </>
            }

            {
              showService==='Third'&& !loading &&
                <ServiceForm onClick={onClick}/>
            }
          </Grid>
      </Grid>
    </Fade>
  );
}

export default Services;