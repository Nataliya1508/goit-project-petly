import { FilterLink, Modal } from 'shared/components';
import { Box, useDisclosure, Text, Button } from '@chakra-ui/react';
import { ModalAddNotice } from 'components/ModalAddNotice';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { toast } from 'react-toastify';
import { AddIcon } from '@chakra-ui/icons';

const NoticesCategoriesNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isLoggedIn = useSelector(getIsLoggedIn);

  const handleClick = () => {
    if (!isLoggedIn) {
      toast('Please log in!');
    }
    onOpen(true);
  };

  return (
    <Box
      maxWidth={{ base: '280px', md: '704px', xl: '1248px' }}
      mx={'auto'}
      id="22"
    >
      <Box mb={{ base: '30px', md: '60px' }} display={'flex'}>
        <Box
          as={'nav'}
          maxW={{ base: '280px', md: '474px', xl: '802px' }}
          display={'flex'}
          flexWrap={'wrap'}
          gap={{ base: '12px', md: '16px 12px', xl: '12px' }}
          mr={'auto'}
          ml={{ base: 'auto', md: '0' }}
        >
          <FilterLink to={'lost-found'}>lost/found</FilterLink>
          <FilterLink to={'free'}>in good hand</FilterLink>
          <FilterLink exact="true" to={'sell'}>
            sell
          </FilterLink>
          {isLoggedIn && (
            <>
              <FilterLink to={'favorite'}>favorite ads</FilterLink>
              <FilterLink to={'own'}>my ads</FilterLink>
            </>
          )}
        </Box>
        <Box
          display={'flex'}
          w={{ base: '80px', md: '140px' }}
          h={{ base: '80px' }}
          flexDirection={{ base: 'column-reverse', md: 'row' }}
          alignItems={{ base: 'center' }}
          justifyContent={{ base: 'center' }}
          borderRadius={{ base: '50%', md: '100%' }}
          bgColor={{ base: '#F59256', md: 'transparent' }}
          // as={'Button'}
          position={{ base: 'fixed', md: 'static' }}
          top={'455px'}
          right={'20px'}
          zIndex={'2'}
        >
          <Text
            maxWidth={{ xl: '767px' }}
            size={{ w: '74px', h: '27px' }}
            textAlign={'center'}
            fontStyle={'normal'}
            fontWeight={'500'}
            fontSize={{ base: '12px', md: '20px' }}
            lineHeight={'27px'}
            mr={{ base: '0px', md: '12px' }}
            color={{ base: 'white', md: '#111111' }}
          >
            Add pet
          </Text>
          <Button
            display={'flex'}
            alignItems={{ base: 'center' }}
            justifyContent={{ base: 'center' }}
            backgroundColor={'#F59256'}
            borderRadius={'50%'}
            w={{ base: '21px', md: '44px' }}
            h={{ base: '21px', md: '44px' }}
            _hover={{ backgroundColor: '#FF6101' }}
            _focus={{ backgroundColor: '#FF6101' }}
            onClick={handleClick}
          >
            <AddIcon
              w={{ base: '21px', md: '16px' }}
              h={{ base: '21px', md: '16px' }}
              color={'white'}
            />
          </Button>
        </Box>
        <Modal isOpen={isOpen} onClose={onClose} title={'Add pet'}>
          <ModalAddNotice onClose={onClose} />
        </Modal>
      </Box>
    </Box>
  );
};

export default NoticesCategoriesNav;
