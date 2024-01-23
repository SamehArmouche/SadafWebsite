import {
  Grid,
  Box,
  Typography
} from "@mui/material";
import { useLocation } from 'react-router-dom'
import Category from '../../Category'

const categories = [
  "Actor",
  "Scriptwriter",
  "Montage",
  "Photography",
  "TV Director",
  "Music",
  "Model",
  "VFX graphics",
  "Interior design",
  "Other"
]

const PersonalInfoStep = ({
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
        alignItems:'center'
      }}>
        {/*
         categories.map((c, i)=>{
          return (
            <Category handleSubmit={handleSubmit} i={i} title={c} key={c}/>
            )
          })*/
        }
        <Typography>
        {state.form.category}
        </Typography>
        
    
    </Grid>
  )
}

export default PersonalInfoStep