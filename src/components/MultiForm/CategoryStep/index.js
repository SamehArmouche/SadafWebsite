import {
  Grid
} from "@mui/material";

import Category from '../../Category'
import { useLocation } from 'react-router-dom'
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

const CategoryStep = ({
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
        {
         categories.map((c, i)=>{
          return (
            <Category handleSubmit={handleSubmit} i={i} title={c} key={c} currentCat={state.form.category}/>
            )
          })
        }
    </Grid>
  )
}

export default CategoryStep