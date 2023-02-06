
import { List, ListItem, Box, Text, Flex, Image } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import petDefaultAvatar from '../../media/petDefaultAvatar.svg';
import { useDispatch } from 'react-redux';
import { deletePet } from 'redux/auth/auth-operations';

const PetsList = ({ pets }) => {
  const dispatch = useDispatch();
  const onDeleteBtnClick = (e, id) => {
    dispatch(deletePet(id))
    e.preventdefault()
  }
  return (
    <Box >
      {pets.map(({ _id, name, birthday, breed, photo, comments }) => (
        <Flex
          key = {_id}
          bgColor="#FFFFFF"
          box-shadow="7px 4px 14px rgba(0, 0, 0, 0.11)"
          borderRadius="40px"
          direction={{ base: 'column', md: 'row', xl: 'row' }}
          mb={{ base: '20px', xl: '22px' }}
          px={{ base: '20px', md: '20px', xl: '28px' }}
          py={{ base: '40px', md: '20px', xl: '20px' }}>
          <Box
            w={{ base: '240px', md: '161px' }}
            h={{ base: '240px', md: '161px' }}
            mr={{ base: '0px', md: '32px' }}
            bgColor='#FDF7F2'
            borderRadius={{ base: '40px', md: '20px' }}>
            <Image
              boxSize={{ base: '240px', md: '161px' }}
              borderRadius={{ base: '40px', md: '20px' }}
              src={ photo ?? petDefaultAvatar}
              alt="pet photo"/>
          </Box>
          <Box
            position="relative"
            w={{ base: '235px', md: '471px', xl: '580px' }}
            mt={{ base: '20px', md: '0px' }}
          >
            <Box
              onClick={(e) =>  onDeleteBtnClick(e, _id) }
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
              <ListItem display='flex' alignItems="center" mb={{ base: '20px', xl: '22px' }}>
                <Text
                  fontSize={{ base: '14px', md: '16px' }}
                  lineHeight={{ base: '1.35' }}
                  fontWeight="500"
                  display="block"
                  mr="5px"
                  >Name:
                </Text>
                <Text  fontWeight="400">
                  {name}
                </Text>
              </ListItem>
              <ListItem display='flex' alignItems="center" mb={{ base: '20px', xl: '22px' }}>
                <Text
                  fontSize={{ base: '14px', md: '16px' }}
                  lineHeight={{ base: '1.35' }}
                  fontWeight="500"
                  display="block"
                  mr="5px"
                  >Date of birth:
                </Text>
                <Text  fontWeight="400">
                  {birthday}
                </Text>
              </ListItem>
              <ListItem display='flex' alignItems="center" mb={{ base: '20px', xl: '22px' }}>
                <Text
                  fontSize={{ base: '14px', md: '16px' }}
                  lineHeight={{ base: '1.35' }}
                  fontWeight="500"
                  display="block"
                  mr="5px"
                  >Breed:
                </Text>
                <Text  fontWeight="400">
                  {breed}
                </Text>
              </ListItem>
              <ListItem display='flex' alignItems="center">
                <Text
                  fontSize={{ base: '14px', md: '16px' }}
                  lineHeight={{ base: '1.35' }}
                  fontWeight="500"
                  display="block"
                  mr="5px"
                  >Comments:
                </Text>
                  <Text
                    fontWeight="400"
                    lineHeight={{ base: '1.57', md: '1.35' }}
                    >{comments}
                  </Text>
              </ListItem>
            </List>
          </Box>
        </Flex>
      )
      )}
    </Box>)
};

export default PetsList;