import { FaPen } from 'react-icons/fa';
import { FormControl, FormLabel, Input, Box } from '@chakra-ui/react';

const UserDataItem = ({ name }) => {
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
        fontFamily={{}}
        fontSize={{ base: '12px', md: '18px' }}
        lineHeight={{ base: '1.35' }}
        fontWeight={{ base: '500' }}
        w={{ base: '56px', md: '83px' }}
      >
        {name}
      </FormLabel>
      <Input
        fontSize={{ base: '12px', md: '18px' }}
        lineHeight={{ base: '1.35' }}
        fontWeight={{ base: '500', md: '400' }}
        px="12px"
        w={{ base: '159px', md: '216px' }}
        h={{ base: '24px', md: '32px' }}
        border="1px solid rgba(245, 146, 86, 0.5)"
        borderRadius="40px"
        placeholder="value"
      />

      <Box
        as="Button"
        type="button"
        borderRadius="100%"
        p="0px"
        w={{ base: '20px', md: '32px' }}
        h={{ base: '20px', md: '32px' }}
        padding="5px"
        bg="#FDF7F2"
      >
        <FaPen fill="#F59256" size={{ base: '10px', md: '15px' }} />
      </Box>
    </FormControl>
  );
};

export default UserDataItem;
