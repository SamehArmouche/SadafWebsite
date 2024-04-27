import * as React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";
import colors from '../../../assets/theme/colors/'

export default function DataSelect({onChange, value, label, options, t, error}) {
  
  return (
    <FormControl sx={{borderRadius:1,height:'100%',width:{xs:300,md:250}}} error={error} >
      <InputLabel id="demo-simple-select-helper-label" 
        sx={{height:'100%',display:'flex',width:'100%',
        alignItems:'center',
        top:-16,
        justifyContent:'center',
        whiteSpace: "unset",
        fontSize:{xs:13,md:18}
        }}
      >{t(`talent.stepper.category.types.${label}.title`)}</InputLabel>
      <Select
     
        sx={{backgroundColor: "rgba(247, 216, 159, 0)",
        svg: {display:"none"},
          height:'100%',
          ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select": {
            color: colors.primary,
          },
          ".css-m7y6qn-MuiSvgIcon-root-MuiSelect-icon":{
            color: colors.primary,
          }
        }}
        value={value || ''}
        onChange={onChange}>
          {
            options.map((o)=>{
              return <MenuItem key={o} value={o}>{t(`talent.stepper.category.types.${label}.sub.${o}`)}</MenuItem>
            })
          }
      </Select>
    </FormControl>
  );
}
