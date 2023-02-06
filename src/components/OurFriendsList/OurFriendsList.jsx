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
      spacing={{ base: '3', md: '8' }}
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
            borderRadius={'10'}
            boxShadow={'7px 4px 14px rgba(49, 21, 4, 0.07)'}
            key={_id}
            w={{ base: '280px', md: '336px', lg: '394px' }}
            p={{ base: '3', md: '4' }}
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
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                {title}
              </Link>
            </CardHeader>

            <Stack
              direction={{ base: 'column', sm: 'row' }}
              mt={{ base: '3', md: '4' }}
            >
              <Box maxWidth={{ base: '110px', md: '120px', xl: '158px' }}>
                <Image m={0} src={imageUrl} alt={title} />
              </Box>
              <Stack>
                <CardBody p={0}>
                  <Box
                    as="div"
                    display={'flex'}
                    flexDirection={'column'}
                    textAlign={'start'}
                    mb={{ base: '1', md: '2', lg: '3' }}
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
                    mb={{ base: '1', md: '2', lg: '3' }}
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
                    mb={{ base: '1', md: '2', lg: '3' }}
                    fontWeight={'medium'}
                    fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}
                    lineHeight={{ base: '1.33', md: '1.35', lg: 'short' }}
                    color={'#111111'}
                    type="email"
                  >
                    Email:
                    <Link href="mailto:{address}">
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
