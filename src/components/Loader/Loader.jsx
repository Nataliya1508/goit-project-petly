import { Spinner,Box } from '@chakra-ui/react';

const Loader = () => {
    return (
    <Box textAlign={'center'}>
        <Spinner
            thickness='4px'
            speed='0.85s'
            emptyColor='#F59256;'
            color='#F5F5F5'
            textAlign='center'
            size='xl' />
    </Box>
    )
  };
  
  export default Loader;