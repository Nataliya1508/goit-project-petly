// import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
// import { Box } from '@chakra-ui/layout';
import React from 'react';
// import { useState } from 'react';
import FormikControl from 'shared/components/FormikControl/FormikControl';


const RegisterStep1 = () => {
    // const[isShowPassword, setIsShowPassword] = useState(false);
    // const handleClickPassword =() => {
    //     setIsShowPassword((prevState)=> !prevState);
    // }
    // const[isShowConfirm, setIsShowConfirm] = useState(false);
    // const handleClickConfirm =() => {
    //     setIsShowConfirm((prevState)=> !prevState);
    // }
    return (
        <>
            <FormikControl 
                control='input'
                type='email' 
                name='email' 
                id='reg-email' 
                placeholder='Email'
                h={{md:'52px'}}
                width={{base:'280px', md:'448px', xl:'458px'}}
                p={{base:"11px 14px", md:"14px 32px"}} />
            <FormikControl
                control='input'
                // type={isShowPassword ? 'text' : 'password'}
                type= 'password'
                name='password' 
                id='reg-password' 
                placeholder='Password'
                h={{md:'52px'}}
                width={{base:'280px', md:'448px', xl:'458px'}} 
                p={{base:"11px 14px", md:"14px 32px"}} />
            {/* <Box onClick={handleClickPassword} position='absolute' zIndex='1' right={{base:'14px',md:'32px'}} top={{base:'70px',md:'80px'}} bg='#FDF7F' h={{base:'25px',md:'25px'}} w={{base:'15px', md:'25px'}}>
                {isShowPassword ? <ViewOffIcon color='rgba(17, 17, 17, 0.6);' h='inherit' w='inherit'/> : <ViewIcon color='rgba(17, 17, 17, 0.6);' h='inherit' w='inherit'/>}
            </Box>                 */}
            <FormikControl 
                control='input'
                // type={isShowConfirm ? 'text' : 'password'}
                type= 'password' 
                name='confirm' 
                id='reg-confirm Password' 
                placeholder='Confirm Password'
                h={{md:'52px'}}
                width={{base:'280px', md:'448px', xl:'458px'}}
                mb='0' 
                p={{base:"11px 14px", md:"14px 32px"}}/>
                {/* <Box onClick={handleClickConfirm} position='absolute' zIndex='1' right={{base:'14px',md:'32px'}} top={{base:'130px',md:'150px'}} bg='#FDF7F' h={{base:'25px',md:'25px'}} w={{base:'15px', md:'25px'}}>
                    {isShowConfirm ? <ViewOffIcon color='rgba(17, 17, 17, 0.6);' h='inherit' w='inherit'/> : <ViewIcon color='rgba(17, 17, 17, 0.6);' h='inherit' w='inherit'/>}
                </Box> */}
        </>                   
    )
}

export default RegisterStep1;