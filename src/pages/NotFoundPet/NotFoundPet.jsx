import { Heading, Text, Image, Box } from '@chakra-ui/react';
import dog from '../../media/dog.svg';

const NotFoundPet = () => {
  return (
    <Box textAlign="center">
      <Image margin="auto" src={dog} alt="dog" />
      <Heading mt="10" fontSize="2xl" fontWeight="bold">
        Oops! You don't have any pets yet.
      </Heading>
      <Text mt="4" fontSize="xl">
        Don't worry, you are in the right place! Try using the add pet
        functionality or use the navigation menu to get back on track.
      </Text>
    </Box>
  );
};

export default NotFoundPet;
