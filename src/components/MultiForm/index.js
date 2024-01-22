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
        return <div></div>
    }
  };

  return (
    <Box>
      <Box style={{alignItems:'center',display:'flex',justifyContent:'space-between',width:'100%',marginTop:40}}>
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          variant="menu"
        >
          Back
        </Button>
        <Stepper
          activeStep={activeStep}
          orientation="horizontal"
          sx={{
            display:{xs:'none',md:'flex'},
            width:'100%'
          }}
        >
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>
                <Typography>
                  {label}
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
            Next
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