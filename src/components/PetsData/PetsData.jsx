import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import PetsList from "components/PetsList/PetsList";

import { BsFillPlusCircleFill } from 'react-icons/bs'
const PetsData = () => {
    return (
        <Box ml={{xl:'32px'}}>
            <Flex
                direction='baseline'
                justifyContent='space-between'
                pt={{ base: '40px', md: '20px', xl: '0px' }}
                mb={{ base: '26px', md: '22px', xl: '24px' }}>
                <Heading
                    as='h2'
                    my='auto'
                    fontSize={{ base: '20px', md: '28px' }}
                    lineHeight={{ base: "1.35" }}
                    fontWeight={{ base: '500' }}>
                    My pets:
                </Heading>
                <Button
                    rightIcon={<BsFillPlusCircleFill size='40px' fill='#F59256' m='0px' />}
                    bg='#FDF7F2'
                    fontSize={{ base: '20px', md: '28px' }}
                    lineHeight={{ base: "1.35" }}
                    fontWeight={{ base: '500' }}
                    type="button"
                    px='0px'
                    _hover={{ color: '#F59256' }}
                    _focus={{ color: '#F59256' }}>
                    <Text mr='7px'>Add pet</Text>
                </Button>
            </Flex>
            <PetsList/>
        </Box>)
};

export default PetsData;