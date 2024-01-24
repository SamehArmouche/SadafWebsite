import {
  Grid,
  Typography
} from "@mui/material";

import { useLocation } from 'react-router-dom'

const ContactInfoStep = ({
  handleSubmit
}) => {


  const { state } = useLocation();
  return (
    <Grid
      container
      sx={{
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
      }}>

      <Typography>
        {state?.form?.email}
      </Typography>
    </Grid>
  )
}

export default ContactInfoStep