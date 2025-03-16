import * as React from 'react';
import Carousel from 'react-material-ui-carousel'
import Loading from '../../Loading'
import {Box, CardActionArea, Grow, Grid, Typography } from '@mui/material';
import colors from '../../../assets/theme/colors'
import { useTranslation } from 'react-i18next';
import { useIsVisible } from '../../../helpers/usIsInvisible';

function MyCarousel({items, onClick}){
    const { i18n } = useTranslation();
    const ref = React.useRef();
    const isVisible = useIsVisible(ref);
    const [loading, setLoading] = React.useState(true);
    const [slides, setSlides] = React.useState([]);
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
          {/* <Grid sx={{backgroundColor:'transparent',justifyContent:'center',display:'flex',m:0}}> */}
            <Grid sx={{ justifyContent: 'center', display: 'flex', backgroundColor:'black',m: {md:1,xs:2}}}>
            <CardActionArea sx = {{width:{md:200,xs:130},height:{md:180,xs:150}}} onClick= {onClick} >
              
            <Grid 
              container
              sx={{
                borderRadius:1,
                backgroundColor:'transparent',
                width:'100%',
                height:'100%',
                //height: {md:"120px",xs:"90px"},
                //width:{md:"180px",xs:"90px"},
                //filter: 'grayscale(100%)',
                objectFit:'cover',
                content: {
                  xs: `url(${props.item.img})`, //img src from xs up to md
                  md: `url(${props.item.img})`, //img src from xs up to md
                }
              }}
              alt="img-client"
            />
            <Grid 
              container
              sx={{
                borderRadius:1,
                backgroundColor:'transparent',

                m:1,
                
              }}

            >
                <Typography 
                  sx={{fontSize:13,
                    overflow: 'hidden',
                    color:'white',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: '2',
                    height:'40px',
                    width:{md:"180px",xs:"90px"},
                    WebkitBoxOrient: 'vertical',
                    
                  }} gutterBottom>
                  {`${props.item[`title_${i18n.language}`]} ${props.item[`title_${i18n.language}`]}`}
                </Typography>
                </Grid>
            </CardActionArea>
          </Grid>
        </Grow>
      );
    }

    const OneSlide = (props) =>{
      return (
        <Box sx={{width:'100%',justifyContent:{md:props.items.length==1?'center':'space-between',xs:'center'},flexDirection:'row',display:'flex',m:0.5}}>
          {
            isVisible && props.items.map( (item, i) => {  return( <MyCard key={i} i={i} item={item} /> ); })
          }
        </Box>
      )
    }

    React.useEffect(()=>{
      setLoading(true);
      if(windowSize[0]<600){
        setCountPerSlide(2);
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
      <Box ref={ref} sx={{width:{xs:'100%',md:'100%'}, height:{md:260,xs:260},justifyContent:'center',
      alignItems:'center'}}>
        {loading ? (
          <Loading style={{color: colors.primary}}/>
        ) : (
          <Carousel animation={"slide"} 
            navButtonsAlwaysInvisible={true}
            indicators={slides.length>1}
            index={1}
            autoPlay={true}
            navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
              style: {
                  backgroundColor: "black",
                  color:"black",
              }
            }} 
            navButtonsWrapperProps={{   // Move the buttons to the bottom. Unsetting top here to override default style.
              style: {
                  bottom: 22,
                  top: 'unset',
              }
            }}
            indicatorIconButtonProps={{
              style: {
                  bottom: -30,
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
              height:'100%',
              display:'flex',
              flexDirection:'column',
              alignItems:'center',
              m:0
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