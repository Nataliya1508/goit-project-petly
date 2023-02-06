import UserData from 'components/UserData/UserData';
import PetsData from 'components/PetsData/PetsData';
import Logout from 'components/Logout/Logout';
import { useSelector } from 'react-redux';
import {getUser}  from 'redux/auth/auth-selectors';
import {
  Flex, Box, Heading
} from "@chakra-ui/react"
  
const UserAccount = () => {

  const user = useSelector(getUser)
  return (
    <Box  bg="accent.background" m={'0 auto'}  pt={{ base: '45px', md: '64px', xl: '38px' }} >
        <Flex
          bgColor="accent.background"
          w={{ base: '320px', md: '768px', xl: '1280px' }}
          px={{ base: "20px", md: "32px", xl: "16px" }}
          mx='auto'
          direction={{ base: "column", md: "column", xl: "row" }} >
          <Box>
            <Heading
              as="h2"
              fontSize={{ base: '20px', md: '28px' }}
              lineHeight={{ base: '1.35' }}
              mb={{ base: '18px', md: '25px' }}
              fontWeight={{ base: '500' }}>
              My information:
            </Heading>
            <Box
              bgColor="accent.white"
              borderRadius='20px'
              py={{base:'20px', md:'24px', xl:'20px'}}
              pr={{base:'12px', md:'40px', xl:'16px'}}
              pl={{base:'16px', md:'32px', xl:'16px'}}>
              <UserData userData={user}/>
              <Logout/>
            </Box>
          </Box>
          
        <PetsData pets={user.pets} />
        </Flex>
    </Box>)
};

export default UserAccount;
