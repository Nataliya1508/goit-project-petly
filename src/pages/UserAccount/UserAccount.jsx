
import UserData from 'components/UserData/UserData'
import PetsData from 'components/PetsData/PetsData';
import Logout from 'components/Logout/Logout';
import {
  Box
} from "@chakra-ui/react"
  
const UserAccount = () => {
  return <Box>
    <Box>
      <UserData/>
      <Logout/>
    </Box>
    <PetsData/>
  </Box>;
};

export default UserAccount;
