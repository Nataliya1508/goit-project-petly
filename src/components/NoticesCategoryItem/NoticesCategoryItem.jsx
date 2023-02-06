import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import petTemlate from '../../media/no_img.png';
import moment from 'moment';

import {
  // getUser,
  getIsLoggedIn,
} from '../../redux/auth/auth-selectors';

import { getFavoriteNotices } from '../../redux/notices/notices-selectors';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../redux/notices/notices-operations';
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

moment().format();

const NoticesCategoryItem = ({
  id,
  photo,
  title,
  breed,
  location,
  birthdate,
  price,
  categoryName,
  deleteMyNotice,
}) => {
  const dispatch = useDispatch();

  // const user = useSelector(getUser);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const favoriteNotices = useSelector(getFavoriteNotices);
  const favorite = favoriteNotices.includes(id);
  console.log('🚀 ~ file: NoticesCategoryItem.jsx:45 ~ favorite', favorite);
  const [isFavorite, setIsFavorite] = useState(favorite);

  useEffect(() => {}, [isFavorite]);

  const calculatePetsAge = birthdate => {
    const petsAge = moment(birthdate, 'LLLL').fromNow(true);
    return petsAge;
  };

  const calculatePetsAgeModal = birthdate => {
    const petsAge = moment(birthdate, 'LLLL').format('DD.MM.YYYY');
    return petsAge;
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const toggleFavorite = () => {
    if (!isLoggedIn) {
      toast.warn('You must sign in for add to favorites!');
      return;
    }
    try {
      if (!isFavorite) {
        dispatch(addToFavorites(id));
        setIsFavorite(true);
      }
      if (isFavorite) {
        dispatch(removeFromFavorites(id));
        setIsFavorite(false);
      }
    } catch (error) {
      setIsFavorite(isFavorite);
      console.log(error);
    }
  };

  return (
    <Card
      as={'li'}
      width={'100%'}
      boxShadow={'7px 4px 14px rgba(49, 21, 4, 0.07)'}
      borderBottomRadius={'20px'}
    >
      <CardBody p={'0'} mb={price ?? favorite ? '0' : '30px'}>
        <Box position={'relative'}>
          <Image
            src={photo ?? petTemlate}
            alt={breed}
            width={'100%'}
            height={'288px'}
          />
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
            Age: {calculatePetsAge(birthdate)}
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

        {open && (
          <ModalNotice
            open={open}
            handleClose={handleClose}
            id={id}
            toggleFavorite={toggleFavorite}
            favorite={isFavorite}
            calculatePetsAgeModal={calculatePetsAgeModal}
          />
        )}

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
