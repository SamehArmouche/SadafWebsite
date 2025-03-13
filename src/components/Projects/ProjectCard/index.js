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
  }, 300);

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
      <Grid  item sx={{borderRadius:0,m:0.3}} onClick={()=>handleChange(item)}>
        
      { (!hasImageLoaded || loadingData) && 
      <div>
        <Skeleton variant="rectangular" height={'240px'} width={'375px'} animation={"wave"} sx={{borderRadius:0,mt:0}} />
      </div>
      }
        <CardActionArea 
                onMouseOver={event => play(event)}
                onMouseOut={event => pause(event)}
          sx={{display:!hasImageLoaded?'none':'',width:375,height:240,
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
        <Grid sx={{
          position:'absolute',
            top:'75%',
            zIndex:1,
            margin:1,
            justifyContent:'center',
            flexDirection:'column',
            borderRadius:1,
            backgroundColor:"rgba(0,0,0,0.35)",
        }}>
          <Typography 
            textAlign={i18n.dir()!=='ltr'?'right':'left'}
            
            sx={{
              textOverflow: 'ellipsis',
              paddingRight:1,
              paddingLeft:1,
              display: '-webkit-box',
              WebkitLineClamp: '1',
              color:'white',
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            fontSize:18,
            fontWeight:'bold',
            }}>{item[`title_${i18n.language}`]} </Typography>

          <Typography 
            textAlign={i18n.dir()!=='ltr'?'right':'left'}
            sx={{
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: '1',
              paddingRight:1,
              paddingLeft:1,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              opacity:0.9,
              fontSize:11,
              color:'white',


            }}>{item[`category_${i18n.language}`]} </Typography>
        </Grid>


        </CardActionArea>

      </Grid>
    </Grow>
  )
}
