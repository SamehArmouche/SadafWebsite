import * as React from 'react';
import Carousel from 'react-material-ui-carousel'
import Loading from '../Loading'
import {Box, CardActionArea, Typography, CardMedia, Card, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import colors from '../../assets/theme/colors/'

function MyCarousel({items, type, handleChange}){

    const { t, i18n } = useTranslation();
    const [loading, setLoading] = React.useState(true);
    const [slides, setSlides] = React.useState([]);
    const [countPerSlide, setCountPerSlide] = React.useState(3);
    const [windowSize, setWindowSize] = React.useState([
      window.innerWidth,
      window.innerHeight,
    ]);
  
    React.useEffect(() => {
      const handleWindowResize = () => {
        setWindowSize([window.innerWidth, window.innerHeight]);
      };
  
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);

    const MyCard = (props) => {
      return (
        <Card sx={{width:"410px",borderRadius:2,margin:2,backgroundColor:'black'}} onClick={()=>handleChange(props.item)}>
          { props.item.img ? 
            <CardActionArea>
              <img
                component="img"
                className='img-service'
                src={props.item.img}
                alt="service_img"
                sx={{borderRadius:2}}
              >
              </img>
              <Grid
              
              sx={{
                backgroundColor:colors.background,
                borderRadius:0,
                width:"100%",height:80,
                justifyContent:'center',
                display:'flex',
                alignItems:'center',
              }}
              
              >
                <Typography 
                  sx={{fontSize:22,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: '2',
                    WebkitBoxOrient: 'vertical',
                    
                  }} gutterBottom>
                  {`${props.item[`title_${i18n.language}`]}`}
                </Typography>
              </Grid>

            </CardActionArea>
          :
          <CardActionArea>
            <Box sx={{width:200,height:200 ,backgroundColor:'black',borderRadius:2}}>
              <Typography sx={{fontSize:40,position:"absolute",top:20,backgroundColor:colors.background,borderRadius:0,width:"100%"}} gutterBottom>
                  {`+ ${props.item[`count`]}`}
              </Typography>
              <Typography sx={{fontSize:20,position:"absolute",bottom:20,backgroundColor:colors.background,borderRadius:0,width:"100%"}} gutterBottom>
                {`${props.item[`title_${i18n.language}`]}`}
              </Typography>
            </Box>
          </CardActionArea>  
        }
        </Card>
      );
    }

    const OneSlide = (props) =>{
      return (
        <Box sx={{width:'100%',justifyContent:'center',flexDirection:'row',display:'flex'}}>
          {
            props.items.map( (item, i) => {  return( <MyCard key={i} item={item} /> ); })
          }
        </Box>
      )
    }

    React.useEffect(()=>{
      setLoading(true);
      if(windowSize[0]<600){
        setCountPerSlide(1);
      }else{
        setCountPerSlide(3);
      }
      setLoading(false);
      if(items.length>0){
        const count = Math.ceil(items.length/countPerSlide)
        const itemsPerSlide = []
        for(let i = 0; i<count ; i++){
          itemsPerSlide.push(items.slice(0+(i*countPerSlide),countPerSlide+(i*countPerSlide)))
        }
        setSlides(itemsPerSlide)
      }
    },[items, windowSize, countPerSlide])

    return (
      <Box sx={{width:{xs:'100%',md:'90%'}}}>
        {loading ? (
          <Loading style={{color: colors.primary}}/>
        ) : (
          slides.length > 0 ? 
          <Carousel animation={"fade"} 
            navButtonsAlwaysVisible={true}
            navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
              style: {
                  backgroundColor: "black",
                  color:"black",
              }
            }} 
            navButtonsWrapperProps={{   // Move the buttons to the bottom. Unsetting top here to override default style.
              style: {
                  bottom: 20,
                  top: 'unset',
              }
            }}
            indicatorIconButtonProps={{
              style: {
                  padding: '1px',    // 1
                  color: 'blue'       // 3
                  ,opacity:0.5
              }
            }}
            activeIndicatorIconButtonProps={{
              style: {
                  opacity:1
              }
            }}
            sx={{
              width:"100%",height:type==="success"?250:350,
              justifyContent:'center',
              display:'flex',
              flexDirection:'column',
              alignItems:'center'
              }}>
              {
                slides.map(slide => <OneSlide key={slide} items ={slide}/>)
              }
            </Carousel>
          : <Typography>{t('construction')}</Typography>
        )}
      </Box>
    );
}



export default MyCarousel