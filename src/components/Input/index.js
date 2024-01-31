import {
  TextField
} from "@mui/material";
import colors from '../../assets/theme/colors/'
import { validateField } from '../../helpers/validations';
import { useLocation } from 'react-router-dom'

const Input = ({value, handleChange, label, name,mb=1, direction, required, helperText, width=300, multiline=false, type="text"}) => {
  const { state } = useLocation();
  return(
    <TextField id="filled-basic" label={label} variant="filled"
    inputProps={{ style: { color: colors.primary }}}
    value={value || ''}
    helperText={helperText}
    multiline={multiline}
    error={required?validateField(state.form, name):false}
    onChange={(e) => handleChange(name,e.target.value, type)}
    sx={{backgroundColor:'rgba(247, 216, 159, 0.1)',borderRadius:1,mb:mb,mt:1,mr:1,ml:1
    ,minHeight:multiline?null:{height:55},width:type!=='number'?(width!==300?{xs:'85%',md:width}:300):{xs:142,md:width}
    ,direction:direction
    /*,'& label': {
        transformOrigin: "right !important",
        left: "inherit !important",
        right: "1.75rem !important",
        overflow: "unset",
      }*/
    }}
    required={required}
    autoComplete='nope'
  />
  )
}

export default Input