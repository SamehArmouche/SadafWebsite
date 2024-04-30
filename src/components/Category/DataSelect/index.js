import * as React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";
import colors from '../../../assets/theme/colors/'

export default function DataSelect({onChange,key, value, label, options, t, error, backgroundColor}) {

  return (
    <FormControl sx={{borderRadius:1,height:'100%',width:{xs:300,md:250}}} error={error} >
      <InputLabel id="demo-simple-select-helper-label" 
        sx={{height:'100%',display:'flex',width:'100%',
        alignItems:'center',
        top:-16,
        //display:backgroundColor!=='transparent'?'none':'display',
        justifyContent:'center',
        whiteSpace: "unset",
        color: backgroundColor!=='transparent'?'transparent !important':colors.primary,
        fontSize:{xs:13,md:18}
        }}
      >{t(`talent.stepper.category.types.${label}.title`)}</InputLabel>
      <Select
     
        sx={{backgroundColor: backgroundColor,
        svg: {display:"none"},
          height:'100%',
          ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select": {
            color: backgroundColor!=='transparent'?'black':colors.primary,
            padding:0,
            height:"50%",
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            fontSize:{xs:13,md:18},
            whiteSpace: "unset",
          },
          ".css-m7y6qn-MuiSvgIcon-root-MuiSelect-icon":{
            color: colors.primary,
          }
        }}
        value={value}

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
