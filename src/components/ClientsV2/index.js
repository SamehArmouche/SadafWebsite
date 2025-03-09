import {Grow, Grid, CardActionArea} from '@mui/material';
import * as React from 'react';
import { useIsVisible } from '../../helpers/usIsInvisible';
import Carousel from './Carousel';
const Clients = ({items}) =>{
  const ref = React.useRef();
  const isVisible = useIsVisible(ref);
  
  return(
    <Grid 
    container
    ref={ref}
    sx={{width:'100%',p:0, flexDirection:'row',alignItems:'center',justifyContent:{md:'space-between',xs:'center'}}}>
      {
          items && 
          <Carousel items={items}  handleChange={()=>console.log("Here")} />
        
      }
    </Grid>
  )
}


export default Clients