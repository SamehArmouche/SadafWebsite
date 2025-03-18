import {Grid, Grow, CardActionArea, Typography} from '@mui/material';
import colors from '../../assets/theme/colors';
import Skeleton from '@mui/material/Skeleton';
import React from 'react';

export default function MyCard({item, handleChange, alt, i18n, i, loadingData}) {

  const [hasImageLoaded, setHasImageLoaded] = React.useState(false)
  
  React.useEffect(() => {
  },[item.img]);

  const onLoad = setTimeout(() => {
    setHasImageLoaded(true)
  }, 200);

  return (
    <Grow
      mountOnEnter 
      unmountOnExit
      in={true}
      style={{ transformOrigin: '0 0 0' }}
      {...{ timeout: (i*500) }}
      key={i}>
      <Grid  item sx={{borderRadius:2,m:0.3}} onClick={()=>handleChange(item)}>
      { (!hasImageLoaded || loadingData) && <Skeleton variant="rectangular" height={'200px'} width={'300px'} animation={"wave"} sx={{borderRadius:2}} />}
        <CardActionArea sx={{display:!hasImageLoaded?'none':'',width:375,height:240,borderRadius:1}}>
          <img
            src={item.img}
            alt={alt}
            style={{
              width:'100%',
              height:'100%'
            }}

            onLoad={() => onLoad}
          >
          </img>

          <Grid  
            sx={{
              bottom:10,
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              
              p:2,
              backgroundColor:colors.background,position:"absolute",width:'100%',height:60,
            }}>
            <Typography 
              sx={{
                fontSize:21,
                overflow: "hidden",
                textOverflow: "ellipsis",
                color:'white',
                fontWeight:'bold'
              }} gutterBottom>
              {`${item[`title_${i18n.language}`]}`}
            </Typography>
          </Grid>
        </CardActionArea>
      </Grid>
    </Grow>
  )
}

//          <Skeleton variant="rectangular"height={130} animation="wave" sx={{borderTopLeftRadius:8,borderTopRightRadius:8}} />
