

import {
  Typography,
  Box,
  Grid
} from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import React from 'react';
import colors from '../../assets/theme/colors/'

const FilePicker = ({label, handleOnChange, field, align, error, errorMsg, errorEmpty, ext, description}) => {
  
  return (
    <Box sx={{
      boxShadow: `0 1px 6px 1px ${errorEmpty||error?'rgba(207, 87, 87, 0.3)':'transparent'}`,
      backgroundColor:"rgba(247, 216, 159, 0.1)",width:300,display:'flex',
      justifyContent:'center',alignItems:'center',flexDirection:'column',
      m:1,borderRadius:2
      
      }}>
      <label htmlFor={field} style={{display:'flex',justifyContent:'center',flexDirection:'column',width:'100%',height:'100%'}}>
        <input
          color="primary"
          accept=".pdf,.docx,.doc"
          type="file"
          onChange={(e) => handleOnChange(e, field)}
          id={field}
          style={{ display: 'none', }}
        />
        <Grid sx={{width:"100%",display:'flex',height:'100%',justifyContent:'space-between',pr:1,pl:1}}>
          <Grid item sx={{p:1}}>
            <Typography align={align} sx={{fontSize:14}}>{label}</Typography>
            <Typography align={align} sx={{fontSize:11,mt:2}}>{description}</Typography>
            { 
              error && 
              <Typography align={align} sx={{color:colors.error,fontSize:12,mb:1}}>{errorMsg}</Typography>
            }
          </Grid>
        
          <Grid sx={{display:'flex',flexDirection:'column-reverse',mb:1}}>
            <CloudUploadIcon  />
          </Grid>
        </Grid>
      </label>
    </Box>
  )
}

export default FilePicker