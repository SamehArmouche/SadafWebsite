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
import { fieldsMandatoryPersonalStep, fieldsMandatoryContactStep, fieldsMandatorySkillsStep, steps } from '../../helpers/data'


const MultiForm = () => {
  
  const { t } = useTranslation();
  const { state } = useLocation();
  const [activeStep, setActiveStep] = useState(0);
  const [error, setError] = useState(false);
  const [errors, setErrors] = useState({});
  
  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
    setError(false)
  };
  
  const validateFields = (step) => {
    let errorsFields = {}
    let fieldsToValidate= null;
    if(step===1){
      fieldsToValidate = fieldsMandatoryPersonalStep;
    }
    if(step===2){
      fieldsToValidate = fieldsMandatoryContactStep
    }
    if(step===3){
      fieldsToValidate = fieldsMandatorySkillsStep
    }

    for (let index = 0; index < fieldsToValidate?.length; index++) {
      if(!state.form.hasOwnProperty(fieldsToValidate[index])){
        errorsFields[fieldsToValidate[index]]={error:true}
      }else{
        errorsFields[fieldsToValidate[index]]={error:state.form[fieldsToValidate[index]]?.length<1}
      }
      setErrors({...errors,...errorsFields});
    }

    return !Object.values(errorsFields).some(item => item.error === true);
  }


  const changeStep = () => {
    setError(false)
    switch (activeStep) {
      case 0:
        if(Object.values(state.form).length > 1){
          setActiveStep((prevStep) => prevStep + 1);
        }else{
          setError(true)
        }
        break;

      case 1:

        if(validateFields(0)){
          setActiveStep((prevStep) => prevStep + 1);
        }else{
          setError(true)
        }
        break;

      case 2:

        if(validateFields(0)){
          setActiveStep((prevStep) => prevStep + 1);
        }else{
          setError(true)
        }
        break;
      
      case 3:

        if(validateFields(3)){
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
  }
  
  const handleSubmit = (name,value) =>{
    if(name && value){
      state.form[name]=value
    }
    changeStep();
  }

  const handleError = (name, value) => {
    console.log(value)
    setErrors({...errors,[name]:{error:false}});
  }

  const formContent = (step) => {
    switch(step) {
      case 0:
        return <CategoryStep handleSubmit={handleSubmit} error={error} errorMsg={t("talent.stepper.category.error")}/>;
      case 1:
        return <PersonalInfoStep handleSubmit={handleSubmit} errors={errors} handleError={handleError} error={error} errorMsg={t("talent.stepper.personalinfo.error")} />;
      case 2:
        return <ContactInfoStep handleSubmit={handleSubmit} errors={errors} handleError={handleError} error={error} errorMsg={t("talent.stepper.personalinfo.error")} />;
      case 3:
        return <SkillsLanguagesStep handleSubmit={handleSubmit} errors={errors} handleError={handleError} error={error} errorMsg={t("talent.stepper.personalinfo.error")} />;
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