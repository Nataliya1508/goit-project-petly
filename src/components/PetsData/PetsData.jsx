import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import PetsList from "components/PetsList/PetsList";

import { BsFillPlusCircleFill } from 'react-icons/bs'
const PetsData = () => {
    return (
        <Box ml={{xl:'32px'}}>
            <Flex
                direction='baseline'
                justifyContent='space-between'
                pt={{ base: '40px', md: '20px', xl: '17px' }}
                mb={{ base: '26px', md: '22px', xl: '25px' }}>
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
                    type="button">
                    <Text mr='7px'>Add pet</Text>
                </Button>
            </Flex>
            <PetsList/>
        </Box>)
};

export default PetsData;