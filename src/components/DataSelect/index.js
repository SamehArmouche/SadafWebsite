import * as React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";
import colors from '../../assets/theme/colors/'

export default function DataSelect({onChange, value, label, options, t}) {
  
  return (
    <FormControl sx={{borderRadius:1,m:1,height:55,width:{xs:300,md:250}}} required >
      <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
      <Select
        sx={{backgroundColor: "rgba(247, 216, 159, 0.1)",
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
              return <MenuItem key={o.value} value={o.value}>{t(o.label)}</MenuItem>
            })
          }
      </Select>
    </FormControl>
  );
}
