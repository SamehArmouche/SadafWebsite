import {Grow, Grid, CardActionArea} from '@mui/material';
import * as React from 'react';
import { useIsVisible } from '../../helpers/usIsInvisible';

const Clients = ({items}) =>{
  const ref = React.useRef();
  const isVisible = useIsVisible(ref);
  
  return(
    <Grid 
    container
    ref={ref}
    sx={{width:'100%',p:0, flexDirection:'row',alignItems:'center',justifyContent:{md:'space-between',xs:'center'}}}>
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
              <Grid key={i} sx={{backgroundColor:'transparent'}}>
                <CardActionArea onClick= {(()=> window.open(p.url, '_blank').focus())} >
                <Grid container
                  sx={{
                    borderRadius:1,
                    backgroundColor:'transparent',
                    height:{md:'70px',xs:'30px'},
                    width:{md:200,xs:100},
                    m:1,
                    //filter: 'grayscale(100%)',
                    
                    content: {
                      xs: `url(${p.logo_url})`, //img src from xs up to md
                      md: `url(${p.logo_url})`, //img src from xs up to md
                    }
                  }}
                  alt="img-client"
                />
              </CardActionArea>
              </Grid>
            </Grow>

          )
        })
      }
    </Grid>
  )
}


export default Clients