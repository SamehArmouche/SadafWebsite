import * as React from 'react';
import {Checkbox,Chip, FormControl, TextField, Autocomplete, Typography,Grid} from '@mui/material';
import colors from '../../../../assets/theme/colors';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
export default function MultipleSelect({label, lang, t , items, onChange, name, error, currentValue =[]}) {
  
  const [values, setValues] = React.useState([])
  React.useEffect(()=>{
    let result = []
    items.forEach((s)=>{
      let obj = {
        label: s[`title_${lang}`],
        value: s
      }
      result.push(obj)
    })
    setValues(result)
  },[items, lang]);

  return (
    <FormControl sx={{borderRadius:1,m:1,width:{xs:'74%',md:'100%'}}} required
      error={error} >
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
        ListboxProps={{
          className: "myCustomList"
        }}
        options={values.map((option) => option)}
        defaultValue={[]}
        value={currentValue}
        freeSolo
        disableCloseOnSelect
        renderTags={(value, getTagProps) =>
          value?.map((option, index) => (
            <Grid container key ={index} sx={{display:'flex',flexWrap:'wrap',maxWidth:{xs:'160px',md:"93%"}}}>
              <Chip variant="outlined" sx={{backgroundColor:"rgba(247, 216, 159, 0.3)",direction:'ltr',border:0,fontFamily:'Cairo',maxWidth:'200px'}} label={option.value[`title_${lang}`]} {...getTagProps({ index })} />
            </Grid>
          ))
        }
        onChange={(event, value,i,j) => onChange(name, value,i,j) }
        
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              checked={selected}
            />
            <Typography textAlign={lang === 'en'?'left':'right'}>
              {option.label}
            </Typography>
          </li>
        )}

        onInputChange={(event, newInputValue, reason) => {
          if(reason==='clear')
          {
            onChange(name, [])
          }

        }}
        renderInput={(params) => (
          <TextField
            {...params}
            required 
            label={t(label)}
            error={error}
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