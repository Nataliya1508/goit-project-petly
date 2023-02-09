import { Formik, Form } from 'formik';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import moment from 'moment/moment';
import { Text, Box, Spinner } from '@chakra-ui/react';
import { addNotice } from 'redux/notices/notices-operations';
import { getNoticesLoading } from 'redux/notices/notices-selectors';
import {
  FormikControl,
  Button,
  errorToast,
  successToast,
} from 'shared/components';
import { addNoticeInitialState, addNoticeSchema } from './index';
import { useLocation } from 'react-router-dom';

const ModalAddsNotice = ({ onClose }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getNoticesLoading);
  const location = useLocation();
  const category = useMemo(
    () => location.pathname.split('/')[2],
    [location.pathname]
  );
  const [firstStep, setFirstStep] = useState(true);

  const titleId = useMemo(() => nanoid(), []);
  const nameId = useMemo(() => nanoid(), []);
  const birthdayId = useMemo(() => nanoid(), []);
  const breedId = useMemo(() => nanoid(), []);
  const locationId = useMemo(() => nanoid(), []);
  const priceId = useMemo(() => nanoid(), []);
  const photoId = useMemo(() => nanoid(), []);
  const commentsId = useMemo(() => nanoid(), []);

  function isDisabled(dirty, errors) {
    const { title, name, birthday, breed } = errors;
    return (
      !dirty ||
      title !== undefined ||
      name !== undefined ||
      birthday !== undefined ||
      breed !== undefined
    );
  }

  const handleSubmit = (
    {
      categoryName,
      title,
      name,
      birthday,
      breed,
      sex,
      location,
      price,
      photo,
      comments,
    },
    { resetForm }
  ) => {
    const newPet = new FormData();
    newPet.append('categoryName', categoryName);
    newPet.append('title', title.trim());
    newPet.append('name', name.trim());
    newPet.append(
      'birthdate',
      birthday ? moment(birthday, 'YYYYY-MM-DD').format('DD.MM.YYYY') : null
    );
    newPet.append('breed', breed.trim());
    newPet.append('sex', sex);
    newPet.append('location', location.trim());
    newPet.append('price', price ? Number(price) : '');
    newPet.append('photo', photo);
    newPet.append('comments', comments.trim());

    dispatch(addNotice({ newPet, category }))
      .then(({ error }) => {
        if (error) {
          return errorToast(error.message);
        }
        successToast('Notice successfully added');
        resetForm();
        onClose();
      })
      .catch(e => errorToast(e.message));
  };

  return (
    <Formik
      initialValues={addNoticeInitialState}
      validationSchema={addNoticeSchema}
      onSubmit={handleSubmit}
      validateOnChange={true}
      validateOnBlur={true}
    >
      {({ values, errors, dirty }) => (
        <Form autoComplete="off" encType="multipart/form-data">
          {firstStep ? (
            <>
              <FormikControl control="category-radio" name="categoryName" />
              <FormikControl
                type="text"
                name="title"
                label={
                  <>
                    Title of ad
                    <Text as={'span'} color={'accent.accentOrange'}>
                      *
                    </Text>
                  </>
                }
                placeholder="Type title"
                id={titleId}
                width={60}
              />
              <FormikControl
                type="text"
                name="name"
                label="Name pet"
                placeholder="Type name pet"
                id={nameId}
                width={60}
              />
              <FormikControl
                type="date"
                name="birthday"
                label="Date of birthday"
                id={birthdayId}
                width={60}
              />
              <FormikControl
                type="text"
                name="breed"
                label="Breed"
                placeholder="Type breed"
                id={breedId}
                width={60}
                mb={'40px'}
              />
              <Box
                maxW={'none'}
                display={'flex'}
                flexDirection={{ base: 'column', md: 'row-reverse' }}
                justifyContent={{ base: 'center', md: 'center' }}
              >
                <Button
                  controle="secondary"
                  onClick={() => setFirstStep(false)}
                  isDisabled={isDisabled(dirty, errors)}
                  mb={{ base: '3', md: '0' }}
                  width={{ md: '180px' }}
                >
                  Next
                </Button>
                <Button
                  onClick={onClose}
                  mr={{ md: '5' }}
                  width={{ md: '180px' }}
                >
                  Cancel
                </Button>
              </Box>
            </>
          ) : (
            <Box display={'flex'} flexDirection={'column'} maxW={'none'}>
              <FormikControl
                control="sex-radio"
                name="sex"
                label={
                  <>
                    The sex
                    <Text as={'span'} color={'accent.accentOrange'}>
                      *
                    </Text>
                  </>
                }
              />
              <FormikControl
                type="text"
                name="location"
                label={
                  <>
                    Location
                    <Text as={'span'} color={'accent.accentOrange'}>
                      *
                    </Text>
                  </>
                }
                placeholder='Type location, e.g. "Kyiv, UA"'
                id={locationId}
                width={'60'}
              />
              {values.categoryName === 'sell' && (
                <FormikControl
                  type="text"
                  name="price"
                  label={
                    <>
                      Price
                      <Text as={'span'} color={'accent.accentOrange'}>
                        *
                      </Text>
                    </>
                  }
                  placeholder="Type price"
                  id={priceId}
                  width={'60'}
                />
              )}
              <Text
                fontSize={{ base: '18px', md: '2xl' }}
                fontWeight={'medium'}
                lineHeight={{ base: 'short', md: '1.2' }}
                letterSpacing={'-0.01em'}
                mb={'5'}
              >
                Load the pet`s image
              </Text>
              <FormikControl
                control="file"
                id={photoId}
                name={'photo'}
                size={{ base: '116px', md: '140px' }}
                borderRadius={'20px'}
                plusSize={{ base: '55%', md: '50%' }}
              />
              <FormikControl
                control="textarea"
                name="comments"
                label={
                  <>
                    Comments
                    <Text as={'span'} color={'accent.accentOrange'}>
                      *
                    </Text>
                  </>
                }
                placeholder="Type comments"
                id={commentsId}
              />
              <Box
                maxW={'none'}
                width={'full'}
                display={'flex'}
                flexDirection={{ base: 'column', md: 'row-reverse' }}
                justifyContent={{ base: 'center', md: 'center' }}
              >
                <Button
                  type="submit"
                  mb={{ base: '3', md: '0' }}
                  controle="secondary"
                  width={{ md: '180px' }}
                >
                  {isLoading
                  ? <> Adding <Spinner emptyColor='#FF6101'
                                      color='#F5F5F5'
                                      textAlign='center'
                                      size='xs'/></>
                  : 'Done'}
                </Button>
                <Button
                  onClick={() => setFirstStep(true)}
                  mr={{ md: '5' }}
                  width={{ md: '180px' }}
                >
                  Back
                </Button>
              </Box>
            </Box>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default ModalAddsNotice;
