import {Grid, Fade, CardActionArea, Typography} from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import React from 'react';
import colors from '../../assets/theme/colors';




export default function ServiceCard({item, handleChange, alt, i18n,t, i, loadingData}) {

  const [hasImageLoaded, setHasImageLoaded] = React.useState(false)
  
  React.useEffect(() => {
  },[item.img]);

  const onLoad = setTimeout(() => {
    setHasImageLoaded(true)
  }, 600);

  return (
    <Fade key={i} in={true} mountOnEnter unmountOnExit timeout={(200)+800*parseInt(i)}>
      <CardActionArea sx={{
        borderRadius:2,mr:1,ml:1,
        p:1,
        backgroundColor:"rgba(0,0,0,0.7)",
        width:'20%',
        height:'90%',
        display:'flex',
        border:'1px solid',
        borderColor:colors.hover,
        justifyContent:'space-between',
        paddingTop:3,
        paddingBottom:2,
        paddingRight:2,
        paddingLeft:2,
        flexDirection:'column',
        minWidth:160}} 
        onClick={()=>handleChange()}>
          <Typography 
            textAlign={i18n.dir()==='ltr'?'left':'right'}
            sx={{
            fontSize:12,
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3
            }}>{item[`description_${i18n.language}`]}</Typography>

            <Typography sx={{fontSize:10,pt:1,justifyContent:'flex-end',display:'flex',width:'100%'}}>{t('service.buttons.explore')}</Typography>
      </CardActionArea>
    </Fade>
  )
}
