import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { getUser, getIsLoggedIn } from '../../redux/auth/auth-selectors';

import { getFavoriteNotices } from '../../redux/notices/notices-selectors';
import { addToFavorites } from '../../redux/notices/notices-operations';
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
  photo,
  favorite,
  title,
  breed,
  location,
  birthdate,
  price,
  categoryName,
  deleteMyNotice,
}) => {
  const dispatch = useDispatch();

  const user = useSelector(getUser);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const favoriteNotices = useSelector(getFavoriteNotices);

  useEffect(() => {}, [favoriteNotices]);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const toggleFavorite = () => {
  //   if (!isLoggedIn) {
  //     toast.info('You should be logged in to add to favorites');
  //     return;
  //   }

  //   dispatch(addToFavorites(id));
  // };

  return (
    <Card
      as={'li'}
      width={'100%'}
      boxShadow={'7px 4px 14px rgba(49, 21, 4, 0.07)'}
      borderBottomRadius={'20px'}
    >
      <CardBody p={'0'} mb={price || favorite ? '0' : '30px'}>
        <Box position={'relative'}>
          <Image src={photo} alt={breed} width={'100%'} height={'288px'} />
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
            {categoryName}
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
            Age: {birthdate}
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
          onClick={() =>
          mb={favorite && '12px'}
        >
          Learn more
        </CardButton> */}

        <CardButton onClick={handleOpen} modalButton>
          Learn more
        </CardButton>

        {open && <ModalNotice open={open} handleClose={handleClose} id={id} />}

        {favorite && (
          <CardButton
            mt={favorite && '12px'}
            type="submit"
            onClick={() => deleteMyNotice(id)}
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
