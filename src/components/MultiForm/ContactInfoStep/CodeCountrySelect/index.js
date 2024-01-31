import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {countries} from '../../../../helpers/data';

export default function CountrySelect({lang, t, onChange, value, defaultValue}) {
  const getCurrentValue = () =>{
    return countries[countries.findIndex((e)=> { return e.phone_code === defaultValue}) ] || null
  }
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
      ListboxProps={{
        className: "myCustomList"
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
      value={getCurrentValue()}
      autoHighlight
      getOptionLabel={(c) => {return (lang!=="en"?c.arabic_name:c.english_name)}}
      onChange={(event, newValue) => {
        if(newValue)
          onChange(value,newValue.phone_code)
        else
          onChange(value,'')
      }}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          {lang==="en"?option.english_name:option.arabic_name} -  {option.phone_code}
        </Box>
      )}
      renderInput={(params) => {
        return (
        <TextField
          {...params}
          required 
          label={t('talent.stepper.contactinfostep.inputs.phoneCode')}
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password',
          }}
        />
      )}}
    />
  );
}
