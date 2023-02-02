import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heading, Box, Text } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Button } from 'shared/components';
import StepSwitcher from 'components/AuthForm/StepSwitcher/StepSwitcher';
import { regesterYupSchema } from 'schemas/validationYupSchemas';
import { login, register } from 'redux/auth/auth-operations';


const RegisterForm = () => {
    const [step, setStep] = useState('step1');
    const dispatch = useDispatch();

    const initialValues = {
        email: "",
        password: "",
        confirm: "",
        name:"",
        address:"",
        phone:""
    }
  
    const onSubmit = async (values, {resetForm}) => {
        const registerData = ({'email': values.email, 'password': values.password, 'name': values.name, 'address': values.address, 'phone': values.phone });
        const data = await dispatch(register(registerData));
        
        if(data.type === "auth/register/fulfilled") {
            dispatch(login({'email': values.email, 'password': values.password}));
            resetForm();            
        }

        data.error && toast.error(data.payload.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });                
    }
    
    const handleBackClick = () => {
        setStep('step1')
    }

    return (
        <Box width={{base:'280px', md:'608px', xl:'618px'}} px={{base:'0', md:'80px'}} pt={{base:'42px', md:'60px'}} pb={{base:'0', md:'40px', xl:'60px'}} borderRadius='40px' boxShadow={{base:'0', md:'7px 4px 14px rgba(0, 0, 0, 0.11)'}} bgColor={{base:'#FDF7F2', md:'white'}} mx='auto'>
            <ToastContainer />
            <Heading as='h1' mb='40px' mt={{base:'0'}} textAlign='center' fontWeight='medium'>Registration</Heading>
            <Formik 
            initialValues={initialValues}
            validationSchema={regesterYupSchema}
            onSubmit={onSubmit}
            >
                {formik => (
                <Box as={Form} position='relative' width={{base:'280px', md:'448px', xl:'458px'}} >
                    <StepSwitcher step={step} isDisabled={formik.isSubmitting} handleBackClick={handleBackClick}/>
                    {step === 'step1' && <Button  controle='secondary' mb='40px' mt='40px' h={{base:'44px', xl:'48px'}} width={{base:'280px', md:'448px', xl:'458px'}} onClick={async()=>{Object.keys(await formik.validateForm()).length === 0 ? setStep('step2') : formik.submitForm()}}>Next</Button> }
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
                        <Box
                        as='span'
                        textDecoration='underline' 
                        fontFamily='body' 
                        fontSize='12px' 
                        fontWeight='normal' 
                        lineHeight='1.33' 
                        letterSpacing='0.04em' 
                        color='#3091EB;'
                        textAlign='center'>
                            <Link to='/login'>Login</Link>
                        </Box>
                    </Box>
                </Box>
                )}
            </Formik>
        </Box>
    )
};

export default RegisterForm;