import {
  Grid,
  Fade
} from "@mui/material";

import { useLocation } from 'react-router-dom'

const OtherInfoStep = ({
  handleSubmit
}) => {

  const { state } = useLocation();
  return (
    <Fade  in={true} mountOnEnter unmountOnExit>
      <Grid
        container
        sx={{
          height:'100%',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
        }}>
      </Grid>
    </Fade>
  )
}

export default OtherInfoStep