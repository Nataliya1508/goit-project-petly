import { Box } from "@chakra-ui/react";
import PetsItem from "./PetsItem";

// тут буде рендеринг PetsItem за допомогою map

const PetsList = () => {
  return (
    <Box >
      <PetsItem/>
    </Box>)
};

export default PetsList;