import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heading, Box, Text } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { reset } from 'services/api/auth';
import { Button, FormikControl } from 'shared/components';
import { resetYupSchema } from 'schemas/validationYupSchemas';
import { errorToast, successToast } from 'shared/components/Toast';

const ResetForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    email: '',
  };

  const handleSubmit = async ({ email }, { resetForm }) => {
    const resetData = { email };
    try {
      setIsLoading(true);
      await reset(resetData);
      successToast('We have sent you a letter, please check your email');
      resetForm();
    } catch ({ response }) {
      errorToast(response.data.message);
    } finally {
      setIsLoading(false);
    }
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
        Reset password
      </Heading>
      <Text mb={6}>
        Please enter the email you use to login. We will send you an email to
        reset your password.
      </Text>
      <Formik
        initialValues={initialValues}
        validationSchema={resetYupSchema}
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
              id="reset-email"
              placeholder="Email"
              mb="40px"
            />
            <Button
              isDisabled={formik.isSubmitting}
              type="submit"
              controle="secondary"
              mb="40px"
              h={{ base: '44px', xl: '48px' }}
              width={{ base: '280px', md: '448px', xl: '458px' }}
              isLoading={isLoading}
              loadingText={'Send'}
              aria-label="Request password reset"
            >
              Request password reset
            </Button>
            <Box display="flex" justifyContent="center">
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
                <Link to="/login">Back to login</Link>
              </Box>
            </Box>
          </Box>
        )}
      </Formik>
    </Box>
  );
};

export default ResetForm;
