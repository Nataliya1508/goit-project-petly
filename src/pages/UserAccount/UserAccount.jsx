
import UserData from 'components/UserData/UserData'
import PetsData from 'components/PetsData/PetsData';
import Logout from 'components/Logout/Logout';
import {
  Flex, Box
} from "@chakra-ui/react"
  
const UserAccount = () => {
  return (
    <Flex
      bg='#FDF7F2'
      w={{ sm: '320px', md: '768px', xl: '1280px' }}
      px={{ sm: "5", md: "8", xl: "4" }}
      mx='auto'
      display='flex'
      direction={{ sm: "column", md: "column", xl: "row" }} >
      <Box
        bgColor='#FFFFFF'
        borderRadius='20px'
        py={{sm:'20px', md:'24px', xl:'20px'}}
        pr={{sm:'12px', md:'40px', xl:'16px'}}
        pl={{sm:'16px', md:'32px', xl:'16px'}}>
        <UserData/>
        <Logout/>
      </Box>
      <PetsData/>
    </Flex>)
};

export default UserAccount;
