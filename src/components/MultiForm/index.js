import { useState } from 'react';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Grid,
  Button,
  Typography
} from '@mui/material';
import { useLocation } from 'react-router-dom'
import CategoryStep from './CategoryStep';
import PersonalInfoStep from './PersonalInfoStep';
import ContactInfoStep from './ContactInfoStep';
import SkillsLanguagesStep from './SkillsLanguagesStep';
import BodyInfoStep from './BodyInfoStep';
import OtherInfoStep from './OtherInfoStep';
import ReviewInfo from './ReviewInfo';
import { useTranslation } from 'react-i18next';

const steps = ['Category','PersonalInfo','ContactInfoStep','SkillsLanguagesStep', 'BodyInfoStep','OtherInfoStep', 'Review'];

const MultiForm = () => {
  
  const { t } = useTranslation();
  const { state } = useLocation();
  const [activeStep, setActiveStep] = useState(0);
  const [error, setError] = useState(false);
  const [errors, setErrors] = useState({});
  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };


  
  const validateFields = (step) => {
    let errorsFields = {}
    if(step===2){
      let fieldsToValidate = [
        "phonenumber",
        "fixnumber",
        "phoneCode",
      ]
      let error = false;
      for (let index = 0; index < fieldsToValidate.length; index++) {
        if(!state.form.hasOwnProperty(fieldsToValidate[index])){
          error=true;
          errorsFields[fieldsToValidate[index]]={error:true}

        }else{
          error=true;
          errorsFields[fieldsToValidate[index]]={error:state.form[fieldsToValidate[index]]?.length<1}

        }
      }

      setErrors({...errors,...errorsFields});
  
    }

    return !Object.values(errorsFields).some(item => item.error === true);
  }


  const changeStep = () => {
    //console.log(Object.values(state.form).length)
    switch (activeStep) {
      case 0:

          if(Object.values(state.form).length > 1){
            setActiveStep((prevStep) => prevStep + 1);
          }else{
            setError(true)
          }

        break;
      case 1:

          if(Object.values(state.form).length > 1 && validateFields(1)){
            setActiveStep((prevStep) => prevStep + 1);
          }else{

            setError(true)
          }

        break;
      case 2:

          if(Object.values(state.form).length > 0 && validateFields(2)){
            setActiveStep((prevStep) => prevStep + 1);
          }else{
            setError(true)
          }

        break;
      case 3:

          if(Object.values(state.form).length > 0 && validateFields(3)){
            setActiveStep((prevStep) => prevStep + 1);
          }else{
            setError(true)
          }
        break;
        
      case 4:

          if(Object.values(state.form).length > 0 && validateFields(3)){
            setActiveStep((prevStep) => prevStep + 1);
          }else{
            setError(true)
          }
        break;
      case 5:

        if(Object.values(state.form).length > 0){
          setActiveStep((prevStep) => prevStep + 1);
        }else{
          setError(true)
        }
        break;
      default:
        break;
    }


    /*if(Object.values(state.form).length<20 && !Object.values(state.form).includes("")){
      console.log("error")
    }else{
      if (activeStep === steps.length - 1) {
        console.log('last step');
      } else {
        setActiveStep((prevStep) => prevStep + 1);
      }
    }*/
  }
  const handleSubmit = (name,value) =>{
    if(name && value){
      state.form[name]=value
    }
    changeStep();
  }
  const handleError = (name, value) => {
    setErrors({...errors,[name]:{error:false}});
  }


  const formContent = (step) => {
    switch(step) {
      case 0:
        return <CategoryStep handleSubmit={handleSubmit} />;
      case 1:
        return <PersonalInfoStep handleSubmit={handleSubmit} />;
      case 2:
        return <ContactInfoStep handleSubmit={handleSubmit} errors={errors} handleError={handleError} />;
      case 3:
        return <SkillsLanguagesStep handleSubmit={handleSubmit} />;
      case 4:
        return <BodyInfoStep handleSubmit={handleSubmit} />;
      case 5:
        return <OtherInfoStep handleSubmit={handleSubmit} />;
      default:
        return <ReviewInfo />;
    }
  };


  return (
    <Box>
      <Typography sx={{display:{md:'none',xs:'auto'},fontSize:16,mt:2,mb:4}}>
        {t(`talent.stepper.${steps[activeStep].toLowerCase()}.title`)}
      </Typography>
      <Box sx={{alignItems:'center',display:'flex',justifyContent:'space-between',width:'100%',mt:{xs:0,md:5}}}>
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          variant="menu"
        >
          {t('talent.stepper.buttons.back')}
        </Button>
        <Stepper
          activeStep={activeStep}
          orientation="horizontal"
          sx={{
            display:{xs:'none',md:'flex'},
            width:'100%',
            ".css-paz51n-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed": {
              color: "black"
            }
          }}
        >
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>
                <Typography style={{fontWeight:activeStep===index?'bold':''}}>
                  {t(`talent.stepper.${label.toLowerCase()}.title`)}
                </Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length - 1 ? (
          <Button variant="menu">
            Submit
          </Button>
        ) : (
          <Button onClick={handleSubmit} variant="menu">
          {t('talent.stepper.buttons.next')}
          </Button>
        ) }
      </Box>
      <Grid container sx={{justifyContent:'center'}}>
        <Grid
          
          
          sx={{
            padding: '20px', minHeight:"62vh"}}
        >
          {formContent(activeStep)}
        </Grid>
      </Grid>
    </Box>
  )
}

export default MultiForm;