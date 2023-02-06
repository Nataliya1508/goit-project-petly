import React from 'react';
import { Box } from '@chakra-ui/react';
import RegisterForm from 'components/AuthForm/RegisterForm';
import { authBackgroundMobile, authBackgroundLaptop, authBackgroundTablet } from 'media';
import useVisualViewportHeight from 'hooks/useVisualViewportHeight';


const Register = () => {
  const headerHaightMobile = 74;
  const headerHaightTablet = 96;
  const headerHaightLaptop = 88;
  const vieportHaight = useVisualViewportHeight();  
  const sectionHaightMobile = `${100-(headerHaightMobile/vieportHaight)*100}vh`;
  const sectionHaightTablet = `${100-(headerHaightTablet/vieportHaight)*100}vh`;
  const sectionHaightLaptop = `${100-(headerHaightLaptop/vieportHaight)*100}vh`;
      
  return (
    <Box as='main' bgImage={{base:authBackgroundMobile, md:authBackgroundTablet, xl:authBackgroundLaptop }} bgPosition='bottom' bgSize='contain' bgRepeat='no-repeat' bgColor='accent.background' h={{base:sectionHaightMobile, md:sectionHaightTablet, xl:sectionHaightLaptop}} pt={{ md:'145px', xl:'26px'}}>
        <RegisterForm />
    </Box>
  )
};

export default Register;
