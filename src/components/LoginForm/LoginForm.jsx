import React from 'react'
import { Link } from 'react-router-dom';
import { Heading, Box, Text } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';

import { Button, FormikControl } from 'shared/components';
import { loginYupSchema } from 'schemas/validationYupSchemas';
import { login } from 'redux/auth/auth-operations';


const LoginForm = () => {
    const dispatch = useDispatch();

    const initialValues = {
        email: "",
        password: "",
    }

    const handleSubmit = async (values, {resetForm}) => {
        const authData = ({'email': values.email, 'password': values.password });
        const data = await dispatch(login(authData));
        resetForm();             
        data.error.message && alert(data.payload.message);                
    }

    return (
        <Box width={{base:'280px', md:'608px', xl:'618px'}} px={{base:'0', md:'80px'}} pt={{base:'42px', md:'60px'}} pb={{base:'0', md:'40px', xl:'60px'}} borderRadius='40px' boxShadow={{base:'0', md:'7px 4px 14px rgba(0, 0, 0, 0.11)'}} bgColor={{base:'#FDF7F2', md:'white'}} mx='auto'>
            <Heading as='h1' mb='40px' mt={{base:'0'}} textAlign='center' fontWeight='medium'>Login</Heading>
            <Formik 
                initialValues={initialValues}
                validationSchema={loginYupSchema}
                onSubmit={handleSubmit}
                isSubmitting
                >
                {formik => (
                    <Box as={Form} position='relative' width={{base:'280px', md:'448px', xl:'458px'}} >
                        <FormikControl 
                            control='input'
                            type='email' 
                            name='email' 
                            id='lg-email' 
                            placeholder='Email'
                            h={{md:'52px'}}
                            width={{base:'280px', md:'448px', xl:'458px'}}
                            p={{base:"11px 14px", md:"14px 32px"}} 
                        />
                        <FormikControl
                            control='input'
                            type= 'password'
                            name='password' 
                            id='lg-password' 
                            placeholder='Password'
                            h={{md:'52px'}}
                            width={{base:'280px', md:'448px', xl:'458px'}} 
                            p={{base:"11px 14px", md:"14px 32px"}}
                            mb='0' 
                        />
                        <Button isDisabled={formik.isSubmitting} type='submit' controle='secondary' mb='40px' mt='40px' h={{base:'44px', xl:'48px'}} width={{base:'280px', md:'448px', xl:'458px'}}>Login</Button>
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
                                Don't have an account? 
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
                                <Link to='/register'>Register</Link>
                            </Box>
                        </Box>
                    </Box>
                )}
            </Formik>
        </Box>
    )
}

export default LoginForm
