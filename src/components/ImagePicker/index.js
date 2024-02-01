

import {
  Button,
  Typography,
  Box,
  Grid
} from "@mui/material";
import ImageIcon from '@mui/icons-material/Image';
import React from 'react';
import { useLocation } from 'react-router-dom'
import colors from '../../assets/theme/colors/'

const ImagePicker = ({label, handleOnChange, image, field, align}) => {
  
  return (
    <Box sx={{backgroundColor:'black',width:300,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',m:2,borderRadius:2}}>
      <Grid item>
        <img
          style={{borderRadius:6,  opacity:image?1:0.4}}
          className="img-upload"
          alt={'default picker'}
          src={image || '/images/default.png' }
        />
      </Grid>
      <input
        color="primary"
        accept="image/*"
        type="file"
        onChange={(e) => handleOnChange(e, field)}
        id={field}
        style={{ display: 'none', }}
      />
      <Grid sx={{width:"100%",display:'flex',height:'100%',justifyContent:'space-between',pr:1,pl:1}}>

      <Typography align={align}>{label}</Typography>
      <label htmlFor={field} style={{height:34}}>
        <Button
          component="span"
          label="Upload imagen"
          sx={{p:0,m:0,justifyContent:'center',display:'flex'}}
    
        >
        <ImageIcon  />
        </Button>
      </label>
      </Grid>
    </Box>
  )
}

export default ImagePicker