import {
  Grid,
  Box,
  Typography
} from "@mui/material";

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
  "Interior design"
]

const AccountDetails = ({
  handleSubmit
}) => {

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
            <Category handleSubmit={handleSubmit} i={i} title={c} key={c}/>
            )
          })
        }
    
    </Grid>
  )
}

export default AccountDetails