import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import PetsList from "components/PetsList/PetsList";

import { BsFillPlusCircleFill } from 'react-icons/bs'
const PetsData = () => {
    return (
        <Box>
            <Flex direction='baseline' justifyContent='space-between' mb={{sm:'26px', md:'22px', xl:'25px'}}>
                <Heading as='h2' my='auto' fontSize={{ sm:'20px', md:'28px'}} lineHeight={{sm:"1.35"}}  fontWeight={{sm:'500'}}>My pets:</Heading>
                <Button rightIcon={<BsFillPlusCircleFill size='40px' fill='#F59256' m='0px'/>} bg='#FDF7F2' fontSize={{ sm:'20px', md:'28px'}} lineHeight={{sm:"1.35"}} fontWeight={{sm:'500'}} type="button">Add pet</Button>
            </Flex>
            <PetsList/>
        </Box>)
};

export default PetsData;