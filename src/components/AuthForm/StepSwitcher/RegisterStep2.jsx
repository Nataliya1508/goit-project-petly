import React from 'react';
import FormikControl from 'shared/components/FormikControl/FormikControl';
import { Button } from 'shared/components';


const RegisterStep2 = ({handleBackClick, isDisabled}) => {
    return (
        <>                            
            <FormikControl 
                control='input'
                type='text' 
                name='name' 
                id='reg-name' 
                placeholder='Name'
                h={{md:'52px'}}
                width={{base:'280px', md:'448px', xl:'458px'}} />
                <FormikControl 
                control='input'
                type='text' 
                name='address' 
                id='address' 
                placeholder='City, region'
                h={{md:'52px'}}
                width={{base:'280px', md:'448px', xl:'458px'}} />
                <FormikControl 
                control='input'
                type='tel' 
                name='phone' 
                id='reg-phone' 
                placeholder='Mobile phone'
                h={{md:'52px'}}
                width={{base:'280px', md:'448px', xl:'458px'}}
                mb='0' />
            <Button controle='secondary' mb='16px' mt='40px' h={{base:'44px', xl:'48px'}} width={{base:'280px', md:'448px', xl:'458px'}} type='submit'>Register</Button>
            <Button mb='40px' h={{base:'44px', xl:'48px'}} width={{base:'280px', md:'448px', xl:'458px'}} onClick={handleBackClick} >Back</Button>
        </>
    )
}

export default RegisterStep2;