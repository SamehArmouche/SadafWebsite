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
    <Box sx={{height:'75.5%',alignItems:'center',justifyContent:'center',display:'flex',flexDirection:{xs:'column',md:'row'}}}>
      <Grid container sx={{margin:0,p:{xs:0,md:0},marginBottom:5 ,justifyContent:'center'}}>
        <Slide direction={i18n.language==="ar"?"left":"right"} in={true}  mountOnEnter unmountOnExit>
          <Grid item sx={{p:0,width:{xs:'90%',md:500}}}>
            <MultiForm />
          </Grid>
        </Slide>
      </Grid>
    </Box>
  );
}

export default RegisterTalent;