import {Grid, Fade, CardActionArea, Typography} from '@mui/material';
import colors from '../../assets/theme/colors';
import Skeleton from '@mui/material/Skeleton';
import React from 'react';

export default function MyCard({item, handleChange, alt, i18n, i, loadingData}) {

  const [hasImageLoaded, setHasImageLoaded] = React.useState(false)
  
  React.useEffect(() => {
  },[item.img]);

  const onLoad = setTimeout(() => {
    setHasImageLoaded(true)
  }, 800);

  return (
    <Fade  in={true} mountOnEnter unmountOnExit timeout={(200)+50*parseInt(i)}>
      <Grid  item sx={{maxWidth:300,borderRadius:2,margin:2}} onClick={()=>handleChange(item)}>
      { (!hasImageLoaded || loadingData) && <Skeleton variant="rectangular" height={'200px'} width={'300px'} animation={"wave"} sx={{borderRadius:2}} />}
        <CardActionArea sx={{display:!hasImageLoaded?'none':''}}>
          <img
            src={item.img}
            alt={alt}
            className={"img-item"}
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
                textOverflow: "ellipsis" 
              }} gutterBottom>
              {`${item[`title_${i18n.language}`]}`}
            </Typography>
          </Grid>
        </CardActionArea>
      </Grid>
    </Fade>
  )
}

//          <Skeleton variant="rectangular"height={130} animation="wave" sx={{borderTopLeftRadius:8,borderTopRightRadius:8}} />
