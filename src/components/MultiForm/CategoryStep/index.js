import {
  Grid,
  Fade,
  Typography,
  Box
} from "@mui/material";

import Category from '../../Category'
import { useLocation } from 'react-router-dom'
import colors from '../../../assets/theme/colors/';
import {categories} from '../../../helpers/data'
import ErrorIcon from '@mui/icons-material/Error';

const CategoryStep = ({
  handleSubmit,
  error,
  errorMsg
}) => {

  const { state } = useLocation();
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

          categories.map((c, i)=>{
            return (
              <Category handleSubmit={handleSubmit} key={i} i={i} title={c.main} currentCat={state?.form?.category} sub={c.sub}/>
              )
            })
          }
          </Grid>
      </Grid>
    </Fade>
  )
}

export default CategoryStep