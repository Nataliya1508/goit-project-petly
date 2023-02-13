import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentNotice,
  // getNoticesLoading,
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
// import Loader from 'components/Loader/Loader';

const ModalNotice = ({ isOpen, onClose, id, toggleFavorite, favorite }) => {
  const dispatch = useDispatch();
  const notice = useSelector(selectCurrentNotice);
  // const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // setisLoading(true);
      dispatch(getNoticeById(id));
      // setisLoading(false);
    }
  }, [dispatch, id, isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bg="rgba(17, 17, 17, 0.6);" />
      {/* {!isLoading ? ( */}
      <ModalContent
        w={['280px', null, '280px', '704px']}
        maxW={'none'}
        borderRadius={['20px', null, '20px', '40px']}
        // {...rest}
      >
        {notice?.title && (
          <ModalHeader
            mx={'auto'}
            display={['none', 'none', 'none', null]}
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
        <ModalBody
          px={'20px'}
          py={[null, null, null, '32px']}
          pb={['40px', '40px', '40px', null]}
          pt={['60px', '60px', '60px', null]}
        >
          <Box bg="#ffffff" position="relative">
            <Box
              display={[null, null, null, 'grid']}
              gridTemplateColumns="288px 356px"
              gap="20px"
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
                  {notice?.categoryName === 'for-free'
                    ? 'in good hands'
                    : notice?.categoryName.split('-').join(' ')}
                </Text>
              </Box>

              <Box>
                <Text
                  maxWidth="316px"
                  mb={['16px', '16px', '16px', '20px']}
                  mt={['16px', '16px', '16px', '0px']}
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
                  _notLast={{ marginBottom: '0px' }}
                >
                  <ListItem display="flex" _notLast={{ marginBottom: '8px' }}>
                    <FormLabel
                      minWidth="118px"
                      fontWeight={'600'}
                      fontSize={['14px', '14px', '14px', '16px']}
                      lineHeight={'1.36'}
                      m="0"
                    >
                      Name:
                    </FormLabel>
                    <Text
                      fontSize={['14px', '14px', '14px', '16px']}
                      lineHeight={'1.36'}
                    >
                      {notice?.name ? notice?.name : '-'}
                    </Text>
                  </ListItem>
                  <ListItem display="flex" _notLast={{ marginBottom: '8px' }}>
                    <FormLabel
                      minWidth="118px"
                      fontWeight={'600'}
                      fontSize={['14px', '14px', '14px', '16px']}
                      lineHeight={'1.36'}
                      m="0"
                    >
                      Birthday:
                    </FormLabel>
                    <Text
                      fontSize={['14px', '14px', '14px', '16px']}
                      lineHeight={'1.36'}
                    >
                      {notice?.birthdate === 'null' ? '-' : notice?.birthdate}
                    </Text>
                  </ListItem>
                  <ListItem display="flex" _notLast={{ marginBottom: '8px' }}>
                    <FormLabel
                      minWidth="118px"
                      fontWeight={'600'}
                      fontSize={['14px', '14px', '14px', '16px']}
                      lineHeight={'1.36'}
                      m="0"
                    >
                      Breed:
                    </FormLabel>
                    <Text
                      fontSize={['14px', '14px', '14px', '16px']}
                      lineHeight={'1.36'}
                    >
                      {notice?.breed ? notice?.breed : '-'}
                    </Text>
                  </ListItem>
                  <ListItem display="flex" _notLast={{ marginBottom: '8px' }}>
                    <FormLabel
                      minWidth="118px"
                      fontWeight={'600'}
                      fontSize={['14px', '14px', '14px', '16px']}
                      lineHeight={'1.36'}
                      m="0"
                    >
                      Location:
                    </FormLabel>
                    <Text
                      fontSize={['14px', '14px', '14px', '16px']}
                      lineHeight={'1.36'}
                    >
                      {notice?.location}
                    </Text>
                  </ListItem>
                  <ListItem display="flex" _notLast={{ marginBottom: '8px' }}>
                    <FormLabel
                      minWidth="118px"
                      fontWeight={'600'}
                      fontSize={['14px', '14px', '14px', '16px']}
                      lineHeight={'1.36'}
                      m="0"
                    >
                      The sex:
                    </FormLabel>
                    <Text
                      fontSize={['14px', '14px', '14px', '16px']}
                      lineHeight={'1.36'}
                    >
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
                          fontWeight={'600'}
                          fontSize={['14px', '14px', '14px', '16px']}
                          lineHeight={'1.36'}
                          m="0"
                        >
                          Email:
                        </FormLabel>
                        {notice?.owner?.email ? (
                          <Link
                            fontSize={['14px', '14px', '14px', '16px']}
                            lineHeight={'1.36'}
                            href={`mailto: ${notice?.owner?.email}`}
                          >
                            {notice?.owner?.email}
                          </Link>
                        ) : (
                          <Text
                            fontSize={['14px', '14px', '14px', '16px']}
                            lineHeight={'1.36'}
                          >
                            -
                          </Text>
                        )}
                      </ListItem>
                      <ListItem
                        display="flex"
                        _notLast={{ marginBottom: '8px' }}
                      >
                        <FormLabel
                          minWidth="118px"
                          fontWeight={'600'}
                          fontSize={['14px', '14px', '14px', '16px']}
                          lineHeight={'1.36'}
                          m="0"
                        >
                          Phone:
                        </FormLabel>
                        {notice?.owner?.phone ? (
                          <Link
                            fontSize={['14px', '14px', '14px', '16px']}
                            lineHeight={'1.36'}
                            href={`mailto: ${notice?.owner?.phone}`}
                          >
                            {notice?.owner?.phone}
                          </Link>
                        ) : (
                          <Text
                            fontSize={['14px', '14px', '14px', '16px']}
                            lineHeight={'1.36'}
                          >
                            -
                          </Text>
                        )}
                      </ListItem>
                    </>
                  )}
                  {notice?.price && (
                    <ListItem display="flex" _notLast={{ marginBottom: '8px' }}>
                      <FormLabel
                        minWidth="118px"
                        fontWeight={'600'}
                        fontSize={['14px', '14px', '14px', '16px']}
                        lineHeight={'1.36'}
                        m="0"
                      >
                        Price:
                      </FormLabel>
                      <Text
                        fontSize={['14px', '14px', '14px', '16px']}
                        lineHeight={'1.36'}
                      >
                        {notice?.price} $
                      </Text>
                    </ListItem>
                  )}
                </List>
              </Box>
            </Box>

            <Text
              fontSize={['14px', '14px', '14px', '16px']}
              lineHeight={'1.36'}
              mt="28px"
            >
              <b>Comments:</b> {notice?.comments}
            </Text>
            <Box
              display={[null, null, 'flex', 'flex']}
              justifyContent="flex-start"
              flexWrap={[null, null, 'wrap', 'nowrap']}
              pr={[null, null, null, '20px']}
              mt={['40px', '40px', '40px', '32px']}
              flexDirection="row-reverse"
            >
              <Link
                display="flex"
                justifyContent="center"
                alignItems="center"
                width={['100%', '100%', '100%', '160px']}
                height={[10, null, 10, null, 10]}
                marginBottom={['12px', '12px', '12px', '0px']}
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
                width={['100%', '100%', '100%', '160px']}
                height={[10, null, 10, null, 10]}
                marginRight={[null, null, null, '12px']}
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
                aria-label="toggle favorite"
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
          _hover={{ backgroundColor: 'accent.accentOrange' }}
          _focus={{ backgroundColor: 'accent.accentOrange' }}
        />
      </ModalContent>
      {/* ) : (  <Loader />
       )} */}
    </Modal>
  );
};

export default ModalNotice;
