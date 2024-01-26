import {
  TextField
} from "@mui/material";
import colors from '../../assets/theme/colors/'

const Input = ({value, handleChange, label, name, direction}) => {

  return(
    <TextField id="filled-basic" label={label} variant="filled"
    inputProps={{ style: { color: colors.primary }}}
    value={value || ''}
    //error={handleError("companyName")}
    onChange={(e) => handleChange(name,e.target.value)}
    //sx={{backgroundColor:'rgba(247, 216, 159, 0.1)',borderRadius:1,m:1,height:55,maxwidth:300, direction:'ltr',width:{xs:300,md:150}}}
    sx={{backgroundColor:'rgba(247, 216, 159, 0.1)',borderRadius:1,m:1,height:55,width:300, direction:direction}}
    required
    autoComplete='nope'
  />
  )
}

export default Input