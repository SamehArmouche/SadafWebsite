import {
  Grid,
  Fade,
  Typography,
  Box
} from "@mui/material";

import Category from '../../Category'
import { useLocation } from 'react-router-dom'
import colors from '../../../assets/theme/colors/';
import ErrorIcon from '@mui/icons-material/Error';
import * as React from 'react';

const CategoryStep = ({
  handleSubmit,
  error,
  errorMsg
}) => {

  const [form, setForm] = React.useState(false);
  const { state } = useLocation();

  const handleChange = (name,value) => {
    state.form[name]=value;
    setForm(!form);
  };

  return (
    <Fade  in={true} mountOnEnter unmountOnExit>
      <Grid
        container
        sx={{
          height:'100%',
          display:'flex',
          width:'100%',
          justifyContent:'flex-start',
          alignItems:'center',
          flexDirection:'column'
        }}>
          <Grid sx={{display:'flex',width:'100%',justifyContent:'center',height:40}}>
            {error && 
              <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                <Typography sx={{color:colors.error,m:1}}> {errorMsg}</Typography>
                <ErrorIcon sx={{color:colors.error,fontSize:17}}/>
              </Box>
            }
          </Grid>

          <Grid sx={{display:'flex',width:'100%',flexWrap:'wrap',justifyContent:'center'}}>
          {

          state.categories?.map((c, i)=>{
            return (
              <Category handleSubmit={handleSubmit} key={i} i={i} title={c.name} currentCat={state?.form?.category} sub={c.sub_categroies} handleChange={handleChange}/>
              )
            })
          }
          </Grid>
      </Grid>
    </Fade>
  )
}

export default CategoryStep