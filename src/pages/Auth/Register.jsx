import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';
import AuthForm from 'components/AuthForm/AuthForm';
import StepSwitcher from 'components/AuthForm/StepSwitcher/StepSwitcher';
import { regesterYupSchema } from 'schemas/registerYupSchema';


const Register = () => {
  const path = '/login'
  const [step, setStep] = useState('step1');

  const initialValues = {
    email: "",
    password: "",
    confirm: "",
    name:"",
    city:"",
    mobile:""
  }

  const onSubmit = (values, actions) => {
    alert(JSON.stringify(values, null, 2));
    actions.resetForm();
  }

  const handleNextClick = () => {
    setStep('step2')

  }
  const handleBackClick = () => {
    setStep('step1')
  }
    
  return (
    <Box as='main' bgColor='#FDF7F2' h='100vh'>
      <AuthForm title="Register" path={path} initialValues={initialValues} validationSchema={regesterYupSchema} onSubmit={onSubmit}>
        <StepSwitcher step={step} handleNextClick={handleNextClick} handleBackClick={handleBackClick}/>
        <Box display='flex' justifyContent='center' >
          <Text 
          fontFamily='body' 
          fontSize='12px' 
          fontWeight='normal' 
          lineHeight='1.33' 
          letterSpacing='0.04em' 
          color='rgba(17, 17, 17, 0.6)'
          textAlign='center'
          >
            Already have an account? 
          </Text>
          <Text
          as='u' 
          fontFamily='body' 
          fontSize='12px' 
          fontWeight='normal' 
          lineHeight='1.33' 
          letterSpacing='0.04em' 
          color='#3091EB;'
          textAlign='center'>
            <Link to='/login'>Login</Link>
          </Text>
        </Box>
      </AuthForm>
    </Box>
  )
};

export default Register;
