import {Grid, Typography, Button, Divider, FormControl } from '@mui/material';
import colors from '../../assets/theme/colors/'
import { useTranslation } from 'react-i18next';
import * as React from 'react'
import Input from './Form/Input'
import CodeCountrySelect from './Form/CodeCountrySelect'
import CountrySelect from './Form/CountrySelect'
import ComunicationTypeSelect from './Form/ComunicationTypeSelect'
import SocialNetworksList from './Form/SocialNetworksList'
import { validatePhoneNumber } from '../../helpers/validations';
import { fieldsMandatoryServiceForm } from '../../helpers/data';
import { options } from '../../helpers/data';
import Switch from '../../components/Switch'
import ErrorIcon from '@mui/icons-material/Error';
import { useDispatch } from 'react-redux'
import { registerService } from '../../redux/thunks';
import { useSnackbar } from 'notistack';

const ServiceForm = ({onClick}) => {
  const { t, i18n } = useTranslation();
  const dispatch: Dispatch = useDispatch();
  const [form, setForm] = React.useState({links:[],isSaudi:'لا'});
  const [links, setLinks] = React.useState([]);
  const [errors, setErrors] = React.useState({});
  const [errorMsg, setErrorMsg] = React.useState('');
  const { enqueueSnackbar } = useSnackbar();

  const handleError = (name, value) => {
    setErrors({...errors,[name]:{error:false}});
  }

  const handleChange = (name,value, type) => {
    setErrorMsg('')
    if(type==='tel'&& value!==''){
      if(validatePhoneNumber(value)){
        handleError(name, value)
        setForm({...form, [name]: value});
      }else{

      }
    }
    else if(type==='links'){
      var index = links.findIndex(function(item, i){
        return item.type===name
      });

      if(index===-1){
        setLinks((prev) => [ ...prev, {type:name, value:value}]);
      }else{
        let link = links[index]
        link.value=value
      }
      setForm({...form,links})
    }
    else{
      handleError(name, value)
      setForm({...form, [name]: value});
    }
  };

  const switchHandler = (e, field) => {
    var value = (field,e.target.checked?"نعم":"لا");
    handleChange(field, value);
  };

  const handleClickVariant = (msg, variant) => {
    enqueueSnackbar(msg, { variant });
  };

  const validateFields = () => {
    let errorsFields = {}
    let fieldsToValidate =fieldsMandatoryServiceForm;
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

  const onSubmit= async () =>{
    if(validateFields()){
      setErrorMsg('')
      const result = await dispatch(registerService(form));
      if(!result.error){
        handleClickVariant(t('service.response.200'),'success');
        onClick('root')
      }else{
        handleClickVariant(t('service.response.400'),'error')
      }
    }
    else{
      setErrorMsg("talent.stepper.personalinfo.error")
    }
  }

  
  
  const handleRemove = (value)=>{
    setLinks((prev) => [...prev.filter((i) => i.type !== value)]);
    setForm(prev => {
      const links = prev.links.filter((i) => i.type !== value)
      return {
        ...prev,
        links
      }
    })
  }


  return (
    <Grid container sx={{flexDirection:'row',p:1,justifyContent:'center',width:{md:800}}}>
      <Grid container sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row',minHeight:40}}>
        {errorMsg.length>0 &&
        <>    
          <Typography sx={{color:colors.error,m:1}}> {t(errorMsg)}</Typography>
          <ErrorIcon sx={{color:colors.error,fontSize:17}}/>
        </>
        }
      </Grid>    
      <Grid container sx={{justifyContent:'center'}}>
        <Input error={errors?.firstname?.error} required={true} width={200} label={t('service.form.inputs.firstname')} handleChange={handleChange} name={'firstname'} value={form?.firstname}/>
        <Input error={errors?.fathername?.error} required={true} width={200} label={t('service.form.inputs.fathername')} handleChange={handleChange} name={'fathername'} value={form?.fathername}/>
        <Input error={errors?.lastname?.error} required={true} width={200} label={t('service.form.inputs.lastname')} handleChange={handleChange} name={'lastname'} value={form?.lastname}/>  
      </Grid>


      <Grid container sx={{ display:'flex', m:1,p:0, justifyContent:'center',alignItems:'center'}}>
        <Divider  sx={{width:'70%',height:0}}  />
      </Grid>

      <Grid container sx={{justifyContent:'center'}}>
        <Input error={errors?.companyName?.error} required={true} width={200} label={t('service.form.inputs.companyName')} handleChange={handleChange} name={'companyName'} value={form?.companyName}/>  
        <Input error={errors?.type?.error} required={true} width={200} label={t('service.form.inputs.type')} handleChange={handleChange} name={'type'} value={form?.type}/>
        <FormControl sx={{borderRadius:1,m:1,height:55,width:{xs:'73%',md:200}}} required >
          <CountrySelect label={t("service.form.inputs.companyNationality")} error={errors?.companyNationality?.error} lang={i18n.language} t={t} onChange={handleChange} value={"companyNationality"} defaultValue={form.companyNationality}/>
        </FormControl>
      </Grid>

      <Grid container sx={{justifyContent:{md:'flex-start',xs:'center'},width:{md:650}}}>
        <FormControl sx={{borderRadius:1,m:1,height:55,width:{xs:'73%',md:200}}} required >
          <CountrySelect label={t("service.form.inputs.companyCountry")} error={errors?.companyCountry?.error} lang={i18n.language} t={t} onChange={handleChange} value={"companyCountry"} defaultValue={form.companyCountry}/>
        </FormControl>
        <Input error={errors?.companyCity?.error} required={true} width={200} label={t('service.form.inputs.companyCity')} handleChange={handleChange} name={'companyCity'} value={form?.companyCity}/>  
      </Grid>
  
      <Grid container sx={{justifyContent:'center'}}>
        <Input error={errors?.email?.error} required={true} width={200} label={t('service.form.inputs.email')} handleChange={handleChange} name={'email'} value={form?.email} direction={"ltr"}/>
        <Input error={errors?.website?.error} required={true} width={200} label={t('service.form.inputs.website')} handleChange={handleChange} name={'website'} value={form?.website} direction={"ltr"}/>
        <ComunicationTypeSelect 
          label={t('service.form.inputs.communicationType.title')}
          noneItem={t('talent.stepper.buttons.none')}
          value={form?.communicationtype || ''}
          options={options}
          onChange={handleChange}
          t={t}
        />
      </Grid>

      <Grid container sx={{justifyContent:{md:'flex-start',xs:'center'},width:{md:650}}}>
        <FormControl sx={{borderRadius:1,m:1,height:55,width:{xs:'73%',md:200}}} required >
          <CodeCountrySelect  error={errors?.phoneCode?.error} lang={i18n.language} t={t} onChange={handleChange} value={"phoneCode"} defaultValue={form.phoneCode}/>
        </FormControl>
        <Input error={errors?.phonenumber?.error} direction={'ltr'}required={true} width={200} label={t('service.form.inputs.phonenumber')} type ={'tel'} handleChange={handleChange} name={'phonenumber'} value={form?.phonenumber} preValue={form?.phoneCode}/>
      </Grid>

      <Grid container sx={{justifyContent:{md:'flex-start',xs:'center'},width:{md:650},flexDirection:{xs:'row'}}}>
        <Input 
          handleChange={handleChange}
          required={true}
          name ={"about"} 
          multiline={true}
          width={'98%'}
          error={errors?.about?.error}
          value = {form?.about}
          label={t('service.form.inputs.about')} />
          <Switch label={t("service.form.inputs.isSaudi")} handleChange={switchHandler} field={"isSaudi"} checked={form?.isSaudi==="نعم"}/>
        </Grid>
        <Grid container sx={{justifyContent:'center'}}>
          <SocialNetworksList label={t('service.form.inputs.links')} onChange={handleChange} handleRemove={handleRemove}/>
        </Grid>
        <Button variant="contact" onClick={onSubmit}>
          {t('service.buttons.register')}
        </Button>
    </Grid>
  )
}


export default ServiceForm