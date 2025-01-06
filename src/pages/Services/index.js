import * as React from 'react';
import {Grid, Fade, Typography,Container,Grow, Button} from '@mui/material';
import { fetchServices, fetchFeatures } from '../../redux/thunks';
import { useDispatch } from 'react-redux'
import Carousel from '../../components/Carousel';
import RequestForm from '../../components/Services/RequestForm';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import Details from '../../components/shared/Details';
import { useTranslation } from 'react-i18next';
import colors from '../../assets/theme/colors';
import Loading from '../../components/Loading'

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ServiceCard from '../../components/ServiceCard';

export function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = React.useState(false);

    React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>{
      setTimeout(() => {
        setIntersecting(entry.isIntersecting);
      }, "0");

    }
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

function CustomTabPanel(props) {
  const { children, value, index, checked, ...other } = props;

  return (
    <Grow
    mountOnEnter unmountOnExit
    in={true}
    key={value}
    style={{ transformOrigin: '0 0 0' }}
    {...(checked ? { timeout: 700 } : {})}>
    <div
      style={{color:'black'}}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
    </Grow>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


function Services() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false)
  const [service, setService ] = React.useState({});
  const [se, setSe ] = React.useState({});
  const [services, setServices ] = React.useState([]);
  const [features, setFeatures ] = React.useState([]);
  const [showService, setShowService] = React.useState('Our');
  const [loading, setLoading] = React.useState(false)
  const {t, i18n } = useTranslation();
  const [value, setValue] = React.useState(0);
  const [selected, setSelected] = React.useState(false);
  const [checked, setChecked] = React.useState(true);
  const [allServices, setAllServices ] = React.useState([]);

  const back = ()=>{
    setSelected(true)
    let index = newIndex();
    if(index>-1){
      setSe(services[value].services[index]);
    }
  }




  const next = ()=>{
    setSelected(true)
    let index = newIndex(true);
    if(index>-1){
      setSe(services[value].services[index]);
    }
  }

  const handleChange = (event, newValue) => {
    setSelected(true);
    setValue(newValue);
    setService(services[newValue]);
  };
  

  const newIndex =  (next) => {
    if(services){
      const currentIndex = services[value]?.services?.indexOf(se);
      const newIndex = (next ? currentIndex + 1: currentIndex -1);
      if(next){
        return newIndex<services[value]?.services?.length?newIndex:-1
      }
      return newIndex;
    }

  }


  
  const handleChangee = (value) => {
    setSe(value)
    setOpen(!open)
  }
  const onClick = async (value) =>{
    setShowService(value)
  }


  React.useEffect(() => {
    setLoading(true);
    dispatch(fetchServices()).then((r)=>{
      setAllServices(getAllServices(r.payload));
      setServices(r.payload); 
      if(r.payload)
        setService(r.payload[0]); 
      setLoading(false);
    })

    dispatch(fetchFeatures()).then((r)=>{
      setFeatures(r.payload); 
      setLoading(false);
    });


  }, [dispatch]);

  const ref = React.useRef();
  const isVisible = useIsVisible(ref);

  const getGradient=()=>{

  }

  const scrollToBottom = () => {
    ref?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  React.useEffect(() => {
      const handle = setInterval(() => {
          if(selected===false && isVisible){
            setValue(prevTab => {
              if (prevTab === services.length-1) {
                setService(services[0]);
                return 0;
              }
              let local = prevTab += 1;
              setService(services[local]);
              return local;
          });
          }

      }, 5000);
      return () => {
          clearInterval(handle);  
      };                          
  }, [selected, service, services, isVisible]);


  const getAllServices = (data) =>{


    let result = []
    if(data.length>0){
        data.forEach((c)=>{
          result.push(c.services);
        });
        if(result.length>0){
          return result.flat(1);
        }

    }

    return []
  }

  return (
    <Fade  in={true} mountOnEnter unmountOnExit>
      <Grid item sx={{
        margin:"0px",
        padding:"0px",alignItems:'center',display:'flex',
        width:'80%',flexDirection:{xs:'column',md:'column'}
        }}>
          
          <Grid container sx={{minHeight:"88vh",
            backgroundColor:'transparent',width:'100%',p:0, flexDirection:'column',justifyContent:'center'}}>
            <Typography sx={{
              fontSize:{md:68,xs:28},
              alignSelf:'center',
              width:'100%'
              ,background:`linear-gradient(${i18n.dir()==='rtl'?'to right':'to left'}, rgba(247, 216, 159, 0.0) 0%,rgba(247, 216, 159, 0.2) 80%)`
              ,borderRadius:1,
              mb:1,
              p:1,
              maxWidth:"1600px",
              letterSpacing: i18n.dir()!=='rtl'?'1.3rem':'0px',
              fontWeight:'bold',
              textAlign:'center'}}>
              {t('service.title')}
            </Typography>
            
          </Grid>



            <Grid ref={ref} container sx={{minHeight:"20vh",width:'100%',p:0,justifyContent:'center',flexDirection:'row',marginTop:5,marginBottom:5}}>
            { isVisible &&
              <Grid container sx={{width:'100%',maxWidth:"1600px",minHeight:'200px', flexDirection:'row',backgroundColor:'',justifyContent:"center",pt:0}}>
                <Fade in={true} mountOnEnter unmountOnExit timeout={(200)+800}>
                <Box sx={{ bgcolor: 'transparent',width:"100%",p:0,display:'flex',flexDirection:'column'}}>
                  <Tabs
                      sx={{display:"flex",justifyContent:'center', backgroundColor:"rgba(0,0,0,0.7)",borderRadius:1,width:"100%",alignSelf:'center'
                        ,flexDirection: i18n.dir()!=='ltr'?"row-reverse":'',

                      }}

                      TabScrollButtonProps={{ disabled: false }}
                      value={value}
                      onChange={handleChange}
                      variant="scrollable"
                      scrollButtons="auto"
                      allowScrollButtonsMobile
                      >
                    {!loading && services?.map((c)=>{
                      return <Tab  sx={{fontSize:12
                        
                      }}  label={`${c[`title_${i18n.language}`]}`}  key={c.id} {...a11yProps(c.id)}  />
                    })}

                  </Tabs>
                  <CustomTabPanel sx={{padding:2, zIndex:1}} value={value} index={value} checked={checked}>
                    {!loading &&
                      <div style={{position:"relative", textAlign:'center', color:colors.primary,display:'flex'}}>
                      <img alt="service" className={"img-service"} src={service.img} >
                      </img>
                      
                        <div style={{position:'absolute', top:8, right:i18n.dir()!=='ltr'?16:'', left :i18n.dir()==='ltr'?16:''}}>
                          <Typography sx={{fontSize:40}}>{`${service[`title_${i18n.language}`]}`}</Typography> 
                        </div>
                        <div style={{
                          width:"100%",  
                          position: "absolute",
                          top: "70%",
                          left: "50%",
                          height:'50%',
                          display:'flex',
                          flexDirection:'row',
                          transform: "translate(-50%, -50%)"
                          }}>
                            <Grid sx={{ 
                              overflowY: 'scroll',display:'flex',flexDirection:'row',
                              width:'100%',
                              height:'100%',alignItems:'center',backgroundColor:'rgba(0, 0, 0, 0)'}} >
                              {service?.services?.map((a,i)=>{
                                return(<ServiceCard key={a.id} item={a}t={t} handleChange={()=>handleChangee(a)}  i18n={i18n} i={i} />)
                              })}
                            </Grid>
                        </div>
                      </div>
                    }
                  </CustomTabPanel>
                </Box>
            </Fade>
          </Grid>
          
}


          <Grid sx={{minHeight:"2px",backgroundColor:colors.hover,width:'100%',maxWidth:"1600px",mt:10}}></Grid>
          
          <Grid container sx={{width:'100%',p:0, flexDirection:'column',justifyContent:'flex-end'}}>
            <Typography sx={{
              fontSize:{md:28,xs:22},
              alignSelf:'center',
              width:'100%'
              ,background:`linear-gradient(${i18n.dir()==='rtl'?'to right':'to left'}, rgba(247, 216, 159, 0.0) 0%,rgba(247, 216, 159, 0.2) 80%)`
              ,borderRadius:1,
              mt:1,
              p:1,
              maxWidth:"1600px",
              fontWeight:'bold',
              textAlign:i18n.dir()!=='ltr'?'right':'left'}}>
              {t('feature.title')}
            </Typography>
          </Grid>


          </Grid>

          <Grid container sx={{width:'100%',p:0, flexDirection:'row',justifyContent:'center'}}>
          { 
                features?.map((f,i)=>{

                  return <Box

                  key={f.id}
                  sx={{backgroundColor:'rgba(0,0,0,0)'
                    ,width:'300px',
                    m:2,
                    borderRadius:2,
                    border:'1px solid',
                    borderColor:"rgba(247, 216, 159, 0)",
                    alignItems:'center',
                    display:'flex',
                    flexDirection:'column'

                  }}
                  >
                    <img src={f.img} alt={'feature-img'} className={"img-feature"}/>
                    <Typography sx={{fontSize:13,m:2}}>{`${f[`title_${i18n.language}`]}`}</Typography>
                  </Box>

                })
              }
          
          </Grid>
          <Grid sx={{minHeight:"2px",backgroundColor:colors.hover,width:'100%',maxWidth:"1600px"}}></Grid>
          {
            service.services && 
            <Details fullScreen={true} open={open} handleClose={()=> setOpen(!open)} 
                img={se['img']} 
                title={`${se[`title_${i18n.language}`]}`}
                description={`${se[`description_${i18n.language}`]}`}
                alt={'service'}
                buttons={
                  <Grid sx={{
                    
                    width:'100%',
                    display:'flex',
                    justifyContent:'space-between',
                    flexDirection: i18n.dir()!=='ltr'?"row-reverse":'row',



                  }}>
                  <Button variant="menu"autoFocus  disabled={newIndex()===-1} sx={{display:'flex',height:60,
                        justifyContent:'space-between',flexDirection:'column'}} onClick={()=>{back()}}>
                    {t('talent.stepper.buttons.back')}
                    <ArrowCircleLeftRoundedIcon sx={{color:newIndex()!==-1? colors.primary:colors.hover}} />
                  </Button>
                  <Button variant="menu"autoFocus   disabled={newIndex(true)===-1} sx={{display:'flex',height:60,
                        justifyContent:'space-between',flexDirection:'column-reverse'}} onClick={()=>{next()}}>
                    <ArrowCircleRightRoundedIcon  sx={{color:newIndex(true)!==-1? colors.primary:colors.hover}}/>
                    {t('talent.stepper.buttons.next')}
                  </Button>
                  </Grid>
                }
              />
          }

            <Box


            sx={{backgroundColor:'rgba(200,0,0,0)'
              ,maxWidth:'1600px',
              mt:2,
              mb:2,
              borderRadius:2,
              border:'1px solid',
              borderColor:"rgba(247, 216, 159, 0)",
              alignItems:'center',
              display:'flex',
              flexDirection:'column'

            }}
            >

              <RequestForm services={allServices} onSucesss={scrollToBottom} />
            </Box>

      
      </Grid>
    </Fade>
  );
}

export default Services;