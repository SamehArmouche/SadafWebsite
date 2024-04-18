import logoAnimated from "../../assets/logoAnimated.json";
import Lottie from "lottie-react";
import {Grid} from '@mui/material';


const Welcome = () => {
  return(
    <Grid 
      container
      sx={{
        height:'100vh',
        justifyContent:'center',
        alignItems:'center'
      }}>
        <Grid item sx={{
          width:150
        }}>
          <Lottie animationData={logoAnimated} loop={true} />
        </Grid>
    </Grid>
  )
}

export default Welcome