import { Box, Heading } from '@chakra-ui/react';
import { Filter } from 'shared/components';

export const App = () => {
  return (
<>
    <Box display="flex" justifyContent="center" bg="accent.100">
      <Heading as="h1">React template with CHAKRA UI</Heading>
      
    </Box>
    <Filter>in good hands</Filter>

</>
  );
};
