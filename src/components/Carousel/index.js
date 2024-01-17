import * as React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Box, Button, CardActionArea, CardActions, Paper, Typography, CardMedia, CardContent, Card } from '@mui/material';
import { useTranslation } from 'react-i18next';
import colors from '../../assets/theme/colors/'
import CircularProgress from '@mui/material/CircularProgress';
import useWindowDimensions from '../../helpers/useWindowDimensions'

function MyCarousel({items}){

    const { t, i18n } = useTranslation();
    const [loading, setLoading] = React.useState(true);
    const [slides, setSlides] = React.useState([]);
    const [countPerSlide, setCountPerSlide] = React.useState(4);
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
        <Card sx={{maxWidth:500,borderRadius:2,margin:2}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height={400}
              image={props.item.img}
              alt="service_img"
              sx={{borderRadius:2}}
            >
            </CardMedia>
            <Typography sx={{fontSize:30,position:"absolute",bottom:-5,backgroundColor:colors.background,borderRadius:0,width:"100%"}} gutterBottom>
              {`${props.item[`title_${i18n.language}`]}`}
            </Typography>
          </CardActionArea>
        </Card>
      );
    }

    const OneSlide = (props) =>{
      return (
        <Box sx={{width:'100%',justifyContent:'center',flexDirection:'row',display:'flex'}}>
          {
            props.items.map( (item, i) => {  
              return(
                <MyCard key={i} item={item} />
                )
            })
          }
        </Box>
      )
    }

    React.useEffect(()=>{
      setLoading(true);
      if(windowSize[0]<600){
        setCountPerSlide(1);
      }else{
        setCountPerSlide(4);
      }
      if(items.length>0){
        setLoading(false);
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
          <CircularProgress/>
        ) : (
          <Carousel animation={"fade"} 
          navButtonsAlwaysVisible={true}
          navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
            style: {
                backgroundColor: colors.primary,
                color:"black",
            }
        }} 
        navButtonsWrapperProps={{   // Move the buttons to the bottom. Unsetting top here to override default style.
            style: {
                bottom: '0',
                top: 'unset',
            }
        }}
          sx={{
            width:"100%",height:500,
            justifyContent:'center',
            display:'flex',
            flexDirection:'column',
            alignItems:'center'
            }}>
              {
                slides.map(slide => <OneSlide key={slide} items ={slide}/>)
              }
          </Carousel>
        )}
      </Box>
    );
}



export default MyCarousel