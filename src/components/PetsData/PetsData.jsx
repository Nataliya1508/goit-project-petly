import { Box, Button } from "@chakra-ui/react";
import PetsList from "components/PetsList/PetsList";


const PetsData = () => {
    return <Box>
        <Button type="button">Add pet</Button>
        <PetsList/>
    </Box>;
};

export default PetsData;