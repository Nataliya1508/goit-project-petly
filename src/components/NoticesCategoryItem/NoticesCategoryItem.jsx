import React, { useState } from 'react';
import {
  Text,
  Box,
  Image,
  Card,
  CardBody,
  Heading,
  CardFooter,
} from '@chakra-ui/react';
import { CardButton, FavoriteButton } from 'shared/components';
import ModalNotice from '../ModalNotice/ModalNotice';

const NoticesCategoryItem = ({
  id,
  avatar,
  favorite,
  title,
  breed,
  location,
  age,
  price,
  condition,
  onDeletePets,
  onLearnMore,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Card
      as={'li'}
      width={'100%'}
      boxShadow={'7px 4px 14px rgba(49, 21, 4, 0.07)'}
      borderBottomRadius={'20px'}
    >
      <CardBody p={'0'} mb={price || favorite ? '0' : '30px'}>
        <Box position={'relative'}>
          <Image src={avatar} alt={breed} width={'100%'} height={'288px'} />
          <Box
            as={'span'}
            position={'absolute'}
            top={'20px'}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            w={'158px'}
            h={'28px'}
            px={'20px'}
            py={'6px'}
            borderRightRadius={'20px'}
            color={'#111111'}
            fontSize={'xs'}
            fontWeight={'medium'}
            lineHeight={'xl'}
            letterSpacing={'0.04em'}
            backgroundColor={'rgba(255, 255, 255, 0.6)'}
            backdropFilter={'blur(2px)'}
          >
            {condition}
          </Box>
          <FavoriteButton />
        </Box>
        <Box p={'20px'}>
          <Heading
            mb={'20px'}
            color={'#111111'}
            fontSize={'28px'}
            fontWeight={'bold'}
            lineHeight={'short'}
            letterSpacing={'-0.01em'}
          >
            {title}
          </Heading>
          <Text
            mb={'8px'}
            fontSize={'16px'}
            fontWeight={'medium'}
            lineHeight={'short'}
            color={'#111111'}
          >
            Breed: {breed}
          </Text>
          <Text
            mb={'8px'}
            fontSize={'16px'}
            fontWeight={'medium'}
            lineHeight={'short'}
            color={'#111111'}
          >
            Location: {location}
          </Text>
          <Text
            mb={price && '8px'}
            fontSize={'16px'}
            fontWeight={'medium'}
            lineHeight={'short'}
            color={'#111111'}
          >
            Age: {age}
          </Text>
          {price && (
            <Text
              mb={price && '8px'}
              fontSize={'16px'}
              fontWeight={'medium'}
              lineHeight={'short'}
              color={'#111111'}
            >
              Price: {price}
            </Text>
          )}
        </Box>
      </CardBody>
      <CardFooter
        pt={'0'}
        px={'16px'}
        pb={!favorite ? '32px' : '16px'}
        width={'100%'}
        display={'flex'}
        alignItems={'center'}
        flexDirection={'column'}
      >
        {/* <CardButton
          type="submit"
          onClick={() => onLearnMore(id)}
          mb={favorite && '12px'}
        >
          Learn more
        </CardButton> */}

        <CardButton onClick={handleOpen} modalButton>
          Learn more
        </CardButton>

        <ModalNotice open={open} handleClose={handleClose} />

        {favorite && (
          <CardButton
            mt={favorite && '12px'}
            type="submit"
            onClick={() => onDeletePets(id)}
            controle="delete"
          >
            Delete
          </CardButton>
        )}
      </CardFooter>
    </Card>
  );
};

export default NoticesCategoryItem;
