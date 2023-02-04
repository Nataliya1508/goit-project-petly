import { WorkTime } from './WorkTime';
import {
  SimpleGrid,
  CardHeader,
  Card,
  Text,
  Box,
  Image,
  Link,
  Stack,
  CardBody,
} from '@chakra-ui/react';

export const OurFriendsList = ({ friends }) => {
  return (
    <SimpleGrid
      justifyItems={'center'}
      columns={{ base: 1, md: 2, lg: 3 }}
      spacing={{ base: '12px', md: '32px' }}
    >
      {friends.map(
        ({
          _id,
          title,
          url,
          addressUrl,
          address,
          imageUrl,
          workDays,
          phone,
          email,
        }) => (
          <Card
            bgColor={'#FFFFFF'}
            borderRadius={'40px'}
            boxShadow={'7px 4px 14px rgba(49, 21, 4, 0.07)'}
            key={_id}
            maxW={{ base: '280px', md: '336px', lg: '394px' }}
            p={{ base: '12px', md: '16px' }}
          >
            <CardHeader
              as={'h3'}
              p={0}
              textAlign={'center'}
              mt={{ base: 2.5, md: 4 }}
              mb={{ base: 2.5, md: 4 }}
              color={'#F59256'}
              fontWeight={'bold'}
              fontSize={{ base: 'sm', md: 'md', lg: 'xl' }}
              lineHeight={{ base: '1.33', md: 'short', lg: '1.35' }}
            >
              <Link
                position={'relative'}
                color={'#f59256'}
                _after={{
                  content: '""',
                  pos: 'absolute',
                  left: 0,
                  bottom: 0,
                  w: 0,
                  h: '1px',
                  bg: '#f59256',
                  transition: 'width 300ms linear',
                }}
                __css={{
                  '&.hover::after': {
                    w: '100%',
                  },
                }}
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                {title}
              </Link>
            </CardHeader>

            <Stack
              direction={{ base: 'column', sm: 'row' }}
              mt={{ base: '12px', md: '16px' }}
            >
              <Box w={{ base: '110px', md: '120px', xl: '158px' }}>
                <Image m={0} src={imageUrl} alt={title} />
              </Box>
              <Stack>
                <CardBody p={0}>
                  <Box
                    as="div"
                    display={'flex'}
                    flexDirection={'column'}
                    textAlign={'start'}
                    mb={{ base: '4px', md: '8px', lg: '12px' }}
                    fontWeight={'medium'}
                    fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}
                    lineHeight={{ base: '1.33', md: '1.35', lg: 'short' }}
                    color={'#111111'}
                    position={'relative'}
                  >
                    Time:
                    {workDays ? <WorkTime workDays={workDays} /> : <hr />}
                  </Box>
                  <Box
                    as="div"
                    display={'flex'}
                    flexDirection={'column'}
                    textAlign={'start'}
                    mb={{ base: '4px', md: '8px', lg: '12px' }}
                    fontWeight={'medium'}
                    fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}
                    lineHeight={{ base: '1.33', md: '1.35', lg: 'short' }}
                    color={'#111111'}
                    type="address"
                  >
                    Address:
                    <Link href={addressUrl} target="_blank" rel="noreferrer">
                      {address ? <span>{address}</span> : <hr />}
                    </Link>
                  </Box>
                  <Box
                    as="div"
                    display={'flex'}
                    flexDirection={'column'}
                    textAlign={'start'}
                    mb={{ base: '4px', md: '8px', lg: '12px' }}
                    fontWeight={'medium'}
                    fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}
                    lineHeight={{ base: '1.33', md: '1.35', lg: 'short' }}
                    color={'#111111'}
                    type="email"
                  >
                    Email:
                    <Link href="mailto:{address}">
                      {' '}
                      {email ? email : <Text />}{' '}
                    </Link>
                  </Box>
                  <Box
                    as="div"
                    display={'flex'}
                    flexDirection={'column'}
                    textAlign={'start'}
                    fontWeight={'medium'}
                    fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}
                    lineHeight={{ base: '1.33', md: '1.35', lg: 'short' }}
                    color={'#111111'}
                    type="phone"
                  >
                    Phone:
                    <Link href="tel:{phone}"> {phone ? phone : <hr />} </Link>
                  </Box>
                </CardBody>
              </Stack>
            </Stack>
          </Card>
        )
      )}
    </SimpleGrid>
  );
};
