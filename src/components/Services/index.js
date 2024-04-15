import {Grid, Typography, Button, Divider, FormControl } from '@mui/material';
import colors from '../../assets/theme/colors/'
import { useTranslation } from 'react-i18next';
import * as React from 'react'
import Input from './Form/Input'
import CodeCountrySelect from './Form/CodeCountrySelect'
import ComunicationTypeSelect from './Form/ComunicationTypeSelect'
import SocialNetworksList from './Form/SocialNetworksList'
import { validatePhoneNumber } from '../../helpers/validations';
import { fieldsMandatoryServiceForm } from '../../helpers/data';
import { options } from '../../helpers/data';
import Switch from '../../components/Switch'
import ErrorIcon from '@mui/icons-material/Error';

const ServiceForm = () => {
  const { t, i18n } = useTranslation();
  const [form, setForm] = React.useState({links:[]});
  const [links, setLinks] = React.useState([]);
  const [errors, setErrors] = React.useState({});
  const [errorMsg, setErrorMsg] = React.useState('');

  const handleError = (name, value) => {
    setErrors({...errors,[name]:{error:false}});
  }

  const handleChange = (name,value, type) => {
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

  const onSubmit= () =>{
    if(validateFields()){
      console.log("ok")
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
    <Grid container sx={{flexDirection:'row',p:2,justifyContent:'center'}}>
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
      </Grid>
  
      <Grid container sx={{justifyContent:'center'}}>
        <Input error={errors?.email?.error} required={true} width={200} label={t('service.form.inputs.email')} handleChange={handleChange} name={'email'} value={form?.email} direction={"ltr"}/>
        <Input error={errors?.website?.error} required={true} width={200} label={t('service.form.inputs.website')} handleChange={handleChange} name={'website'} value={form?.website} direction={"ltr"}/>
      </Grid>

      <Grid container sx={{justifyContent:'center',direction:'ltr'}}>
        <FormControl sx={{borderRadius:1,m:1,height:55,width:{xs:300,md:200}}} required >
          <CodeCountrySelect  error={errors?.phoneCode?.error} lang={i18n.language} t={t} onChange={handleChange} value={"phoneCode"} defaultValue={form.phoneCode}/>
        </FormControl>
        <Input error={errors?.phonenumber?.error} required={true} width={200} label={t('service.form.inputs.phonenumber')} type ={'tel'} handleChange={handleChange} name={'phonenumber'} value={form?.phonenumber} preValue={form?.phoneCode}/>
        <ComunicationTypeSelect 
          label={t('service.form.inputs.communicationType.title')}
          noneItem={t('talent.stepper.buttons.none')}
          value={form?.communicationtype || ''}
          options={options}
          onChange={handleChange}
          t={t}
        />
      </Grid>

      <Grid item sx={{justifyContent:'center',flexDirection:'column',display:'flex',flexWrap: 'wrap'}}>
        <Input 
          handleChange={handleChange}
          required={true}
          name ={"about"} 
          multiline={true}
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