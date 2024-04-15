import {
  TextField,
  Typography
} from "@mui/material";
import colors from '../../../../assets/theme/colors/'
import { validateOneField } from '../../../../helpers/validations';
import InputAdornment from '@mui/material/InputAdornment';

const Input = ({value, handleChange, label, name, mb=1,
  error, direction, required, helperText,
  width=300, multiline=false, type="text", preValue
}) => {

  return (
    <TextField id="filled-basic" label={label} variant="filled"
    inputProps={{ style: { color: colors.primary }}}
    value={value || ''}
    helperText={helperText}
    multiline={multiline}
    error={required?validateOneField(value, type) || error:false}
    onChange={(e) => handleChange(name,e.target.value, type)}
    sx={{backgroundColor:'rgba(247, 216, 159, 0.1)',borderRadius:1,mb:mb,mt:1,mr:1,ml:1
    ,minHeight:multiline?null:{height:55},width:type!=='number'?(width!==300?{xs:'73%',md:width}:300):{xs:142,md:width}
    ,direction:direction
    /*,'& label': {
        transformOrigin: "right !important",
        left: "inherit !important",
        right: "1.75rem !important",
        overflow: "unset",
      }*/
    }}
    InputProps={{
      startAdornment: (
        preValue?
        <InputAdornment position="start">
          <Typography>
            {preValue}
          </Typography>
        </InputAdornment>
        :
        null
      ),
    }}
    required={required}
    autoComplete='nope'>
    </TextField>
  )

}

export default Input

