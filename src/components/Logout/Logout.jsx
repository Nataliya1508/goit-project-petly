import { Button, Text } from '@chakra-ui/react';
import { IoLogOutOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';

const Logout = () => {
  const dispatch = useDispatch();
  const onLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <Button
      onClick={onLogoutClick}
      display="flex"
      alignItems="center"
      type="button"
      variant="link"
      fontSize="12px"
      lineHeight="1.35"
      fontWeight="400"
      ml={{ base: '0px', md: '0px', xl: '0px' }}
      mr={{ base: '0px', md: '0px', xl: '0px' }}
      bc="transparent"
      p="0px"
      h="22px"
      _hover={{ color: '#F59256' }}
      _focus={{ color: '#F59256' }}
      transitionProperty={'color'}
      transitionDuration={'250ms'}
      transitionTimingFunction={'cubic-bezier(0.4, 0, 0.2, 1)'}
      aria-label="logout"
    >
      <IoLogOutOutline color="#F59256" size="18px" />
      <Text fontSize="16px" fontWeight="500px" lineHeight="1.35" ml="8px">
        Logout
      </Text>
    </Button>
  );
};

export default Logout;
