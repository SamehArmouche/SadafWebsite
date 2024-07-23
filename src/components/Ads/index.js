import * as React from 'react';
import Carousel from 'react-material-ui-carousel'
import Loading from '../Loading'
import {Box, Grid, CardActionArea, Card, Typography } from '@mui/material';
import colors from '../../assets/theme/colors/'

const items = [
  {img:"https://storage.googleapis.com/sadaf-website-content/projects/project_32.jpg"},
  
  {img:"https://storage.googleapis.com/sadaf-website-content/projects/project_28.jpg"},
  
  {img:"https://storage.googleapis.com/sadaf-website-content/projects/project_23.jpg"},
  
  {img:"https://storage.googleapis.com/sadaf-website-content/projects/project_24.jpg"},
  
  {img:"https://storage.googleapis.com/sadaf-website-content/projects/project_25.jpg"}
]
const Ads = ({i18n, t,  handleChange, type, cat}) =>{
  const perslide= 5
  const [loading, setLoading] = React.useState(true);
  const [slides, setSlides] = React.useState([]);
  const [countPerSlide, setCountPerSlide] = React.useState(perslide);
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
      <Card sx={{borderRadius:2,margin:2,backgroundColor:'transparent',opacity:0.9}} onClick={()=>handleChange(props.item)}>
        <CardActionArea >
          <img
            component="img"
            className="img-ads"
            src={props.item.img}
            alt="ads" 
          >
          </img>
        </CardActionArea>
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
    if(windowSize[0]<700){
      setCountPerSlide(2);
    }else{
      setCountPerSlide(perslide);
    }
    setLoading(false);
    if(items?.length>0){
      const count = Math.ceil(items?.length/countPerSlide)
      const itemsPerSlide = []
      for(let i = 0; i<count ; i++){
        itemsPerSlide.push(items?.slice(0+(i*countPerSlide),countPerSlide+(i*countPerSlide)))
      }
      setSlides(itemsPerSlide)
    }
  },[windowSize, countPerSlide])

  return (
    <Box sx={{width:'100%',maxWidth:780,maxHeight:200,justifyContent:'center'}}>
      {loading ? (
        <Loading style={{color: colors.primary}}/>
      ) : (
        slides?.length > 0 ? 
        <Grid style={{}}>
        <Typography sx={{textAlign:i18n.dir()!=='ltr'?'right':'left',p:1}}>{cat}</Typography>
        <Carousel animation={"slide"} 
          navButtonsAlwaysVisible={true}
          navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
            style: {
                backgroundColor: "transparent",
                width:22,
                height:22,
                opacity:0.4,
                margin:0,
                left:0,
                color:"black",
            }
          }} 
        navButtonsWrapperProps={{   // Move the buttons to the bottom. Unsetting top here to override default style.
          style: {
              bottom: 12,
              display:countPerSlide!==items.length?'block':'none',
              top: 'unset'
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
      indicatorContainerProps={{
          style: {
              marginTop: '0px', // 5
              display:countPerSlide!==items.length?'block':'none'

          }
  
      }}
        sx={{
          width:"100%",
          justifyContent:'center',
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
          top:0
          }}>
            {
              slides.sort( () => .5 - Math.random() ).map(slide => <OneSlide key={slide} items ={slide}/>)
            }
        </Carousel>
        </Grid>
        : null
      )}
    </Box>
  );


}

export default Ads
