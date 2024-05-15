import * as React from 'react';
import {
  FormControl,
  Select,
  MenuItem,
  Typography,
  Box
} from "@mui/material";
import colors from '../../../assets/theme/colors/'
import { useState } from 'react';

export default function DataSelect({onChange,key, value, label, options, t, error, backgroundColor}) {

  const [open, setOpen] = useState(false);
  return (
    <FormControl sx={{borderRadius:1,height:'100%',width:'100%'}} error={error} >
      <Box id="demo-simple-select-helper-label" 
        sx={{height:'100%',
        width:'100%',
        alignItems:'center',
        borderTopLeftRadius:6,
        borderTopRightRadius:6,
        top:-16,
        display:'flex',//backgroundColor!=='transparent'?'none':'flex',
        justifyContent:'center',
        whiteSpace: "unset",
        color: backgroundColor!=='transparent'?'black':colors.primary,
        backgroundColor:backgroundColor,
        fontSize:{xs:backgroundColor!=='transparent'?11:14,md:backgroundColor!=='transparent'?14:18}
        }}
        onClick={()=>{setOpen(!open)}}
      >{t(`talent.stepper.category.types.${label}.title`)}</Box>
      <Select
      open={open}
      onClose={()=>setOpen(!open)}
        sx={{backgroundColor: backgroundColor,
          display:'flex',
          height:value?.key?'100%':0,
          opacity:value?.key?1:0,
        svg: {display:"none"},
          ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select": {
            color: backgroundColor!=='transparent'?'black':colors.primary,
            p:0,
            alignItems:'center',
            justifyContent:'center',
            fontSize:{xs:14,md:18},
            whiteSpace: "unset",

          },
          ".css-m7y6qn-MuiSvgIcon-root-MuiSelect-icon":{
            color: colors.primary,
          }
        }}
        onClick={()=>setOpen(!open)}
        value={value}
        renderValue={(p) => {
          return (
            <Typography 
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: '2',
              WebkitBoxOrient: 'vertical',
              fontSize:{xs:13,md:18},
              color: backgroundColor!=='transparent'?'black':colors.primary,
           }}
            >
              {t(`talent.stepper.category.types.${label}.sub.${p.key}`)}
              
            </Typography>
          )
        }}
        //inputProps={{ sx: { display:'flex',backgroundColor:'red',noWrap:'wrap',overFlow:'hidden'} }}
        onChange={onChange}>
          {
            options.map((o)=>{
              return <MenuItem key={o.key} value={o}>{t(`talent.stepper.category.types.${label}.sub.${o.key}`)}</MenuItem>
            })
          }
      </Select>
    </FormControl>
  );
}