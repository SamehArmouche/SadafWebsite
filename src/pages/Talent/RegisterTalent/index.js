import * as React from 'react';
import {Box, Grid} from '@mui/material';
import { useLocation } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import MultiForm from '../../../components/MultiForm';

function RegisterTalent() {
  const { state } = useLocation();
  const navigate = useNavigate(); 

  React.useEffect(()=>{
    if(!state?.form?.email){
      navigate("/talents")
    }
  })

  return (
    <Box sx={{minHeight:'72vh',alignItems:'center',justifyContent:'center',display:'flex',flexDirection:{xs:'column',md:'row'}}}>
      <Grid item sx={{p:0,width:{xs:'90%'}}}>
        <MultiForm />
      </Grid>
    </Box>
  );
}

export default RegisterTalent;