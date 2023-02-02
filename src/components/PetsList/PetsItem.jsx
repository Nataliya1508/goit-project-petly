import { List, ListItem, Box, CloseButton, Text, Image } from "@chakra-ui/react";

const PetsItem = () => {
    return (
        <Box>
            <Image src="" alt="pet photo" />
            <CloseButton />
            <List>
                <ListItem>
                    <Text>Name: <Text as='span'>Jack</Text></Text>
                </ListItem>
                <ListItem>
                    <Text>Date of birth: <Text as='span'>22.04.2018</Text></Text>
                </ListItem>
                <ListItem>
                    <Text>Breed: <Text as='span'>Persian cat</Text></Text>
                </ListItem>
                <ListItem>
                    <Text>Comments: <Text as='span'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vitae consequuntur blanditiis id debitis reiciendis quam deleniti porro! Quia, deserunt.</Text></Text>
                </ListItem>
            </List>
        </Box>)
};

export default PetsItem;