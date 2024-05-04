import {
  Grid,
  Box,
  Divider,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Fade,
  Typography
} from "@mui/material";
import EventIcon from '@mui/icons-material/Event';
import * as React from 'react'
import dayjs from 'dayjs';
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import colors from '../../../assets/theme/colors/'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { styled } from '@mui/material/styles';
import CountrySelect from './CountrySelect'
import Input from '../../Input'
import ErrorIcon from '@mui/icons-material/Error';

const PersonalInfoStep = ({
  handleSubmit,
  error,
  errorMsg,
  errors,
  handleError
}) => {
  const { state } = useLocation();
  const { t, i18n } = useTranslation();
  const [form, setForm] = React.useState(false);

  const handleChange = (name,value) => {
    state.form[name]=value;
    handleError(name, value);
    setForm(!form);
  };
  const CssMobileDatePicker = styled(DatePicker)({
    '& .MuiInput-underline:after': {
      borderBottomColor: '#B2BAC2',
    },
    '& .MuiOutlinedInput-root': {
      backgroundColor: "rgba(247, 216, 159, 0.1)",
      alignItems:"center",
      color:errors?.birthday?.error?colors.error:colors.primary
      
    }
  });

  return (
    <Fade  in={true} mountOnEnter unmountOnExit>
      <Box sx={{ flexGrow: 1, flexWrap: 'wrap'}}>
        <Grid sx={{display:'flex',width:'100%',justifyContent:'center',height:20}}>
          {error && 
            <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
              <Typography sx={{color:colors.error,m:1}}> {errorMsg}</Typography>
              <ErrorIcon sx={{color:colors.error,fontSize:17}}/>
            </Box>
          }
        </Grid>

        <Grid container spacing={0} sx={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
        <Grid item>
          <Input direction={i18n.dir()} width={220} error={errors?.firstname?.error} required={true} handleChange={handleChange} name ={"firstname"} value = {state.form?.firstname} label={t('talent.stepper.personalinfo.inputs.firstname')} />
          <Input direction={i18n.dir()} width={220} error={errors?.fathername?.error} required={true} handleChange={handleChange} name ={"fathername"} value = {state.form?.fathername} label={t('talent.stepper.personalinfo.inputs.fathername')}  />
          <Input direction={i18n.dir()} width={220} error={errors?.lastname?.error} required={true} handleChange={handleChange} name ={"lastname"} value = {state.form?.lastname} label={t('talent.stepper.personalinfo.inputs.lastname')} />
        </Grid>
        <Grid sx={{ display:'flex', m:1, justifyContent:'center'}}>
          <Divider  sx={{width:{xs:'80%',md:'70%'}}}  />
        </Grid>
          <Grid item>
            <FormControl sx={{borderRadius:1,m:1,height:55,width:{xs:'85%',md:153}}} required error={errors?.gender?.error} >
              <InputLabel id="demo-simple-select-helper-label">{t('talent.stepper.personalinfo.inputs.gender.title')}</InputLabel>
              <Select
                sx={{backgroundColor: "rgba(247, 216, 159, 0.1)",
                ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select": {
                  color: colors.primary,
                },
                ".css-m7y6qn-MuiSvgIcon-root-MuiSelect-icon":{
                  color: colors.primary,
                }
              }}
                value={state?.form?.gender || ''}
                onChange={(e)=>handleChange("gender",e.target.value)}>
                  <MenuItem value={"ذكر"}>{t('talent.stepper.personalinfo.inputs.gender.male')}</MenuItem>
                  <MenuItem value={"أنثى"}>{t('talent.stepper.personalinfo.inputs.gender.female')}</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{borderRadius:1,m:1,height:55,width:{xs:'85%',md:250}}} required error={errors?.relationship?.error}>
              <InputLabel id="demo-simple-select-helper-label">{t('talent.stepper.personalinfo.inputs.relationship.title')}</InputLabel>
              <Select
                sx={{backgroundColor: "rgba(247, 216, 159, 0.1)",
                  ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select": {
                    color: colors.primary,
                  },
                  ".css-m7y6qn-MuiSvgIcon-root-MuiSelect-icon":{
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
            <FormControl sx={{borderRadius:1,m:1,height:55,width:{xs:'85%',md:165}}} required>
            <LocalizationProvider dateAdapter={AdapterDayjs} localeText={{okButtonLabel: `${t('button.ok')}`}}>
              <CssMobileDatePicker
                format="DD/MM/YYYY"
                sx={{direction:'ltr'}}
                required
                slotProps ={{
                  textField: {
                    required:true,
                    variant: 'outlined',
                    error: errors?.birthday?.error?errors.birthday.error:false
                  },
                  actionBar: {
                    actions: ['accept']
                  },
                }}
                slots={{
                  openPickerIcon: ()=> <EventIcon sx={{color:errors?.birthday?.error?colors.error:colors.primary}}/>,
                }}


                defaultValue={state?.form?.birthday?dayjs(state?.form?.birthday):null}
                label={t('talent.stepper.personalinfo.inputs.birthday')}
                onChange={(e) => handleChange("birthday",e.format("YYYY-MM-DD"))}
              />
            </LocalizationProvider>
            </FormControl>
          </Grid>

          <Grid item>
            <FormControl sx={{borderRadius:1,m:1,height:55,width:{xs:'85%',md:153}}} required >
              <CountrySelect error={errors?.nationality?.error} lang={i18n.language} t={t} onChange={handleChange} value={"nationality"} defaultValue={state.form.nationality}/>
            </FormControl>
            <FormControl sx={{borderRadius:1,m:1,height:55,width:{xs:'85%',md:250}}} required >
              <CountrySelect error={errors?.country?.error} lang={i18n.language} t={t} onChange={handleChange} value={"country"} defaultValue={state.form.country}/>
            </FormControl>
            <Input direction={i18n.dir()} error={errors?.city?.error} width={165} required={true} handleChange={handleChange} name ={"city"} value = {state.form?.city} label={t('talent.stepper.personalinfo.inputs.address.city')} /> 
          </Grid>
        </Grid> 
      </Box>
    </Fade>
  );
}

export default PersonalInfoStep