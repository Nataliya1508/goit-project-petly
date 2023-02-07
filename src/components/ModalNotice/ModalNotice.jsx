import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { getUser, getIsLoggedIn } from '../../redux/auth/auth-selectors';
import {
  // getFavoriteNotices,
  selectCurrentNotice,
  getNoticesLoading,
} from '../../redux/notices/notices-selectors';

import { getNoticeById } from '../../redux/notices/notices-operations';
import { ReactComponent as HeartIcon } from '../../media/akar-icons_heart.svg';
import petTemlate from '../../media/no_img.png';
import { Button } from '../../shared/components';

import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Image,
  List,
  ListItem,
  Text,
  FormLabel,
  Link,
  Box,
  Modal,
} from '@chakra-ui/react';
import Loader from 'components/Loader/Loader';

function ModalNotice({
  isOpen,
  onClose,
  id,
  toggleFavorite,
  favorite,
  calculatePetsAgeModal,
}) {
  const dispatch = useDispatch();
  // const user = useSelector(getUser);
  // const isLoggedIn = useSelector(getIsLoggedIn);
  // const favoriteNotices = useSelector(getFavoriteNotices);
  const notice = useSelector(selectCurrentNotice);
  const isLoading = useSelector(getNoticesLoading);

  useEffect(() => {
    if (isOpen) {
      console.log(1231313123131);
      dispatch(getNoticeById(id));
    }
  }, [dispatch, id, isOpen]);
  console.log(isOpen);

  // const { title, children, ...rest } = useDisclosure();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bg="rgba(17, 17, 17, 0.6);" />
      <ModalContent
        w={['280px', null, '280px', '704px']}
        maxW={'none'}
        px={['20px', null, '20px', '20px']}
        py={'32px'}
        borderRadius={['20px', null, '20px', '40px']}
        // {...rest}
      >
        {!isLoading ? (
          <>
            <>
              {notice?.title && (
                <ModalHeader
                  mx={'auto'}
                  mb={['20px', null, '20px', '40px']}
                  p={'0'}
                  fontSize={['2xl', null, '2xl', '4xl']}
                  fontWeight={'500'}
                  lineHeight={'short'}
                  color={'#111111'}
                >
                  {notice.title}
                </ModalHeader>
              )}
            </>
            <ModalBody>
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
                      src={notice?.photo ?? petTemlate}
                      alt={notice?.breed}
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
                      {notice?.categoryName.split('-').join(' ')}
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
                      {notice?.title}
                    </Text>
                    <List
                      display="flex"
                      flexDirection="column"
                      marginBottom="28px"
                      _notLast={{ marginBottom: '0px' }}
                    >
                      <ListItem
                        display="flex"
                        _notLast={{ marginBottom: '8px' }}
                      >
                        <FormLabel
                          minWidth="118px"
                          fontWeight="600"
                          fontSize="16px"
                          lineHeight="1.36"
                          m="0"
                        >
                          Name:
                        </FormLabel>
                        <Text fontSize="16px" lineHeight="1.36" color="#000000">
                          {notice?.name ? notice?.name : '-'}
                        </Text>
                      </ListItem>
                      <ListItem
                        display="flex"
                        _notLast={{ marginBottom: '8px' }}
                      >
                        <FormLabel
                          minWidth="118px"
                          fontWeight="600"
                          fontSize="16px"
                          lineHeight="1.36"
                          m="0"
                        >
                          Birthday:
                        </FormLabel>
                        <Text fontSize="16px" lineHeight="1.36" color="#000000">
                          {calculatePetsAgeModal(notice?.birthdate)
                            ? calculatePetsAgeModal(notice?.birthdate)
                            : '-'}
                        </Text>
                      </ListItem>
                      <ListItem
                        display="flex"
                        _notLast={{ marginBottom: '8px' }}
                      >
                        <FormLabel
                          minWidth="118px"
                          fontWeight="600"
                          fontSize="16px"
                          lineHeight="1.36"
                          m="0"
                        >
                          Breed:
                        </FormLabel>
                        <Text fontSize="16px" lineHeight="1.36" color="#000000">
                          {notice?.breed ? notice?.breed : '-'}
                        </Text>
                      </ListItem>
                      <ListItem
                        display="flex"
                        _notLast={{ marginBottom: '8px' }}
                      >
                        <FormLabel
                          minWidth="118px"
                          fontWeight="600"
                          fontSize="16px"
                          lineHeight="1.36"
                          m="0"
                        >
                          Loсation:
                        </FormLabel>
                        <Text fontSize="16px" lineHeight="1.36" color="#000000">
                          {notice?.location}
                        </Text>
                      </ListItem>
                      <ListItem
                        display="flex"
                        _notLast={{ marginBottom: '8px' }}
                      >
                        <FormLabel
                          minWidth="118px"
                          fontWeight="600"
                          fontSize="16px"
                          lineHeight="1.36"
                          m="0"
                        >
                          The sex:
                        </FormLabel>
                        <Text fontSize="16px" lineHeight="1.36" color="#000000">
                          {notice?.sex}
                        </Text>
                      </ListItem>
                      {notice?.owner && (
                        <>
                          <ListItem
                            display="flex"
                            _notLast={{ marginBottom: '8px' }}
                          >
                            <FormLabel
                              minWidth="118px"
                              fontWeight="600"
                              fontSize="16px"
                              lineHeight="1.36"
                              m="0"
                            >
                              Email:
                            </FormLabel>
                            <Link href={`mailto: ${notice?.email}`}>
                              {notice?.email ? notice?.email : '-'}
                            </Link>
                          </ListItem>
                          <ListItem
                            display="flex"
                            _notLast={{ marginBottom: '8px' }}
                          >
                            <FormLabel
                              minWidth="118px"
                              fontWeight="600"
                              fontSize="16px"
                              lineHeight="1.36"
                              m="0"
                            >
                              Phone:
                            </FormLabel>
                            <Link href={`tel: ${notice?.phone}`}>
                              {notice?.phone ? notice?.phone : '-'}
                            </Link>
                          </ListItem>
                        </>
                      )}
                      {/* {pets.price && (
                    <ListItem display="flex" _notLast={{ marginBottom: '8px' }}>
                      <FormLabel
                        minWidth="118px"
                        fontWeight="600"
                        fontSize="16px"
                        lineHeight="1.36"
                        m="0"
                      >
                        Price:
                      </FormLabel>
                      <Text>{notice?.price} $</Text>
                    </ListItem>
                  )} */}
                    </List>
                  </Box>
                </Box>

                <Text>
                  <b>Comments:</b> {notice?.comments}
                </Text>

                <Box
                  display="flex"
                  justifyContent="flex-start"
                  flexWrap={['34px', null, 'wrap', 'nowrap']}
                  paddingRight="20px"
                  marginTop={[null, null, '40px', '32px']}
                  flexDirection="row-reverse"
                >
                  <Link
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width={[null, null, '100%', '160px']}
                    height={[10, null, 10, null, 10]}
                    marginBottom={[null, null, '12px', '0px']}
                    fontSize="16px"
                    lineHeight="1.375"
                    letterSpacing="0.04em"
                    cursor="pointer"
                    color="#ffffff"
                    textAlign="center"
                    backgroundColor="#F59256"
                    borderRadius="40px"
                    _hover={{
                      backgroundColor: '#FF6101',
                    }}
                    _focus={{
                      backgroundColor: '#FF6101',
                    }}
                    href={`tel: ${notice?.owner?.phone}`}
                  >
                    Contact
                  </Link>
                  <Button
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width={[null, null, '100%', '160px']}
                    height={[10, null, 10, null, 10]}
                    marginRight={[null, null, '0px', '12px']}
                    fontSize="16px"
                    lineHeight="1.375"
                    letterSpacing="0.04em"
                    cursor="pointer"
                    borderRadius="40px"
                    _hover={{ borderColor: '#FF6101' }}
                    _focus={{ borderColor: '#FF6101' }}
                    rightIcon={<HeartIcon />}
                    variant="solid"
                    onClick={toggleFavorite}
                  >
                    {!favorite ? 'Add to' : 'Remove from'}
                  </Button>
                </Box>
              </Box>
            </ModalBody>
            <ModalCloseButton
              width={['34px', null, '34px', '44px']}
              height={['34px', null, '34px', '44px']}
              top={'20px'}
              right={'20px'}
              bg={'#FDF7F2'}
              borderRadius={'50%'}
            />
            {/* <ModalBody p={'0'}>{children}</ModalBody> */}
          </>
        ) : (
          <Loader />
        )}
      </ModalContent>
    </Modal>
  );
}

export default ModalNotice;
