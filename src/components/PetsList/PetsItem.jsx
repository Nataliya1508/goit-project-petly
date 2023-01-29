import { Box, CloseButton, Text, Image } from "@chakra-ui/react";


const PetsItem = () => {
    return <Box>
        <Image src="" alt="pet photo" />
        <CloseButton />
        <ul>
            <li>
                <Text>Name: <span>Jack</span></Text>
            </li>
            <li>
                <Text>Date of birth: <span>22.04.2018</span></Text>
            </li>
            <li>
                <Text>Breed: <span>Persian cat</span></Text>
            </li>
            <li>
                <Text>Comments: <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam vitae consequuntur blanditiis id debitis reiciendis quam deleniti porro! Quia, deserunt.</span></Text>
            </li>
        </ul>
    </Box>;
};

export default PetsItem;