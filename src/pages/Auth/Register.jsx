import React from 'react';
import { Box } from '@chakra-ui/react';
import RegisterForm from 'components/AuthForm/RegisterForm';
import { backgroundLaptop, backgroundMobile, backgroundTablet } from 'media';


const Register = () => {
      
  return (
    <Box as='main' bgImage={{base:backgroundMobile, md:backgroundTablet, xl:backgroundLaptop }} bgPosition='bottom' bgSize='contain' bgRepeat='no-repeat' bgColor='accent.background' h='100vh' pt={{ md:'145px', xl:'26px'}}>
        <RegisterForm />
    </Box>
  )
};

export default Register;
