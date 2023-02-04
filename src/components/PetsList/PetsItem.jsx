import { List, ListItem, Box, Text, Flex } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

const PetsItem = () => {
  return (
    <Flex
      bgColor="#FFFFFF"
      box-shadow="7px 4px 14px rgba(0, 0, 0, 0.11)"
      borderRadius="40px"
      direction={{ base: 'column', md: 'row', xl: 'row' }}
      mb={{ base: '20px', xl: '22px' }}
      pr={{ base: '20px', md: '20px', xl: '28px' }}
      pl={{ base: '20px', md: '20px', xl: '20px' }}
      pb={{ base: '40px', md: '20px', xl: '20px' }}
      pt={{ base: '16px', md: '20px', xl: '20px' }}
    >
      <Box
        as="image"
        src=""
        alt="pet photo"
        display="block"
        w={{ base: '240px', md: '161px' }}
        h={{ base: '240px', md: '161px' }}
        mr={{ base: '0px', md: '32px' }}
        bg="#F59256"
        borderRadius={{ base: '40px', md: '20px' }}
      />
      <Box
        position="relative"
        w={{ base: '235px', md: '471px', xl: '580px' }}
        mt={{ base: '20px', md: '0px' }}
      >
        <Box
          as="button"
          type="button"
          position="absolute"
          top={{ base: '-4px', md: '0px' }}
          right="0px"
          bg={{ base: 'transparent', md: '#FDF7F2' }}
          w={{ base: '20px', md: '44px' }}
          h={{ base: '20px', md: '44px' }}
          borderRadius="50%"
          size="44px"
          color="rgba(17, 17, 17, 0.6)"
          _hover={{
            filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
            color: '#F59256',
          }}
          _focus={{
            filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
            color: '#F59256',
          }}
        >
          <DeleteIcon
            h={{ base: '20px', md: '24px' }}
            w={{ base: '20px', md: '24px' }}
            color="inherit"
          />
        </Box>
        <List>
          <ListItem mb={{ base: '20px', xl: '22px' }}>
            <Text
              fontSize={{ base: '14px', md: '16px' }}
              lineHeight={{ base: '1.35' }}
              fontWeight="500"
            >
              Name:{' '}
              <Text as="span" fontWeight="400">
                Jack
              </Text>
            </Text>
          </ListItem>
          <ListItem mb={{ base: '20px', xl: '22px' }}>
            <Text
              fontSize={{ base: '14px', md: '16px' }}
              lineHeight={{ base: '1.35' }}
              fontWeight="500"
            >
              Date of birth:{' '}
              <Text as="span" fontWeight="400">
                22.04.2018
              </Text>
            </Text>
          </ListItem>
          <ListItem mb={{ base: '20px', xl: '22px' }}>
            <Text
              fontSize={{ base: '14px', md: '16px' }}
              lineHeight={{ base: '1.35' }}
              fontWeight="500"
            >
              Breed:{' '}
              <Text as="span" fontWeight="400">
                Persian cat
              </Text>
            </Text>
          </ListItem>
          <ListItem>
            <Text
              fontSize={{ base: '14px', md: '16px' }}
              lineHeight={{ base: '1.35' }}
              fontWeight="500"
            >
              Comments:{' '}
              <Text
                as="span"
                fontWeight="400"
                lineHeight={{ base: '1.57', md: '1.35' }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam vitae consequuntur blanditiis id debitis reiciendis
                quam deleniti porro! Quia, deserunt.
              </Text>
            </Text>
          </ListItem>
        </List>
      </Box>
    </Flex>
  );
};

export default PetsItem;
