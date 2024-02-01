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
import { fieldsMandatoryPersonalStep, fieldsMandatoryContactStep,
  fieldsMandatorySkillsStep, fieldsMandatoryBodyStep,
  fieldsMandatoryCategoryStep, fieldsMandatoryOtherStep } from '../../helpers/data'


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
    let fieldsToValidate = formComponents()[step].mandatoryFields;
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
    if(validateFields(activeStep)){
      setActiveStep((prevStep) => prevStep + 1);
    }else{
      setError(true)
    }
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


  const formComponents = ()=>{ 
    let result =
    [
      {
        'name':'Category',
        'element': <CategoryStep handleSubmit={handleSubmit} error={error} errorMsg={t("talent.stepper.category.error")}/>,
        'mandatoryFields':fieldsMandatoryCategoryStep
      },
      {
        'name':'PersonalInfo',
        'element': <PersonalInfoStep handleSubmit={handleSubmit} errors={errors} handleError={handleError} error={error} errorMsg={t("talent.stepper.personalinfo.error")} />,
        'mandatoryFields':fieldsMandatoryPersonalStep
      },
      {
        'name':'ContactInfoStep',
        'element': <ContactInfoStep handleSubmit={handleSubmit} errors={errors} handleError={handleError} error={error} errorMsg={t("talent.stepper.personalinfo.error")} />,
        'mandatoryFields':fieldsMandatoryContactStep
      },
      {
        'name':'SkillsLanguagesStep',
        'element':<SkillsLanguagesStep handleSubmit={handleSubmit} errors={errors} handleError={handleError} error={error} errorMsg={t("talent.stepper.personalinfo.error")} />,
        'mandatoryFields':fieldsMandatorySkillsStep
      },
      {
        'name':'BodyInfoStep',
        'element': <BodyInfoStep handleSubmit={handleSubmit} errors={errors} handleError={handleError} error={error} errorMsg={t("talent.stepper.personalinfo.error")} />,
        'mandatoryFields':fieldsMandatoryBodyStep
      },
      {
        'name':'OtherInfoStep',
        'element': <OtherInfoStep handleSubmit={handleSubmit} errors={errors} handleError={handleError} error={error} errorMsg={t("talent.stepper.personalinfo.error")} />,
        'mandatoryFields': fieldsMandatoryOtherStep
      },
    
      {
        'name':'Review',
        'element':<ReviewInfo />
      }
    ];

    return state.form.category!=='Actor'? result.filter((e) => e.name!=="BodyInfoStep"):result;   
  }

  const formContent = (step) => { return formComponents()[step].element };

  return (
    <Box>
      <Typography sx={{display:{md:'none',xs:'auto'},fontSize:16,mt:2,mb:4}}>
        {t(`talent.stepper.${formComponents()[activeStep].name.toLowerCase()}.title`)}
      </Typography>
      <Box sx={{alignItems:'center',display:'flex',justifyContent:'space-between',width:'100%',mt:{xs:0,md:5}}}>
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          variant="menu"
        >
          {t('talent.stepper.buttons.back')}
        </Button>
        { state.form.category &&
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
            {formComponents().map((label, index) => 

            {
              return (
              <Step key={index}>
                <StepLabel>
                  <Typography style={{fontWeight:activeStep===index?'bold':''}}>
                    {t(`talent.stepper.${formComponents()[index]?.name.toLowerCase()}.title`)}
                  </Typography>
                </StepLabel>
              </Step>
            )}
            
            )}
          </Stepper>
        }
        {activeStep === formComponents.length - 1 ? (
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