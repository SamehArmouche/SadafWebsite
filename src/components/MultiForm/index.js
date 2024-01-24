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
import ReviewInfo from './ReviewInfo';
import { useTranslation } from 'react-i18next';

const steps = ['Category','PersonalInfo','ContactInfoStep', 'Review'];

const MultiForm = () => {
  
  const { t } = useTranslation();
  const { state } = useLocation();
  const [activeStep, setActiveStep] = useState(0);

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };



  const handleSubmit = (name,value) =>{
    if(name && value){
      state.form[name]=value

    }
    if (activeStep === steps.length - 1) {
      console.log('last step');
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
  }

  const formContent = (step) => {
    switch(step) {
      case 0:
        return <CategoryStep handleSubmit={handleSubmit} />;
      case 1:
        return <PersonalInfoStep handleSubmit={handleSubmit} />;
      case 2:
        return <ContactInfoStep handleSubmit={handleSubmit} />;
      default:
        return <ReviewInfo />;
    }
  };


  return (
    <Box>
      <Typography sx={{display:{md:'none',xs:'auto'},fontSize:26}}>
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
                <Typography>
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
          item
          xs={12}
          sx={{
            padding: '20px',height:'60vh' }}
        >
          {formContent(activeStep)}
        </Grid>
      </Grid>
    </Box>
  )
}

export default MultiForm;