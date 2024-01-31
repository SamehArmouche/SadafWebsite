import {
  Grid,
  Fade,
  Typography
} from "@mui/material";

import Category from '../../Category'
import { useLocation } from 'react-router-dom'
import colors from '../../../assets/theme/colors/';
import {categories} from '../../../helpers/data'


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
            {error && <Typography sx={{color:colors.error}}> {errorMsg} </Typography>}
          </Grid>

          <Grid sx={{display:'flex',width:'100%',flexWrap:'wrap',justifyContent:'center'}}>
          {

          categories.map((c, i)=>{
            return (
              <Category handleSubmit={handleSubmit} key={i} i={i} title={c} currentCat={state?.form?.category}/>
              )
            })
          }
          </Grid>
      </Grid>
    </Fade>
  )
}

export default CategoryStep