import React from 'react';
import { Heading, Box } from '@chakra-ui/react';
import { Formik, Form } from 'formik';


const AuthForm = ({title, initialValues, validationSchema, onSubmit, children}) => {
    
    return (
        <Box width={{base:'280px', md:'608px', xl:'618px'}} px={{base:'0', md:'80px'}} pt={{base:'42px', md:'60px'}} pb={{base:'0', md:'40px', xl:'60px'}} borderRadius={{base:'0', md:'40px'}} boxShadow={{base:'0', md:'7px 4px 14px rgba(0, 0, 0, 0.11)'}} bgColor={{base:'#FDF7F2', md:'white'}} mx='auto'>
            <Heading as='h1' mb='40px' mt={{base:'0'}} textAlign='center'>{title}</Heading>
            <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            >
                {formik => (<Box as={Form} width={{base:'280px', md:'448px', xl:'458px'}} >
                {children}                
                </Box>
                )}
            </Formik>
        </Box>
    )
};

export default AuthForm;