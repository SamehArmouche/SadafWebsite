import * as React from 'react';
import {Box, Typography, Grid, Slide, Button, TextField} from '@mui/material';
import { useTranslation } from 'react-i18next';
import colors from '../../../assets/theme/colors';
import { useLocation } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import MultiForm from '../../../components/MultiForm';

function RegisterTalent() {
  const { t, i18n } = useTranslation();
  const [ error, setError ] = React.useState(false);
  const { state } = useLocation();
  const navigate = useNavigate(); 

  React.useEffect(()=>{
    if(!state?.form?.email){
      navigate("/talents")
    }
  })

  return (
    <Box sx={{height:'75%',alignItems:'center',justifyContent:'center',display:'flex',flexDirection:{xs:'column',md:'row'}}}>
      <Grid item sx={{p:0,width:{xs:'90%'}}}>
        <MultiForm />
      </Grid>
    </Box>
  );
}

export default RegisterTalent;