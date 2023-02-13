import React from 'react';
import FormikControl from 'shared/components/FormikControl/FormikControl';
import { Button } from 'shared/components';
import { useSelector } from 'react-redux';
import { getIsRefreshing } from 'redux/auth/auth-selectors';


const RegisterStep2 = ({handleBackClick, isDisabled}) => {
    const isRefreshing = useSelector(getIsRefreshing);

    return (
        <>                            
            <FormikControl 
                control='input'
                type='text' 
                name='name' 
                id='reg-name' 
                placeholder='Name'
                />
            <FormikControl 
                control='input'
                type='text' 
                name='address' 
                id='address' 
                placeholder='City, region'
                />
            <FormikControl 
                control='input'
                type='tel' 
                name='phone' 
                id='reg-phone' 
                placeholder='Mobile phone'
                mb='40px' />
            <Button 
                controle='secondary' 
                mb='4' 
                type='submit' 
                isDisabled={isDisabled} 
                isLoading={isRefreshing} 
                loadingText={"Register"}
            >
                Register
            </Button>
            <Button 
                mb='10' 
                onClick={handleBackClick} 
                isDisabled={isDisabled} 
            >
                Back
            </Button>
        </>
    )
}

export default RegisterStep2;