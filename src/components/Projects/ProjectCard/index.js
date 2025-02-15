import {Grid, Grow, CardActionArea, Typography} from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import React from 'react';

export default function ProjectCard({item, handleChange, alt, i18n, i, loadingData, t}) {

  const [hasImageLoaded, setHasImageLoaded] = React.useState(false);
  const [played, setPlayed] = React.useState(false);
  const [videoRef] = React.useState(React.createRef());
  React.useEffect(() => {

  },[item.img]);

  const onLoad = setTimeout(() => {
    setHasImageLoaded(true)
  }, 500);

  const play = () =>{
    if (videoRef.current) {
      videoRef.current.play(); // Pausar el video
    }
    setPlayed(true);
  }

  const pause = () =>{
    if (videoRef.current) {
      videoRef.current.pause(); // Pausar el video
    }
    setPlayed(false);
  }

  return (
    <Grow
      mountOnEnter 
      unmountOnExit
      in={true}
      style={{ transformOrigin: '0 0 0' }}
      {...{ timeout: (i*500) }}
      key={i}>
      <Grid  item sx={{borderRadius:0,mb:0.2,mr:0.2,ml:0.2}} onClick={()=>handleChange(item)}>
        
      { (!hasImageLoaded || loadingData) && 
      <div>
        <Skeleton variant="rectangular" height={'140px'} width={'250px'} animation={"wave"} sx={{borderRadius:0,mt:0}} />
        {/*
        <Grid container sx={{justifyContent:'center'}}>
        <Skeleton variant="rectangular" height={'15px'} width={'120px'} animation={"wave"} sx={{
          alignSelf:'center',
          borderRadius:1,mt:2}} />
        </Grid>
        */}
      </div>
      }
        <CardActionArea 
                onMouseOver={event => play(event)}
                onMouseOut={event => pause(event)}
          sx={{display:!hasImageLoaded?'none':'',width:250,height:140,
            zIndex:0
          }}>
          <video 
            ref={videoRef}
            id="project-video"  
            style={{display:!played?'none':'flex'}} 
            key={item.id} playsInline loop muted>
            <source src={item.video_url} type="video/mp4"/>
          </video>

        { !played &&
          <img
            src={item.img}
            alt={alt}
            className={"project-img"}
            onLoad={() => onLoad}>
          </img>
        
        }
        <Grid container sx={{
          position:'absolute',
            top:'40%',
            zIndex:1,
            padding:1,
            justifyContent:'center',
            flexDirection:'column',
        }}>
        <Typography 
            textAlign={i18n.dir()!=='ltr'?'right':'left'}
            sx={{
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: '1',
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              opacity:0.9,
              fontSize:14,

            }}>{item[`client`]}</Typography>
          <Typography 
            textAlign={i18n.dir()!=='ltr'?'right':'left'}
            
            sx={{
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: '1',
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            fontSize:18,
            fontWeight:'bold',
            }}>{item[`title_${i18n.language}`]} </Typography>

            <Typography 
            textAlign={i18n.dir()!=='ltr'?'right':'left'}
            sx={{
            fontSize:12,
            pt:0.4,
            }}>{t('project.buttons.view')} </Typography>
        </Grid>


        </CardActionArea>

      </Grid>
    </Grow>
  )
}
