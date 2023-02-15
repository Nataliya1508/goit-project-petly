import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heading, Box, Text } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getIsRefreshing } from 'redux/auth/auth-selectors';
import { Button, FormikControl } from 'shared/components';
import { loginYupSchema } from 'schemas/validationYupSchemas';
import { login } from 'redux/auth/auth-operations';
import { errorToast } from 'shared/components/Toast';

const LoginForm = () => {
  const isRefreshing = useSelector(getIsRefreshing);
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPasswordClick = () => {
    setShowPassword(prevState => !prevState);
  };

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = async (values, { resetForm }) => {
    const authData = { email: values.email, password: values.password };
    const data = dispatch(login(authData));
    if (data.type === 'auth/login/fulfilled') {
      resetForm();
    }

    if (!data.payload) {
      errorToast('Please try again later');
    }
    data.error.message && data.error && errorToast(data.payload.message);
  };

  return (
    <Box
      width={{ base: '280px', md: '608px', xl: '618px' }}
      px={{ base: '0', md: '20' }}
      pt={{ base: '22px', md: '60px' }}
      pb={{ base: '0', md: '10', xl: '60px' }}
      borderRadius="40px"
      boxShadow={{ base: '0', md: '7px 4px 14px rgba(0, 0, 0, 0.11)' }}
      bgColor={{ base: 'accent.background', md: 'white' }}
      mx="auto"
    >
      <Heading
        as="h1"
        mb="10"
        mt={{ base: '0' }}
        textAlign="center"
        fontWeight="medium"
      >
        Login
      </Heading>
      <Formik
        initialValues={initialValues}
        validationSchema={loginYupSchema}
        onSubmit={handleSubmit}
        isSubmitting
      >
        {formik => (
          <Box
            as={Form}
            position="relative"
            width={{ base: '280px', md: '448px', xl: '458px' }}
          >
            <FormikControl
              control="input"
              type="email"
              name="email"
              id="lg-email"
              placeholder="Email"
            />
            <FormikControl
              control="input"
              type="password"
              name="password"
              id="lg-password"
              placeholder="Password"
              show={showPassword}
              handleClick={handleShowPasswordClick}
              mb="40px"
            />
            <Button
              isDisabled={formik.isSubmitting}
              type="submit"
              controle="secondary"
              mb="40px"
              h={{ base: '44px', xl: '48px' }}
              width={{ base: '280px', md: '448px', xl: '458px' }}
              isLoading={isRefreshing}
              loadingText={'Login'}
              aria-label="login"
            >
              Login
            </Button>
            <Box display="flex" justifyContent="center" mb={2}>
              <Text
                fontFamily="body"
                fontSize="xs"
                fontWeight="normal"
                lineHeight="1.33"
                letterSpacing="0.04em"
                color="accent.grey"
                textAlign="center"
              >
                Don't have an account?
              </Text>
              <Box
                as="span"
                textDecoration="underline"
                fontFamily="body"
                fontSize="xs"
                fontWeight="normal"
                lineHeight="1.33"
                letterSpacing="0.04em"
                color="#3091EB;"
                textAlign="center"
              >
                <Link to="/register">Register</Link>
              </Box>
            </Box>
            <Box display="flex" justifyContent="center">
              <Text
                fontFamily="body"
                fontSize="xs"
                fontWeight="normal"
                lineHeight="1.33"
                letterSpacing="0.04em"
                color="accent.grey"
                textAlign="center"
              >
                Forgot your password?
              </Text>
              <Box
                as="span"
                textDecoration="underline"
                fontFamily="body"
                fontSize="xs"
                fontWeight="normal"
                lineHeight="1.33"
                letterSpacing="0.04em"
                color="#3091EB;"
                textAlign="center"
              >
                <Link to="/recovery">Reset</Link>
              </Box>
            </Box>
          </Box>
        )}
      </Formik>
    </Box>
  );
};

export default LoginForm;
