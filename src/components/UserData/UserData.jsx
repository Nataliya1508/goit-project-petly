import UserDataItem from "components/UserDataItem/UserDataItem";
import { CustomInput } from "shared/components/FormikControl";
import {
    Box,
    Flex,
    Button,
    Heading,
    Image
} from "@chakra-ui/react"




const UserData = () => {
    return (
        <Box
            mx='0px'
            >
            <Heading as='h2' fontSize={{ sm:'20px', md:'28px'}} lineHeight={{sm:"1.35"}} mb={{sm:'18px', md:'24px'}} fontWeight={{sm:'500'}}>My information:</Heading>
            <Flex
                display='flex'
                justifyContent='center'
                alignContent='center'
                direction={{ sm: "column", md: "row-reverse", xl: "column" }}
                w={{ sm: '100%', md: '100%', xl: '411px' }}
                mb={{ sm: "42px", md: "8px", xl: "26px" }}
                mx='auto'>
                
                <Box mx='auto'>
                    <Image src="" alt="user photo" w='233px' h='233px' bg='azure' borderRadius='50%' filter= 'drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11))' />
                    <Button>Edit photo</Button>
                </Box>
                <Flex direction='column' alignItems='center' justifyContent='center' w={{ sm: '100%', md: '379px', xl: '379px' }}>
                    <UserDataItem name="Name" />
                    <UserDataItem name = "Email" />
                    <UserDataItem name = "Birthday" />
                    <UserDataItem name = "Phone" />
                    <UserDataItem name = "City" /> 
                </Flex>
            </Flex>
            
            
        </Box>)
};

export default UserData;