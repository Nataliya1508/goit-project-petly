import { Button } from '@chakra-ui/react';
import { IoLogOutOutline } from 'react-icons/io5';

const Logout = () => {
  return (
    <Button
      fontSize="16px"
      fontWeight="500px"
      lineHeight="1.35"
      display="flex"
      alignContent="center"
      ml={{ base: 'auto', md: '0px', xl: 'auto' }}
      mr={{ base: '0px', md: 'auto', xl: '0px' }}
      bgColor="#FFFFFF"
      p="0px"
      h="22px"
      leftIcon={<IoLogOutOutline color="#F59256" size="18px" />}
    >
      Logout
    </Button>
  );
};

export default Logout;
