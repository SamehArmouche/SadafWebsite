import {Grid, Typography, Button, FormControl, Fade, Box } from '@mui/material';
import colors from '../../../assets/theme/colors'
import { useTranslation } from 'react-i18next';
import * as React from 'react'
import Input from './Input'
import CodeCountrySelect from './CodeCountrySelect'
import CountrySelect from './CountrySelect'
import EventIcon from '@mui/icons-material/Event';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import MultipleSelect from './MultipleSelect'
import { validatePhoneNumber, validateEmail } from '../../../helpers/validations';
import { fieldsMandatoryReqServiceForm } from '../../../helpers/data';
import { projectTimeLines, priorityLevels} from '../../../helpers/data';
import dayjs from 'dayjs';
import DataSelect from './DataSelect'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useDispatch } from 'react-redux'
import { requestService } from '../../../redux/thunks';
import { useSnackbar } from 'notistack';
import { styled } from '@mui/material/styles';

const ReuquestForm = ({onSucesss, services}) => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const [form, setForm] = React.useState({services:[]});
  const [errors, setErrors] = React.useState({});
  const [errorMsg, setErrorMsg] = React.useState('');
  const { enqueueSnackbar } = useSnackbar();

  const handleError = (name, value) => {
    setErrors({...errors,[name]:{error:false}});
  }

  const handleChange = (name,value, type, event) => {
    if("services"===name && event){
      //form.services.push(event.option.value.title_en);
      form[name]=value;
      setErrors({...errors,[name]:{error:value.length===0}});
      //setForm({...form, [name]: [form.services.push(event.option.value.title_en)]});
    }else{
      setErrorMsg('')
      if(type==='tel'&& value!==''){
        if(validatePhoneNumber(value)){
          handleError(name, value)
          setForm({...form, [name]: value});
        }else{
  
        }
      }
      else{
        if(type==='email'&& value!==''){
          setForm({...form, [name]: value});
          if(!validateEmail(value)){
            setErrors({...errors,[name]:{error:true}});
          }else{
            setErrors({...errors,[name]:{error:false}});
          }
        }else{
          handleError(name, value)
          setForm({...form, [name]: value});
        }
      }
    }

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



  const handleClickVariant = (msg, variant) => {
    enqueueSnackbar(msg, { variant });
  };

  const validateFields = () => {
    let errorsFields = {}
    let fieldsToValidate = fieldsMandatoryReqServiceForm;
    for (let index = 0; index < fieldsToValidate?.length; index++) {
      if(!form.hasOwnProperty(fieldsToValidate[index])){
        errorsFields[fieldsToValidate[index]]={error:true}
      }else{
        errorsFields[fieldsToValidate[index]]={error:form[fieldsToValidate[index]]?.length<1}
      }
      setErrors({...errors,...errorsFields});
    }
    return !Object.values(errorsFields).some(item => item.error === true);
  }


  const buildArray = (array) =>{
    let result = ''
    if(array!==undefined){
      result+='{'
      Object.values(array).map((v,i)=>{
        result+= (v["value"]!==undefined? v["value"]:v) + (i<Object.values(array).length-1?',':'}');
        return result;
      });
    }else{
      return "{}";
    }

    return result
  }


  const onSubmit= async () =>{
    if(validateFields()){
      setErrorMsg('');
      let requestBody = JSON.parse(JSON.stringify(form));
      let services = []
      form.services.forEach((s)=>{
        services.push(s.value.title_en)
      });
      requestBody.services= buildArray(services);;
      requestBody.phonenumber = form.phonenumber!==undefined?'+'+form.phoneCode+ " " + form.phonenumber:'';
      delete requestBody['phoneCode'];
      const result = await dispatch(requestService(requestBody));
      if(!result.error){
        handleClickVariant(t('service.response.200'),'success');
        onSucesss();
        setForm({services:[]})
      }else{
        handleClickVariant(t('service.response.400'),'error')
      }
    }
    else{
      setErrorMsg("service.form.error")
    }
  }



  return (
    <Fade  in={true} mountOnEnter unmountOnExit>
      <Grid item xs={7} sx={{p:0,justifyContent:'center',alignItems:'center',display:'flex',width:'100%'}}>
        <Box 
        border={1} 
        sx={{
          backgroundColor:'black',
          width:{xs:'100%',md:"500px"},
          mt:3,
          borderColor: 'rgba(247, 216, 159, 0.1)', borderWidth: '0.1em',borderRadius:1,
          alignItems:'center',display:'flex',
          flexDirection:'column',
          p:{xs:1,md:5}
        }}>
          <Typography textAlign={i18n.dir()==="rtl"?"right":"left"} sx={{fontSize:{xs:18,sm:20},m:{xs:4,md:0} ,mb:{xs:4,md:4}}} >
            {t('service.form.requestTitle')}
          </Typography>
          <Grid container sx={{justifyContent:'center'}}>
            <Input error={errors?.fullname?.error} required={true} width={'46.8%'} label={t('service.form.inputs.fullname')} handleChange={handleChange} name={'fullname'} value={form?.fullname}/>
            <Input error={errors?.companyName?.error} required={true} width={'46.8%'} label={t('service.form.inputs.companyName')} handleChange={handleChange} name={'companyName'} value={form?.companyName}/>
          </Grid>

          <Grid container sx={{justifyContent:'center'}}>
          <FormControl sx={{borderRadius:1,m:1,height:55,width:{xs:'73%',md:"46.8%"}}} required >
              <CountrySelect label={t("service.form.inputs.companyCountry")} error={errors?.companyCountry?.error} lang={i18n.language} t={t} onChange={handleChange} value={"companyCountry"} defaultValue={form.companyCountry}/>
            </FormControl>
            <Input error={errors?.companyCity?.error} required={true} width={'46.8%'} label={t('service.form.inputs.companyCity')} handleChange={handleChange} name={'companyCity'} value={form?.companyCity}/>
          </Grid>

          <Grid container sx={{justifyContent:'center'}}>
            <FormControl sx={{borderRadius:1,m:1,height:55,width:{xs:'73%',md:"46.8%"}}} required >
              <CodeCountrySelect  error={errors?.phoneCode?.error} lang={i18n.language} t={t} onChange={handleChange} value={"phoneCode"} defaultValue={form.phoneCode}/>
            </FormControl>
            <Input disabled={false} error={errors?.phonenumber?.error} direction={'ltr'} required={true} width={"46.8%"} label={t('service.form.inputs.phonenumber')} type ={'tel'} handleChange={handleChange} name={'phonenumber'} value={form?.phonenumber} preValue={form?.phoneCode}/>
          </Grid>

          <Grid container sx={{justifyContent:'center'}}>
            <Input error={errors?.email?.error} helperText={errors?.email?.error && form.email ?t('contact.errors.email'):''} type={"email"} required={true} width={"100%"} label={t('service.form.inputs.email')} handleChange={handleChange} name={'email'} value={form?.email} direction={"ltr"}/>
          </Grid>

          <Grid container sx={{justifyContent:'center'}}>
            <MultipleSelect error={errors?.services?.error} t={t} required={true} lang={i18n.language} onChange={handleChange} label={"service.form.inputs.services"} name={"services"}  items={services} currentValue={form.services}/>
          </Grid>

          <Grid container sx={{justifyContent:'center'}}>
            <Input 
              handleChange={handleChange}
              name ={"details"} 
              multiline={true}
              error={errors?.details?.error}
              width={'100%'}
              required={true}
              value = {form?.details}
              label={t('service.form.inputs.details')} />
          </Grid>

          <Grid container sx={{justifyContent:'center'}}>
            <DataSelect error={errors?.timeline?.error} t={t} width='51%' lang={i18n.language} onChange={handleChange} label={t("service.form.inputs.projectTimeLines.title")} value={form.timeline} name={"timeline"}  options={projectTimeLines}/>
            <DataSelect error={errors?.priority?.error} t={t} width='42.6%' lang={i18n.language} onChange={handleChange} label={t("service.form.inputs.priorityLevels.title")} value={form.priority} name={"priority"}  options={priorityLevels}/>
            <FormControl sx={{borderRadius:1,m:1,height:55,width:{xs:'73%',md:"100%"}}} required>
              <LocalizationProvider dateAdapter={AdapterDayjs} localeText={{okButtonLabel: `${t('button.ok')}`}}>
                <CssMobileDatePicker
                  format="DD/MM/YYYY"
                  sx={{direction:'ltr'}}
                  required
                  slotProps ={{
                    textField: {
                      required:true,
                      variant: 'outlined',
                      error: errors?.deadline?.error?errors.deadline.error:false
                    },
                    actionBar: {
                      actions: ['accept']
                    },
                  }}
                  slots={{
                    openPickerIcon: ()=> <EventIcon sx={{color:errors?.deadline?.error?colors.error:colors.primary}}/>,
                  }}
                  defaultValue={form?.deadline?dayjs(form?.deadline):null}
                  label={t('service.form.inputs.deadline')}
                  onChange={(e) => handleChange("deadline",e.format("YYYY-MM-DD"))}
                />
              </LocalizationProvider>
            </FormControl>
          </Grid>
            <Box sx={{height:24,width:'100%',justifyContent:'center',display:'flex'}}>
              {errorMsg &&
              <Typography textAlign={"left"} sx={{fontSize:{xs:14,sm:16,color:colors.error}}} >
                {t('service.form.error')}
              </Typography>
              }
            </Box>
            <Button variant="contact" onClick={onSubmit}>
              {t('service.buttons.request')}
            </Button>
        </Box>
      </Grid>
    </Fade>
  )
}


export default ReuquestForm