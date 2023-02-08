import UserDataItem from 'components/UserDataItem/UserDataItem';
import { Box, Flex, Text, Image, Input, FormLabel } from '@chakra-ui/react';
import { BsCameraFill } from 'react-icons/bs';
import defaultAvatar from '../../media/defaultAvatar.svg';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from 'redux/auth/auth-selectors';
import { updateUserAvatar } from 'redux/auth/auth-operations';
import Loader from 'components/Loader/Loader';
import {useState} from 'react'
const UserData = () => {
  let {
    email = '',
    name = '',
    address = '',
    birthday = '',
    phone = '',
    avatarURL,
  } = useSelector(getUser);

  const[isLoading, setIsLoading] = useState(false)
  // const[avatar, setAvatar] = useState(avatarURL)
  const dispatch = useDispatch();
  // useEffect(() => {
  //   console.log("useEffect", avatar)
    
  //   if (isLoading === true || avatar ) {
  //     setIsLoading(false)
  //     console.log( "useEffect if", avatar)
  //   }
  //  },[dispatch, avatar, isLoading, avatarURL]
  // )

  

  const onChange = async(e) => {
    const newPhoto = new FormData()
    newPhoto.append('avatar', e.target.files[0])
    setIsLoading(true)
    await dispatch(updateUserAvatar(newPhoto))
    setIsLoading(false)
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
          mb={{ base: '66px', md: '0px', xl: '32px' }}>
          <Box
            w="233px"
            h="233px"
            filter="drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11))"
            bgColor='accent.background'
            borderRadius="50%">
            { isLoading ? <Box p='92px'><Loader/></Box> : 
            <Image
            src={avatarURL ?? defaultAvatar}
            alt="user photo"
            w="233px"
            h="233px"
            backgroundPosition={'center'}
            borderRadius="50%"/>}
          </Box>
          
          <FormLabel
            cursor='pointer'
            display="flex"
            alignItems="center"
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
            transitionTimingFunction={'cubic-bezier(0.4, 0, 0.2, 1)'}>
            <BsCameraFill size="20px" fill='#F59256' />
            <Text ml="4px">Edit photo</Text>
            <Input
              onChange={(e)=> onChange(e)}
              type="file"
              w="0px"
              h="0px"
              position= "absolute"
              z-index= "-1"
              opacity= "0"
              display= "block"
          />
          </FormLabel>
        </Box>
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          mb="-8px"
          w={{ base: '100%', md: '379px', xl: '411px' }}
        >
          <UserDataItem nameInput={'Name'} valueInput={name} type={'text'} />
          <UserDataItem nameInput={'Email'} valueInput={email} type={'email'} />
          <UserDataItem nameInput={'Birthday'} valueInput={birthday} type={'date'} />
          <UserDataItem nameInput={'Phone'} valueInput={phone} type={'tel'} />
          <UserDataItem nameInput={'Address'} valueInput={address} type={'string'} />
          
        </Flex>
      </Flex>
    </Box>
  );
};

export default UserData;
