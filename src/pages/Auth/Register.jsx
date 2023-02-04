import React from 'react';
import { Box } from '@chakra-ui/react';
import RegisterForm from 'components/AuthForm/RegisterForm';
import backgroundMobile from '../../media/bg-auth-mobile.png';
import backgroundTablet from '../../media/bg-auth-tablet.png';
import backgroundLaptop from '../../media/bg-auth-laptop.png';



const Register = () => {
      
  return (
    <Box as='main' bgImage={{base:backgroundMobile, md:backgroundTablet, xl:backgroundLaptop }} bgPosition='bottom' bgSize='contain' bgRepeat='no-repeat' bgColor='#FDF7F2' h='100vh' pt={{ md:'169px', xl:'46px'}}>
        <RegisterForm />
    </Box>
  )
};

export default Register;
