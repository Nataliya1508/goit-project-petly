import {
  Button,
} from "@chakra-ui/react"
import {IoLogOutOutline} from 'react-icons/io5'

const Logout = () => {
  return (
    <Button
      fontSize='16px'
      fontWeight='500px'
      lineHeight='1.35'
      display='flex'
      alignContent='center'
      ml={{ sm:'auto', md:'0px',sm:'auto'}}
      mr={{ sm:'0px', md:'auto',sm:'0px'}}
      bgColor='#FFFFFF'
      p='0px'
      h='22px'
      leftIcon={<IoLogOutOutline color='#F59256' size='18px'/>}
    >Logout</Button>);
};

export default Logout;