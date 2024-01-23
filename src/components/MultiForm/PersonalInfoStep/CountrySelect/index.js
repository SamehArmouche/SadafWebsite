import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {countries} from '../../../../helpers/data';
import colors from '../../../../assets/theme/colors/'
export default function CountrySelect({lang, t}) {
  console.log(lang)
  return (
    <Autocomplete

      sx={{backgroundColor: "rgba(247, 216, 159, 0.1)",
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

      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          {lang==="en"?option.english_name:option.arabic_name}
        </Box>
      )}
      renderInput={(params) => {
        return (
        <TextField
          {...params}
          label={t('talent.stepper.personalinfo.inputs.nacionality')}
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}}
    />
  );
}
