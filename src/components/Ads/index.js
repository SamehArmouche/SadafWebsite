import * as React from 'react';
import Carousel from 'react-material-ui-carousel'
import Loading from '../Loading'
import {Box, CardActionArea, Card } from '@mui/material';
import colors from '../../assets/theme/colors/'

const items = [
  {img:"https://variety.com/wp-content/uploads/2020/05/netflix-logo.png"},
  
  {img:"https://static.s3.shahid.mbc.net/rebranding/promo/src/images/ogimage-black.jpg"},
  
  {img:"https://www.thehandbook.com/cdn-cgi/image/width=300,height=300,fit=cover,q=80,format=webp/https://files.thehandbook.com/uploads/2021/02/aauvwng9jzwu3kefl54jzi2n8qbgck12nqcdfgvckejasqs800-c-k-c0x00ffffff-no-rj.jpg"},
  
  {img:"https://vid.alarabiya.net/images/2023/01/29/6c5bb09c-ac03-4208-aaad-5dca112f8fa1/6c5bb09c-ac03-4208-aaad-5dca112f8fa1.jpg?crop=4:3&width=1200"},
  
  {img:"https://argaamplus.s3.amazonaws.com/6a34dc31-fd85-4d73-8643-8575aae16f12.png"}
]
const Ads = ({i18n, t,  handleChange, type}) =>{
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
    <Box sx={{width:'100%',maxHeight:200}}>
      {loading ? (
        <Loading style={{color: colors.primary}}/>
      ) : (
        slides?.length > 0 ? 
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
              slides.map(slide => <OneSlide key={slide} items ={slide}/>)
            }
        </Carousel>
        : null
      )}
    </Box>
  );


}

export default Ads
