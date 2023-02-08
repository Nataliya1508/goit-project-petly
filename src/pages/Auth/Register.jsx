import React from 'react';
import { Box } from '@chakra-ui/react';
import RegisterForm from 'components/AuthForm/RegisterForm';
import { authBackgroundMobile, authBackgroundLaptop, authBackgroundTablet } from 'media';


const Register = () => {
      
  return (
    <Box as='main' bgImage={{base:authBackgroundMobile, md:authBackgroundTablet, xl:authBackgroundLaptop }} bgPosition='bottom' bgSize='contain' bgRepeat='no-repeat' bgColor='accent.background' h={{base:"calc(100vh - 74px)", md:"calc(100vh - 96px)", xl:"calc(100vh - 88px)"}} pt={{ md:'145px', xl:'26px'}}>
        <RegisterForm />
    </Box>
  )
};

export default Register;
