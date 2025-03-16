import * as React from 'react';
import Carousel from 'react-material-ui-carousel'
import Loading from '../../Loading'
import {Box, CardActionArea, Grow, Grid } from '@mui/material';
import colors from '../../../assets/theme/colors'
import { useIsVisible } from '../../../helpers/usIsInvisible';

function MyCarousel({items}){
    const ref = React.useRef();
    const isVisible = useIsVisible(ref);
    const [loading, setLoading] = React.useState(true);
    const [slides, setSlides] = React.useState([]);
    const [index, setIndex] = React.useState(0);
    const [countPerSlide, setCountPerSlide] = React.useState(5);
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
        <Grow
          mountOnEnter 
          unmountOnExit
          in={true}
          style={{ transformOrigin: '0 0 0' }}
          {...{ timeout: (props.i*500) }}>
          <Grid sx={{backgroundColor:'transparent'}}>
            <CardActionArea onClick= {(()=> window.open(props.item.url, '_blank').focus())} >
            <Grid container
              sx={{
                borderRadius:1,
                backgroundColor:'transparent',
                height:{md:'70px',xs:'30px'},
                width:{md:200,xs:100},
                m:1,
                //filter: 'grayscale(100%)',
                
                content: {
                  xs: `url(${props.item.logo_url})`, //img src from xs up to md
                  md: `url(${props.item.logo_url})`, //img src from xs up to md
                }
              }}
              alt="img-client"
            />
            </CardActionArea>
          </Grid>
        </Grow>
      );
    }

    const OneSlide = (props) =>{
      return (
        <Box sx={{width:'100%',justifyContent:{
          md:props.items.length==1?'center':'space-between',xs:'center'},flexDirection:'row',display:'flex',m:0.5}}>
          {
            isVisible && props.items.map( (item, i) => {  return( <MyCard key={i} i={i} item={item} /> ); })
          }
        </Box>
      )
    }

    React.useEffect(()=>{
      setLoading(true);
      setIndex(0);
      if(windowSize[0]<600){
        setCountPerSlide(3);
      }else{
        setCountPerSlide(5);
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
    },[items, windowSize, countPerSlide, isVisible])

    return (
      <Box ref={ref} sx={{width:{xs:'80%',md:'100%'}}}>
        {loading ? (
          <Loading style={{color: colors.primary}}/>
        ) : (
          <Carousel animation={"fade"} 
            navButtonsAlwaysInvisible={true}
            indicators={slides.length>1}
            index={index}
            autoPlay={true}
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
                  color: 'blue',       // 3
                  opacity:0.5
              }
            }}
            activeIndicatorIconButtonProps={{
              style: {
                  opacity:1
              }
            }}
            sx={{
              width:"100%",
              justifyContent:'center',
              display:'flex',
              flexDirection:'column',
              alignItems:'center'
              }}>
              {
                slides.map(slide => <OneSlide key={slide}  items ={slide}/>)
              }
            </Carousel>
        )}
      </Box>
    );
}



export default MyCarousel