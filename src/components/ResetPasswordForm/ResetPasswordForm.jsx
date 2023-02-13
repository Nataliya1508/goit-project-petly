import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Heading, Box } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { resetPassword } from 'services/api/auth';
import { Button, FormikControl } from 'shared/components';
import { resetPasswordYupSchema } from 'schemas/validationYupSchemas';
import { errorToast, successToast } from 'shared/components/Toast';

const ResetPasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { recoveryToken } = useParams();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPasswordClick = () => {
    setShowPassword(prevState => !prevState);
  };

  const initialValues = {
    password: '',
    passwordConfirmation: '',
  };

  const handleSubmit = async (
    { password, passwordConfirmation },
    { resetForm }
  ) => {
    const resetData = { password, repeat_password: passwordConfirmation };

    try {
      setIsLoading(true);
      await resetPassword(recoveryToken, resetData);
      successToast('Password was changed successfull');
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
        New password
      </Heading>
      <Formik
        initialValues={initialValues}
        validationSchema={resetPasswordYupSchema}
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
              type="password"
              name="password"
              id="password"
              label="Enter password"
              placeholder="Password"
              show={showPassword}
              handleClick={handleShowPasswordClick}
              mb={'32px'}
            />
            <FormikControl
              control="input"
              type="password"
              name="passwordConfirmation"
              id="confirm-password"
              label="Confirm password"
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
              isLoading={isLoading}
              loadingText={'Update'}
            >
              Update your password
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

export default ResetPasswordForm;
