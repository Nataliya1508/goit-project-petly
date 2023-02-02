import {
  Button,
} from "@chakra-ui/react"
import {IoLogOutOutline} from 'react-icons/io5'

const Logout = () => {
  return (
    <Button
      fontSize='16px'
      color='#111111'
      fontWeight='500px'
      lineHeight='1.35'
      display='flex'
      alignContent='center'
      ml="auto"
      py='0px'
      h='22px'
      leftIcon={<IoLogOutOutline fill="#F59256" size='18px'/>}
    >Logout</Button>);
};

export default Logout;