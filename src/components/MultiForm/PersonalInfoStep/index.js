import {
  Grid,
  Box,
  TextField,
  Divider,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
} from "@mui/material";
import * as React from 'react'
import dayjs from 'dayjs';
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import colors from '../../../assets/theme/colors/'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { styled } from '@mui/material/styles';

const CssMobileDatePicker = styled(DatePicker)({
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    backgroundColor: "rgba(247, 216, 159, 0.1)",
    width:160,
    alignItems:"center",
    color:colors.primary
  }
});

const PersonalInfoStep = ({
  handleSubmit
}) => {
  const { state } = useLocation();
  const { t } = useTranslation();
  const [form, setForm] = React.useState(false);

  const handleChange = (name,value) => {
    state.form[name]=value;
    setForm(!form);
  };


  return (
    <Grid
      sx={{
        height:'100%',
        justifyContent:'center',
        flexWrap: 'wrap',
        
      }}>

        <TextField id="filled-basic" label={t('talent.stepper.personalinfo.inputs.firstname')} variant="filled"
          inputProps={{ style: { color: colors.primary } }}
          value={state.form?.firstname || ''}
          //error={handleError("companyName")}
          onChange={(e) => handleChange("firstname",e.target.value)}
          sx={{backgroundColor:'rgba(247, 216, 159, 0.1)',borderRadius:1, m:1,height:55,width:300}}
          required
          autoComplete='nope'
        />
        <TextField id="filled-basic" label={t('talent.stepper.personalinfo.inputs.fathername')} variant="filled"
          inputProps={{ style: { color: colors.primary } }}
          value={state.form?.fathername || ''}
          //error={handleError("companyName")}
          onChange={(e) => handleChange("fathername",e.target.value)}
          sx={{backgroundColor:'rgba(247, 216, 159, 0.1)',borderRadius:1, m:1,height:55,width:300}}
          required
          autoComplete='nope'
        />
        <TextField id="filled-basic" label={t('talent.stepper.personalinfo.inputs.lastname')} variant="filled"
          inputProps={{ style: { color: colors.primary } }}
          value={state.form?.lastname || ''}
          //error={handleError("companyName")}
          onChange={(e) => handleChange("lastname",e.target.value)}
          sx={{backgroundColor:'rgba(247, 216, 159, 0.1)',borderRadius:1, m:1,height:55,width:300}}
          required
          autoComplete='nope'
        />
        <Box sx={{
          height:'1%',
          display:'flex',
          mt:1.5,
          justifyContent:'center',
        }}>
          <Divider  sx={{width:{xs:'80%',md:'70%'},height:'1%'}}  />
        </Box>
        <Box sx={{          display: 'flex',
          flexWrap: 'wrap',
          p: 1,
          m: 1,
          justifyContent:'center'
        }}
        >
          <FormControl sx={{ m: 1, minWidth: 120 }} required >
            <InputLabel id="demo-simple-select-helper-label">{t('talent.stepper.personalinfo.inputs.gender.title')}</InputLabel>
            <Select
              sx={{backgroundColor: "rgba(247, 216, 159, 0.1)",
                ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select": {
                  color: colors.primary,
                }
              }}
              value={state?.form?.gender || ''}
              onChange={(e)=>handleChange("gender",e.target.value)}>
                <MenuItem value={"ذكر"}>{t('talent.stepper.personalinfo.inputs.gender.male')}</MenuItem>
                <MenuItem value={"أنثى"}>{t('talent.stepper.personalinfo.inputs.gender.female')}</MenuItem>
            </Select>
          </FormControl>
          <LocalizationProvider dateAdapter={AdapterDayjs} localeText={{okButtonLabel: `${t('button.ok')}`}}>
            <CssMobileDatePicker
              format="DD/MM/YYYY"
              sx={{marginTop:1,direction:'ltr'}}
              slotProps ={{
                textField: {
                  required: true,
                },
                actionBar: {
                  actions: ['accept']
                },
              }}
              defaultValue={dayjs(state?.form?.birthday)}
              label={t('talent.stepper.personalinfo.inputs.birthday')}
              onChange={(e) => handleChange("birthday",e.format("YYYY-MM-DD"))}
            />
          </LocalizationProvider>
          <FormControl sx={{ mt: 1, minWidth: 180}} required >
            <InputLabel id="demo-simple-select-helper-label">{t('talent.stepper.personalinfo.inputs.relationship.title')}</InputLabel>
            <Select
              sx={{backgroundColor: "rgba(247, 216, 159, 0.1)",
                ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select": {
                  color: colors.primary,
                }
              }}
              value={state?.form?.relationship || ''}
              onChange={(e)=>handleChange("relationship",e.target.value)}>
                <MenuItem value={"أعزب"}>{t('talent.stepper.personalinfo.inputs.relationship.single')}</MenuItem>
                <MenuItem value={"متزوج"}>{t('talent.stepper.personalinfo.inputs.relationship.married')}</MenuItem>
                <MenuItem value={"مطلق"}>{t('talent.stepper.personalinfo.inputs.relationship.divorced')}</MenuItem>
                <MenuItem value={"أرمل"}>{t('talent.stepper.personalinfo.inputs.relationship.widowed')}</MenuItem>
            </Select>
          </FormControl>
        </Box>
    </Grid>
  )
}

export default PersonalInfoStep