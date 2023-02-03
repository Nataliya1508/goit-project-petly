import React from 'react';
import { ReactComponent as HeartIcon } from '../ModalNotice/akar-icons_heart.svg';
import petTemlate from '../ModalNotice/no_img.jpg';
import { Button, CardButton } from '../../shared/components';
//import { Container } from '../../shared/components/Box';
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Image,
  List,
  ListItem,
  Text,
  FormLabel,
  Link,
  Box,
  Modal,
} from '@chakra-ui/react';

const pets = {
  owner: {
    email: 'test@gmail.com',
    phone: '+380123456789',
  },
  _id: '63836ccf17d61119e7b318d2',
  category: 'In good hands',
  title: 'Super golden retriever',
  name: 'Bred',
  birthdate: '20.10.2022',
  breed: 'Golden retriever',
  sex: 'male',
  location: 'Kiev, Ukraine',
  price: null,
  avatarURL:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjI80NrzAYuiUgBDcg8wkGbPbZOxfHF7540w&s',
  comments:
    'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit amet, consectetur Lorem.',
};
const receivedItem = {
  favorite: null,
};

function ModalNotice({ Data, favorite }) {
  //   const {
  //     title,
  //     avatarURL,
  //     birthdate,
  //     breed,
  //     category,
  //     comments,
  //     location,
  //     name,
  //     owner,
  //     price,
  //     sex,
  //   } = Data;

  const labelStyles = {
    minWidth: '118px',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '1.36',
    m: '0',
  };

  const description = {
    fontSize: '16px',
    lineHeight: '1.36',
    color: '#000000',
  };

  const itemsStyles = {
    display: 'flex',
    _notLast: { marginBottom: '8px' },
  };

  const bthContact = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: [null, null, '100%', '160px'],
    height: [10, null, 10, null, 10],
    marginBottom: [null, null, '12px', '0px'],
    fontSize: '16px',
    lineHeight: '1.375',
    letterSpacing: '0.04em',
    color: '#ffffff',
    textAlign: 'center',
    backgroundColor: '#F59256',
    borderRadius: '40px',
    cursor: 'pointer',

    _hover: {
      backgroundColor: '#FF6101',
    },
    _focus: {
      backgroundColor: '#FF6101',
    },
  };

  const bthFavorite = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: [null, null, '100%', '160px'],
    height: [10, null, 10, null, 10],
    marginRight: [null, null, '0px', '12px'],

    fontSize: '16px',
    lineHeight: '1.375',
    letterSpacing: '0.04em',
    cursor: 'pointer',

    borderRadius: '40px',

    _hover: {
      borderColor: '#FF6101',
    },
    _focus: {
      borderColor: '#FF6101',
    },
  };

  const { isOpen, onClose, title, children, onOpen, ...rest } = useDisclosure();
  return (
    <>
      <CardButton onClick={onOpen}>Open Modal</CardButton>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="rgba(17, 17, 17, 0.6);" />
        <ModalContent
          w={['280px', null, '280px', '704px']}
          maxW={'none'}
          px={['20px', null, '20px', '20px']}
          py={'32px'}
          borderRadius={['20px', null, '20px', '40px']}
          {...rest}
        >
          {title && (
            <ModalHeader
              mx={'auto'}
              mb={['20px', null, '20px', '40px']}
              p={'0'}
              fontSize={['2xl', null, '2xl', '4xl']}
              fontWeight={'500'}
              lineHeight={'short'}
              color={'#111111'}
            >
              {title}
            </ModalHeader>
          )}
          <Box bg="#ffffff" position="relative">
            <Box
              display={[null, null, null, 'grid']}
              gridTemplateColumns="288px 356px"
              gap="20px"
              marginBottom="28px"
            >
              <Box
                position="relative"
                width={[null, null, '240px', '288px']}
                height={[null, null, '240px', '328px']}
                border-radius="0px 0px 40px 40px"
                overflow="hidden"
              >
                <Image
                  objectFit="cover"
                  borderRadius="0px 0px 40px 40px"
                  w="100%"
                  h="100%"
                  src={pets.avatarURL || petTemlate}
                  alt={pets.breed}
                  onError={e => {
                    e.target.src = petTemlate;
                  }}
                />
                <Text
                  position="absolute"
                  top="20px"
                  left="0"
                  display="flex"
                  alignItems="center"
                  minHeight="28px"
                  minWidth="158px"
                  paddingLeft="20px"
                  fontSize="12px"
                  lineHeight="1.36"
                  letterSpacing="0.04em"
                  borderTopRightRadius="20px"
                  borderBottomRightRadius="20px"
                  bg="rgba(255, 255, 255, 0.6)"
                >
                  {pets.category.split('-').join(' ')}
                </Text>
              </Box>

              <Box>
                <Text
                  marginBottom="16px"
                  fontWeight="700"
                  fontSize="28px"
                  lineHeight="1.36"
                  letterSpacing="-0.01em"
                >
                  {pets.title}
                </Text>
                <List
                  display="flex"
                  flexDirection="column"
                  marginBottom="28px"
                  _notLast={{ marginBottom: '0px' }}
                >
                  <ListItem sx={itemsStyles}>
                    <FormLabel sx={labelStyles}>Name:</FormLabel>
                    <Text sx={description}>{pets.name ? pets.name : '-'}</Text>
                  </ListItem>
                  <ListItem sx={itemsStyles}>
                    <FormLabel sx={labelStyles}>Birthday:</FormLabel>
                    <Text sx={description}>
                      {pets.birthdate ? pets.birthdate : '-'}
                    </Text>
                  </ListItem>
                  <ListItem sx={itemsStyles}>
                    <FormLabel sx={labelStyles}>Breed:</FormLabel>
                    <Text sx={description}>
                      {pets.breed ? pets.breed : '-'}
                    </Text>
                  </ListItem>
                  <ListItem sx={itemsStyles}>
                    <FormLabel sx={labelStyles}>Loсation:</FormLabel>
                    <Text sx={description}>{pets.location}</Text>
                  </ListItem>
                  <ListItem sx={itemsStyles}>
                    <FormLabel sx={labelStyles}>The sex:</FormLabel>
                    <Text sx={description}>{pets.sex}</Text>
                  </ListItem>
                  {pets.owner && (
                    <>
                      <ListItem sx={itemsStyles}>
                        <FormLabel sx={labelStyles}>Email:</FormLabel>
                        <Link href={`mailto: ${pets.owner?.email}`}>
                          {pets.owner?.email}
                        </Link>
                      </ListItem>
                      <ListItem sx={itemsStyles}>
                        <FormLabel sx={labelStyles}>Phone:</FormLabel>
                        <Link href={`tel: ${pets.owner?.phone}`}>
                          {pets.owner?.phone}
                        </Link>
                      </ListItem>
                    </>
                  )}
                  {pets.price && (
                    <ListItem sx={itemsStyles}>
                      <FormLabel sx={labelStyles}>Price:</FormLabel>
                      <Text>{pets.price} $</Text>
                    </ListItem>
                  )}
                </List>
              </Box>
            </Box>

            <Text>
              <b>Comments:</b> {pets.comments}
            </Text>

            <Box
              display="flex"
              justifyContent="flex-start"
              flexWrap={['34px', null, 'wrap', 'nowrap']}
              paddingRight="20px"
              marginTop={[null, null, '40px', '32px']}
              flexDirection="row-reverse"
            >
              <Link sx={bthContact} href={`tel: ${pets.owner?.phone}`}>
                Contact
              </Link>
              <Button
                sx={bthFavorite}
                rightIcon={<HeartIcon />}
                variant="solid"
              >
                {!receivedItem.favorite ? 'Add to' : 'Remove from'}
              </Button>
            </Box>
          </Box>
          <ModalCloseButton
            width={['34px', null, '34px', '44px']}
            height={['34px', null, '34px', '44px']}
            top={'20px'}
            right={'20px'}
            bg={'#FDF7F2'}
            borderRadius={'50%'}
          />
          <ModalBody p={'0'}>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalNotice;
