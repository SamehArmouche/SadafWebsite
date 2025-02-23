import {Grow, Grid} from '@mui/material';
import * as React from 'react';
import { useIsVisible } from '../../helpers/usIsInvisible';

const TopFive = ({items}) =>{
  const ref = React.useRef();
  const isVisible = useIsVisible(ref);
  return(
    <Grid container ref={ref}
      sx={{
        width:'100%',pb:6,direction:'ltr',flexDirection:'row',
        alignItems:'center',justifyContent:{md:'space-between',xs:'center'}
      }}>
      {
        isVisible && items && items.slice(0,5).map((p, i) =>{
        return(
          <Grow
            mountOnEnter 
            unmountOnExit
            in={true}
            style={{ transformOrigin: '0 0 0' }}
            {...{ timeout: (i*500) }}
            key={i}>
            <Grid key={i}  sx={{justifyContent:'center',display:'flex',m:1}}>
              <Grid container
                sx={{
                height: {md:"90px",xs:"60px"},
                width:{md:"60px",xs:"40px"},
                opacity:0.7,
                    content: {
                        xs: `url(/images/numbers/${i+1}.png)`, //img src from xs up to md
                        md: `url(/images/numbers/${i+1}.png)`, //img src from xs up to md
                    }
                }}
                alt="number-logo"/>
              <Grid
                container
                sx={{
                borderRadius:1,
                height: {md:"120px",xs:"70px"},
                width:{md:"120px",xs:"60px"},
                    content: {
                        xs: `url(${p.img})`, //img src from xs up to md
                        md: `url(${p.img})`, //img src from xs up to md
                    }
                }}
                alt="img-project"
              />

            </Grid>
          </Grow>
        )
      })

      }
    </Grid>
  )
}


export default TopFive