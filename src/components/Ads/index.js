import {Box, Typography, Grid, Slide, Button} from '@mui/material';



const images = [
  {img:"https://variety.com/wp-content/uploads/2020/05/netflix-logo.png"},
  
  {img:"https://static.s3.shahid.mbc.net/rebranding/promo/src/images/ogimage-black.jpg"},
  
  {img:"https://www.thehandbook.com/cdn-cgi/image/width=300,height=300,fit=cover,q=80,format=webp/https://files.thehandbook.com/uploads/2021/02/aauvwng9jzwu3kefl54jzi2n8qbgck12nqcdfgvckejasqs800-c-k-c0x00ffffff-no-rj.jpg"},
  
  {img:"https://vid.alarabiya.net/images/2023/01/29/6c5bb09c-ac03-4208-aaad-5dca112f8fa1/6c5bb09c-ac03-4208-aaad-5dca112f8fa1.jpg?crop=4:3&width=1200"},
  
  {img:"https://argaamplus.s3.amazonaws.com/6a34dc31-fd85-4d73-8643-8575aae16f12.png"}
]
const Ads = ({i18n, t}) =>{


  return(
    <Box 
    sx={{backgroundColor:'rgba(0,0,0,0)',
    display:'flex',alignItems:"center",width:'100%',
    height:100,m:0,borderRadius:2,
    justifyContent:'center'
    
    }}>
  <Grid sx={{ overflowY: 'scroll',display:'flex',flexDirection:'row',minHeight:100,alignItems:'center',backgroundColor:'rgba(10, 10, 10, 0)'}} >
  {
    images.map((i,e)=>{

        return (
          <Grid key = {e} 
          sx={{mr:2,ml:2,backgroundColor:'grey',borderRadius:2,display:'flex',height:'100%',
          boxShadow:'0px 0px 9px rgba(247, 216, 159, 0.1)',
        }}
            /*onClick={()=> {
              setActualImg(i.img)
            }}*/
          >
          <img
            src={i.img}
            alt={"alt"}
            className={"img-sub"}

          >
          </img>
          </Grid>
        )
    })
  }
  </Grid>
  </Box>
  )

}

export default Ads



/**
 *     <Box 
      sx={{backgroundColor:'rgba(0,0,0,0.2)',
      display:'flex',justifyContent:'center',
      alignItems:"center",width:'100%',
      height:100,m:0,borderRadius:2,
      
      }}>
      <Typography sx={{fontSize:{xs:18,md:25}}}>
        {"Ads"}
      </Typography>
  </Box>
 */