import { FaPen } from 'react-icons/fa';
import { FormControl, FormLabel, Input, Box } from '@chakra-ui/react';


const UserDataItem = ({ nameInput, valueInput }) => {
  
  return (
    <FormControl
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      mb="8px"
    >
      <FormLabel
        m="0px"
        fontSize={{ base: '12px', md: '18px' }}
        lineHeight={{ base: '1.35' }}
        fontWeight={{ base: '600' }}
        w={{ base: '56px', md: '83px' }}
      >
        {nameInput}
      </FormLabel>
      <Input
        fontSize={{ base: '12px', md: '18px' }}
        lineHeight={{ base: '1.35' }}
        fontWeight={{ base: '500', md: '400' }}
        px="12px"
        w={{ base: '159px', md: '220px' }}
        h={{ base: '24px', md: '32px' }}
        border="1px solid rgba(245, 146, 86, 0.5)"
        borderRadius="40px"
        value={valueInput}
      />

      <Box
        as="Button"
        display='flex'
        alignItems='center'
        justifyContent='center'
        type="button"
        borderRadius="100%"
        p="0px"
        w={{ base: '20px', md: '32px' }}
        h={{ base: '20px', md: '32px' }}
        padding="5px"
        bg='accent.background'
        color='accent.grey'
        _hover={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))', color: '#F59256' }}
        _focus={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))', color: '#F59256' }}
        transitionProperty={'filter, color'}
        transitionDuration={'250ms'}
        transitionTimingFunction={'cubic-bezier(0.4, 0, 0.2, 1)'}
      >
        <FaPen color="inherit" h={{ base: '10px', md: '15px' }} w={{ base: '10px', md: '15px' }} />
      </Box>
    </FormControl>
  );
};

export default UserDataItem;
