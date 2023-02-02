import { List, ListItem, Box, CloseButton, Text, Image } from "@chakra-ui/react";

const PetsItem = () => {
    return (
        <Box
            bgColor='#FFFFFF'
            box-shadow='7px 4px 14px rgba(0, 0, 0, 0.11)'
            borderRadius='40px'
            mb={{ base: '20px', xl: '22px' }}
            pr={{ base: "20px", md: "20px", xl: "28px" }}
            pl={{ base: "20px", md: "20px", xl: "20px" }}
            pb={{ base: "40px", md: "20px", xl: "20px" }}
            pt={{ base: "16px", md: "20px", xl: "20px" }}>
            <Image src="" alt="pet photo" />
            <CloseButton />
            <List>
                <ListItem>
                    <Text>Name: <Text as='span'>Jack</Text></Text>
                </ListItem>
                <ListItem mb={{base:'20px', xl:'22px'}}>
                    <Text>Date of birth: <Text as='span'>22.04.2018</Text></Text>
                </ListItem>
                <ListItem mb={{base:'20px', xl:'22px'}}>
                    <Text>Breed: <Text as='span'>Persian cat</Text></Text>
                </ListItem>
                <ListItem >
                    <Text>Comments: <Text as='span'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vitae consequuntur blanditiis id debitis reiciendis quam deleniti porro! Quia, deserunt.</Text></Text>
                </ListItem>
            </List>
        </Box>)
};

export default PetsItem;