// import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
// import { Box } from '@chakra-ui/layout';
import React from 'react';
import { useState } from 'react';
import FormikControl from 'shared/components/FormikControl/FormikControl';


const RegisterStep1 = () => {
    const[show, setShow] = useState(false);
    const handleClick =() => {
        setShow((prevState)=> !prevState);
    }
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
                // type= 'password'
                type={show ? 'text' : 'password'}
                handleClick={handleClick}
                show = {show}
                name='password' 
                id='reg-password' 
                placeholder='Password'
                h={{md:'52px'}}
                width={{base:'280px', md:'448px', xl:'458px'}} 
                p={{base:"11px 14px", md:"14px 32px"}} />
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
        </>                   
    )
}

export default RegisterStep1;