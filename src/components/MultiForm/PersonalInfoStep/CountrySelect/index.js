import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {countries} from '../../../../helpers/data';

export default function CountrySelect({lang, t, onChange, value}) {
  
  return (
    <Autocomplete
      sx={{
        backgroundColor: "rgba(247, 216, 159, 0.1)",
        color:'red',
        borderRadius:1,
        ".css-817ycr-MuiAutocomplete-root" :{
          color: "red"
        }
      }}
      slotProps ={{
        textField: {
          required: false,
          error:false
        },
        actionBar: {
          actions: ['accept']
        },
      }}
      options={countries}
      autoHighlight
      getOptionLabel={(c) => {return (lang!=="en"?c.arabic_name:c.english_name)}}
      onChange={(event, newValue) => {
        if(newValue)
          onChange(value,newValue.arabic_name)
      }}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          {lang==="en"?option.english_name:option.arabic_name}
        </Box>
      )}
      renderInput={(params) => {
        return (
        <TextField
          {...params}
          label={value==="nacionality"?t('talent.stepper.personalinfo.inputs.nacionality'):t('talent.stepper.personalinfo.inputs.address.country')}
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password',
          }}
        />
      )}}
    />
  );
}
