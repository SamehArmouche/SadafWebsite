import * as React from 'react';
import {Checkbox,Chip, FormControl, TextField, Autocomplete, Typography} from '@mui/material';
import colors from '../../../../assets/theme/colors/';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
export default function MultipleSelect({label, t , items}) {
  return (
    <FormControl sx={{borderRadius:1,m:1,width:{xs:300,md:250}}} >
      <Autocomplete
        multiple
        sx={{
          backgroundColor: "rgba(247, 216, 159, 0.1)",
          color:'red',
          borderRadius:1,
         
          ".css-817ycr-MuiAutocomplete-root" :{
            color: "red"
          }
        }}
        options={items.map((option) => t(option.label))}
        defaultValue={[]}
        freeSolo
        disableCloseOnSelect
        renderTags={(value, getTagProps) =>
          value?.map((option, index) => (
            <Chip variant="outlined" sx={{backgroundColor:"rgba(247, 216, 159, 0.3)",direction:'ltr',border:0,fontFamily:'Cairo'}} label={option} {...getTagProps({ index })} />
          ))
        }
        onChange={(event, value) => console.log(value)}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              checked={selected}
            />
            <Typography>
              {option}
            </Typography>
          </li>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            required 
            label={t(label)}
            inputProps={{
              sx:{color:colors.primary},
              ...params.inputProps,
              autoComplete: 'new-password',
            }}
          />
        )}
      />
      </FormControl>
  );
}