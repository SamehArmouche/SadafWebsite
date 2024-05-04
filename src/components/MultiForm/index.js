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
import { useLocation, useNavigate } from 'react-router-dom'
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
  fieldsMandatoryCategoryStep, fieldsMandatoryOtherStep,
  fieldsMandatoryActor
 } from '../../helpers/data';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useDispatch } from 'react-redux'
import { useSnackbar } from 'notistack';
import { registerTalent } from '../../redux/thunks';
import colors from '../../assets/theme/colors/'

const MultiForm = () => {
  
  const { t, i18n} = useTranslation();
  const { state } = useLocation();
  const [activeStep, setActiveStep] = useState(0);
  const [error, setError] = useState(false);
  const [errors, setErrors] = useState({});
  const dispatch: Dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate(); 

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
    setError(false)
  };
  
  const validateFields = (step) => {
    let errorsFields = {}
    let fieldsToValidate = formComponents()[step]?.mandatoryFields;
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
        'mandatoryFields': state?.form?.category?.key==='Actor'? fieldsMandatoryActor : fieldsMandatoryOtherStep
      },
    
      {
        'name':'Review',
        'element':<ReviewInfo />
      }
    ];

    return state?.form?.category?.key!=='Actor'? result.filter((e) => e.name!=="BodyInfoStep"):result;   
  }

  const formContent = (step) => { return formComponents()[step]?.element };

  const handleClickVariant = (msg, variant) => {
    enqueueSnackbar(msg, { variant });
  };

  const buildRequestBody = async () =>{
    let result = JSON.parse(JSON.stringify(state.form))
    const buildArray = (array) =>{
      let result = ''
      if(array!==undefined)
        Object.values(array).map((v,i)=>{
          result+=v["value"]+(i<Object.values(array).length-1?' - ':'');
          return result;
        });
      return result
    }
    result.dialects = buildArray(state.form?.dialects);
    result.category = state.form?.category.value;
    result.languages = buildArray(state.form?.languages);
    result.fixnumber =  state.form.fixnumber!==undefined?'+'+state.form.phoneCode+ " " + state.form.fixnumber:'';
    result.phonenumber = '+'+state.form.phoneCode+ " " + state.form.phonenumber;
    result.image1=result.image1?.file;
    result.image2=result.image2?.file;
    result.image3=result.image3?.file;
    result.links=JSON.stringify(result.links);
    result.file=result.file?.file
    return result;
    
  }

  const onRegister = async () => {
    const result = await dispatch(registerTalent({talent:await buildRequestBody(),parentCat:state.form.category.parent}));
    if(!result.error){
      handleClickVariant(t('talent.response.200'),'success');
      navigate('/',
        {
          state:{}
        }
        )
    }else{
      handleClickVariant(t('talent.response.400'),'error')
    }
  }

  return (
    <Box>
      <Typography sx={{display:{md:'none',xs:'auto'},fontSize:16,mt:2}}>
        {t(`talent.stepper.${formComponents()[activeStep]?.name?.toLowerCase()}.title`)}
      </Typography>
      <Box sx={{alignItems:'center',display:'flex',justifyContent:'space-between',width:'100%',mt:{xs:0,md:5}}}>
        { state?.form.category &&
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
                    {t(`talent.stepper.${formComponents()[index]?.name?.toLowerCase()}.title`)}
                  </Typography>
                </StepLabel>
              </Step>
            )}
            
            )}
          </Stepper>
        }

      </Box>
      <Grid container sx={{justifyContent:'center'}}>
        <Grid
          sx={{
            padding: '20px', minHeight:"62vh"}}>
          {formContent(activeStep)}
        </Grid>
        <Grid container sx={{justifyContent:'space-between',width:320}}>
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          variant="menu"
          sx={{display:'flex'}}
          startIcon={i18n.dir()==="ltr"?<ArrowBackIosNewIcon sx={{m:1,width:'17px',opacity:activeStep === 0?0.4:1}}/>:< ArrowForwardIosIcon sx={{m:1,width:'17px',opacity:activeStep === 0?0.4:1}}/>}
        >
          {t('talent.stepper.buttons.back')}
        </Button>
        {activeStep === formComponents().length - 1 ? (
          <Button variant="menu" sx={{backgroundColor:colors.divder,width:100,borderRadius:10}} onClick={onRegister}>
            {t('talent.stepper.buttons.submit')}
          </Button>
        ) : (
          <Button onClick={handleSubmit} variant="menu" endIcon={i18n.dir()==="ltr"?<ArrowForwardIosIcon sx={{m:1,width:'17px'}}/>:<ArrowBackIosNewIcon sx={{m:1,width:'17px'}} />} 
          sx={{display:'flex',alignItems:'center'}}>
          {t('talent.stepper.buttons.next')}
          </Button>
        ) }
        </Grid>
      </Grid>
    </Box>
  )
}

export default MultiForm;