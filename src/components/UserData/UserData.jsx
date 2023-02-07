import UserDataItem from 'components/UserDataItem/UserDataItem';
import { Box, Flex, Text, Image, Button, useDisclosure, FormControl, FormLabel, VisuallyHiddenInput } from '@chakra-ui/react';
import { BsCameraFill } from 'react-icons/bs';
import defaultAvatar from '../../media/defaultAvatar.svg';
import { useSelector } from 'react-redux';
import { getUser } from 'redux/auth/auth-selectors';
// import { Modal } from "shared/components/Modal"
import { CustomInputFile } from "shared/components/FormikControl"
import { Formik, Form  } from 'formik';
import { FormikControl, Modal } from 'shared/components'
import {default as Plus} from 'shared/components/FormikControl/plus.svg' 

const UserData = () => {
  const { onOpen, onClose, isOpen } = useDisclosure()
  const {
    email = '',
    name = '',
    address = '',
    birthday = '',
    phone = '',
    avatarURL,
  } = useSelector(getUser);

  const addAvatarInitialState = {
    categoryName: 'lost-found',
    title: '',
    name: '',
    birthday: '',
    breed: '',
    sex: 'male',
    location: '',
    price: '',
    photo: null,
    comments: '',
}

  return (
    <Box
      mr="0px">
      <Flex
        display="flex"
        justifyContent="space-between"
        alignContent="center"
        direction={{ base: 'column', md: 'row-reverse', xl: 'column' }}
        w={{ base: '100%', md: '100%', xl: '411px' }}
        mb={{ base: '42px', md: '8px', xl: '26px' }}
        mx="auto"
      >
        <Box
          position="relative"
          mx="auto"
          mb={{ base: '66px', md: '0px', xl: '32px' }}
        >
          <Image
            src={avatarURL ?? defaultAvatar}
            alt="user photo"
            w="233px"
            h="233px"
            backgroundPosition={'center'}
            bgColor='accent.background'
            borderRadius="50%"
            filter="drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11))"
          />
          <Button
            onClick={onOpen}
            display="flex"
            alignItems="center"
            type="button"
            variant="link"
            fontSize="12px"
            lineHeight="1.35"
            fontWeight="400"
            position="absolute"
            p="0px"
            top={{ base: '242px', md: '242px', xl: '218px' }}
            right={{ base: '0px', md: '0px', xl: '-65px' }}
            _hover={{ color: 'accent.accentOrange' }}
            _focus={{ color: 'accent.accentOrange' }}
            transitionProperty={'color'}
            transitionDuration={'250ms'}
            transitionTimingFunction={'cubic-bezier(0.4, 0, 0.2, 1)'}
          >
            <BsCameraFill size="20px" fill='#F59256' />
            <Text ml="4px">Edit photo</Text>
          </Button>
        </Box>
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          mb="-8px"
          w={{ base: '100%', md: '379px', xl: '411px' }}
        >
          <UserDataItem nameInput={'Name'} valueInput={name} />
          <UserDataItem nameInput={'Email'} valueInput={email} />
          <UserDataItem nameInput={'Birthday'} valueInput={birthday} />
          <UserDataItem nameInput={'Phone'} valueInput={phone} />
          <UserDataItem nameInput={'Adress'} valueInput={address} />
        </Flex>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} title={"Edit photo"} >
          <FormControl
            size={{ base: '208px', md: '182px' }}
            borderRadius={{ base: '20px', md: '40px' }}
            plusSize={{ base: '30%', md: '40%' }}>
          <FormLabel
              htmlFor='photoInpun'>
            <Text>Add photo</Text>
            </FormLabel>
            <VisuallyHiddenInput
              id='photoInpun'
                name={name}
                onClick={(event) => {
                  console.log('hi')
                }}
              />
            
          </FormControl>
        </Modal>
    </Box>
  );
};

export default UserData;
