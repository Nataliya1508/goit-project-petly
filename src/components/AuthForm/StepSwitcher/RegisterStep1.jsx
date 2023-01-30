import React from 'react';
import FormikControl from 'shared/components/FormikControl/FormikControl';
// import { Button } from 'shared/components';


const RegisterStep1 = () => {
    return (
        <>
            <FormikControl 
                control='input'
                type='email' 
                name='email' 
                id='reg-email' 
                placeholder='Email'
                h={{md:'52px'}}
                width={{base:'280px', md:'448px', xl:'458px'}} />
                <FormikControl 
                control='input'
                type='password' 
                name='password' 
                id='reg-password' 
                placeholder='Password'
                h={{md:'52px'}}
                width={{base:'280px', md:'448px', xl:'458px'}} />
                <FormikControl 
                control='input'
                type='password' 
                name='confirm' 
                id='reg-confirm Password' 
                placeholder='Confirm Password'
                h={{md:'52px'}}
                width={{base:'280px', md:'448px', xl:'458px'}}
                mb='0' />
        </>                   
    )
}

export default RegisterStep1;