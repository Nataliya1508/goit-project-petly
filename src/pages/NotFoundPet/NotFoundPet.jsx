import { Heading, Text, Image, Box } from '@chakra-ui/react';
import dog from '../../media/dog.svg';

const NotFoundPet = ({ category }) => {
  const message = () => {
    if (category === 'own') {
      return 'You have not added your pets yet';
    }
    if (category === 'favorite') {
      return 'There are currently no favorite animals';
    }
    if (category === 'sell') {
      return 'There are currently no pets for sale';
    }
    if (category === 'for-free') {
      return 'There are no pets that can be free.';
    }
    if (category === 'lost-found') {
      return 'So far, no pets have been found or lost.';
    }
    return 'Oops! Your pet list is empty.';
  };

  return (
    <Box textAlign="center">
      <Image margin="auto" src={dog} alt="dog" />
      <Heading mt="10" fontSize="2xl" fontWeight="bold">
        {message(category)}
      </Heading>
      <Text mt="4" fontSize="xl">
        Don't worry, you are in the right place! Try using the navigation menu
        to get back on track.
      </Text>
    </Box>
  );
};

export default NotFoundPet;
