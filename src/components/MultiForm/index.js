import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Grid,
  FormHelperText,
  Button
} from '@mui/material';
import { useLocation } from 'react-router-dom'
import AccountDetails from './AccountDetails';
import ReviewInfo from './ReviewInfo';

const steps = [' Category', 'Review and Submit'];

const MultiForm = () => {
  
  const { state } = useLocation();
  const [activeStep, setActiveStep] = useState(0);

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };



  const handleSubmit = (name,value) =>{
    if(name && value){
      state[name]=value
      if (activeStep === steps.length - 1) {
        console.log('last step');
      } else {
        setActiveStep((prevStep) => prevStep + 1);
      }
    }
  }
  console.log(state)

  const formContent = (step) => {
    switch(step) {
      case 0:
        return <AccountDetails handleSubmit={handleSubmit} />;
      case 1:
        return <ReviewInfo />;
      default:
        return <div>404: Not Found</div>
    }
  };

  return (
    <Box
      sx={{
        backgroundColor:'black',
        minHeight:'65vh'
      }}
    >
      <Stepper
        activeStep={activeStep}
        orientation="horizontal"
        sx={{backgroundColor:'transparent'}}
      >
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel
            >{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{ padding: '20px',height:'60vh' }}
        >
          {formContent(activeStep)}
        </Grid>
        <Grid
          item
          xs={12}
        >
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            Back
          </Button>
          {activeStep === steps.length - 1 ? (
            <Button>
              Submit
            </Button>
          ) : (
            <Button onClick={handleSubmit}>
              Next
            </Button>
          ) }
        </Grid>
      </Grid>
    </Box>
  )
}

export default MultiForm;