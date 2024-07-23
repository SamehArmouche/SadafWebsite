import {Grid, Fade, CardActionArea, Typography} from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import React from 'react';

export default function ProjectCard({item, handleChange, alt, i18n, i, loadingData}) {

  const [hasImageLoaded, setHasImageLoaded] = React.useState(false)
  
  React.useEffect(() => {
  },[item.img]);

  const onLoad = setTimeout(() => {
    setHasImageLoaded(true)
  }, 600);

  return (
    <Fade  in={true} mountOnEnter unmountOnExit timeout={(200)+50*parseInt(i)}>
      <Grid  item sx={{borderRadius:2,mb:5,mr:2,ml:2}} onClick={()=>handleChange(item)}>
      { (!hasImageLoaded || loadingData) && 
      <div>
        <Skeleton variant="rectangular" height={'170px'} width={'120px'} animation={"wave"} sx={{borderRadius:2,mt:0}} />
        <Skeleton variant="rectangular" height={'15px'} width={'120px'} animation={"wave"} sx={{borderRadius:1,mt:2}} />
      </div>
      }
        <CardActionArea sx={{display:!hasImageLoaded?'none':'',maxWidth:120,height:170}}>
          <img
            src={item.img}
            alt={alt}
            className={"project-img"}
            onLoad={() => onLoad}
          >
          </img>
          <Typography 
            noWrap 
            sx={{
            fontSize:15,
            width:120
            }}>{item[`title_${i18n.language}`]}</Typography>
        </CardActionArea>
      </Grid>
    </Fade>
  )
}
